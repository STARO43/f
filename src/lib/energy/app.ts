// Книжная оболочка: монтируется в контейнер, управляет главами,
// стрелками навигации, параметром, прогнозом и справкой.
import { CHAPTERS, BOOK_TITLE } from './content';
import { BookEngine } from './engine';
import type { ExpHandle } from './engine';
import { SCENES } from './scenes';
import { fmt } from './kit';

const LETTERS = ['А', 'Б', 'В', 'Г'];

const chevron = (dir: 'l' | 'r') =>
  dir === 'l'
    ? '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const FLOURISH =
  '<svg viewBox="0 0 36 12" width="36" height="12" aria-hidden="true"><path d="M18 1.5 20.5 6 18 10.5 15.5 6Z" fill="currentColor" opacity=".75"/><circle cx="8" cy="6" r="1.1" fill="currentColor" opacity=".55"/><circle cx="28" cy="6" r="1.1" fill="currentColor" opacity=".55"/></svg>';

export function mountBook(container: HTMLElement): () => void {
  container.innerHTML = `
  <div class="bk-root">
    <button class="bk-arrow bk-arrow--prev" id="bk-prev" aria-label="Предыдущий опыт">${chevron('l')}</button>
    <button class="bk-arrow bk-arrow--next" id="bk-next" aria-label="Следующий опыт">${chevron('r')}</button>
    <main class="bk-page">
      <header class="bk-head bk-pre">
        <div class="bk-ornament" aria-hidden="true"><span></span>${FLOURISH}<span></span></div>
        <h1 class="bk-title">${BOOK_TITLE}</h1>
      </header>
      <div class="bk-swap" id="bk-swap">
        <p class="bk-chapter bk-pre">Эксперимент: <em id="bk-name"></em></p>
        <p class="bk-meta bk-pre">
          <span id="bk-num" class="bk-up"></span><span class="bk-mdot">·</span><span id="bk-meta-formula"></span><span id="bk-stamp" class="bk-stamp" hidden>· прогноз решён</span>
        </p>
        <section class="bk-plate bk-pre" id="bk-plate" aria-label="Трёхмерная сцена опыта">
          <div class="bk-plate-host" id="bk-host"></div>
          <div class="bk-plate-fade" id="bk-fade"></div>
          <p class="bk-toast" id="bk-toast" role="status"></p>
        </section>
        <section class="bk-body bk-pre">
          <p class="bk-lede" id="bk-lede"></p>
          <div class="bk-controls">
            <div class="bk-param">
              <label class="bk-param-label" id="bk-param-label" for="bk-param"></label>
              <input type="range" class="bk-slider" id="bk-param" />
              <output class="bk-param-value" id="bk-param-value"></output>
            </div>
          </div>
          <p class="bk-readouts" id="bk-readouts"></p>
          <div class="bk-quiz">
            <p class="bk-eyebrow">Прогноз</p>
            <p class="bk-question" id="bk-question"></p>
            <div class="bk-options" id="bk-options"></div>
            <p class="bk-verdict" id="bk-verdict" aria-live="polite" hidden></p>
          </div>
          <aside class="bk-reference">
            <p class="bk-eyebrow">Справка</p>
            <p class="bk-formula" id="bk-formula"></p>
            <p class="bk-explain" id="bk-explain"></p>
            <p class="bk-note" id="bk-note"></p>
          </aside>
          <details class="bk-teacher">
            <summary>Справочно</summary>
            <div class="bk-teacher-body">
              <p id="bk-teacher-focus"></p>
              <ol id="bk-teacher-steps"></ol>
            </div>
          </details>
        </section>
        <footer class="bk-folio bk-pre" id="bk-folio"></footer>
      </div>
    </main>
  </div>`;

  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const root = container.querySelector('.bk-root') as HTMLElement;
  const swap = $('bk-swap');
  const nameEl = $('bk-name');
  const numEl = $('bk-num');
  const metaFormula = $('bk-meta-formula');
  const stampEl = $('bk-stamp');
  const host = $('bk-host');
  const fade = $('bk-fade');
  const toast = $('bk-toast');
  const ledeEl = $('bk-lede');
  const paramLabel = $('bk-param-label');
  const paramInput = $('bk-param') as HTMLInputElement;
  const paramValue = $('bk-param-value');
  const readoutsEl = $('bk-readouts');
  const questionEl = $('bk-question');
  const optionsEl = $('bk-options');
  const verdictEl = $('bk-verdict');
  const formulaEl = $('bk-formula');
  const explainEl = $('bk-explain');
  const noteEl = $('bk-note');
  const focusEl = $('bk-teacher-focus');
  const stepsEl = $('bk-teacher-steps');
  const folioEl = $('bk-folio');
  const prevBtn = $('bk-prev') as HTMLButtonElement;
  const nextBtn = $('bk-next') as HTMLButtonElement;

  const solved = new Set<number>();
  let idx = 0;
  let busy = false;
  let engine: BookEngine | null = null;
  let exp: ExpHandle | null = null;
  let toastTimer = 0;

  // ── вспомогательные ──
  const syncNav = () => {
    prevBtn.disabled = idx === 0 || busy;
    nextBtn.disabled = idx === CHAPTERS.length - 1 || busy;
  };

  const showToast = (text: string) => {
    toast.textContent = text;
    toast.classList.add('bk-toast--show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('bk-toast--show'), 3400);
  };

  const fillTexts = () => {
    const ch = CHAPTERS[idx];
    nameEl.textContent = ch.title;
    numEl.textContent = `Опыт ${ch.id} из ${CHAPTERS.length}`;
    metaFormula.textContent = ch.formula.replace(/<[^>]+>/g, '');
    stampEl.hidden = !solved.has(ch.id);
    ledeEl.textContent = ch.intro;
    questionEl.textContent = ch.question;
    formulaEl.innerHTML = ch.formula;
    explainEl.textContent = ch.explanation;
    noteEl.innerHTML = '<strong>Обратите внимание.</strong> ' + ch.teacher.misconception;
    focusEl.textContent = ch.teacher.focus;
    stepsEl.innerHTML = ch.teacher.steps.map((s) => `<li>${s}</li>`).join('');
    folioEl.textContent = `— ${ch.id} —`;
    // параметр
    paramLabel.textContent = ch.param.label;
    paramInput.min = String(ch.param.min);
    paramInput.max = String(ch.param.max);
    paramInput.step = String(ch.param.step);
    paramInput.value = String(ch.param.value);
    paramValue.textContent = `${fmt(ch.param.value, ch.param.decimals)} ${ch.param.unit}`.trim();
    // прогноз
    verdictEl.hidden = true;
    verdictEl.textContent = '';
    verdictEl.classList.remove('bk-verdict--ok');
    optionsEl.innerHTML = '';
    ch.options.forEach((opt, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'bk-option';
      b.innerHTML = `<span class="bk-option-letter">${LETTERS[i]}.</span><span>${opt}</span>`;
      b.addEventListener('click', () => {
        const ok = i === ch.answer;
        solved.add(ch.id);
        stampEl.hidden = false;
        [...optionsEl.children].forEach((el, j) => {
          const btn = el as HTMLButtonElement;
          btn.disabled = true;
          if (j === ch.answer) btn.classList.add('bk-option--correct');
          else if (j === i) btn.classList.add('bk-option--wrong');
        });
        verdictEl.hidden = false;
        verdictEl.classList.toggle('bk-verdict--ok', ok);
        verdictEl.textContent = ok
          ? 'Верно. Такая передача энергии и есть суть этого опыта.'
          : `Не совсем. Верный ответ — ${LETTERS[ch.answer]}.`;
      });
      optionsEl.appendChild(b);
    });
  };

  const loadScene = () => {
    const ch = CHAPTERS[idx];
    engine!.load(SCENES[ch.id], ch.param.value);
    exp = engine!.expHandle();
  };

  const goTo = (next: number, instant = false) => {
    if (busy || next === idx || next < 0 || next >= CHAPTERS.length) return;
    const doSwap = () => {
      idx = next;
      history.replaceState(null, '', `#${CHAPTERS[idx].id}`);
      loadScene();
      fillTexts();
      swap.classList.remove('bk-swap--leave');
      swap.classList.add('bk-swap--enter');
      fade.style.opacity = '0';
      window.setTimeout(() => {
        swap.classList.remove('bk-swap--enter');
        busy = false;
        syncNav();
      }, 480);
    };
    busy = true;
    syncNav();
    if (instant) {
      doSwap();
      return;
    }
    swap.classList.add('bk-swap--leave');
    fade.style.opacity = '1';
    window.setTimeout(doSwap, 240);
  };

  // ── события ──
  prevBtn.addEventListener('click', () => goTo(idx - 1));
  nextBtn.addEventListener('click', () => goTo(idx + 1));

  paramInput.addEventListener('input', () => {
    const ch = CHAPTERS[idx];
    const v = parseFloat(paramInput.value);
    paramValue.textContent = `${fmt(v, ch.param.decimals)} ${ch.param.unit}`.trim();
    exp?.setParam(v);
  });

  const onKey = (e: KeyboardEvent) => {
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') goTo(idx - 1);
    else if (e.key === 'ArrowRight') goTo(idx + 1);
  };
  window.addEventListener('keydown', onKey);

  // ── запуск ──
  const hash = parseInt(location.hash.replace(/\D/g, ''), 10);
  if (hash >= 1 && hash <= CHAPTERS.length) idx = hash - 1;

  const boot = async () => {
    try {
      await Promise.all([
        document.fonts.load('italic 500 32px Literata'),
        document.fonts.load('500 32px Literata'),
        document.fonts.load('400 32px "Yeseva One"'),
        document.fonts.ready,
      ]);
    } catch {
      /* шрифты не критичны */
    }
    engine = new BookEngine(host);
    engine.setCallbacks({
      onToast: showToast,
      onReadouts: (html) => {
        readoutsEl.innerHTML = html;
      },
    });
    loadScene();
    fillTexts();
    syncNav();
    (window as unknown as Record<string, unknown>).__bk = {
      engine: () => engine,
      goTo,
      chapter: () => idx,
    };
    requestAnimationFrame(() => root.classList.add('bk-in'));
  };
  void boot();

  return () => {
    window.removeEventListener('keydown', onKey);
    engine?.dispose();
    engine = null;
    exp = null;
  };
}
