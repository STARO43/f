'use client';

import { useEffect, useRef } from 'react';

export default function BookHost() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;
    import('@/lib/energy/app').then((m) => {
      if (cancelled || !ref.current) return;
      dispose = m.mountBook(ref.current);
    });
    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return <div ref={ref} />;
}
