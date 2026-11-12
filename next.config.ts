import type { NextConfig } from "next";

// GitHub Pages — это статический хостинг, поэтому для него собираем
// статический экспорт в out/ и добавляем базовый путь проекта.
// Обычная сборка (bun run build) остаётся standalone, как раньше.
const isPages = process.env.PAGES_BUILD === "1";
const repo = (process.env.GITHUB_REPOSITORY ?? "").split("/")[1] ?? "";
const pagesBasePath =
  process.env.PAGES_BASE_PATH ??
  (repo && !repo.endsWith(".github.io") ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: isPages ? "export" : "standalone",
  basePath: isPages ? pagesBasePath : undefined,
  trailingSlash: isPages,
  images: { unoptimized: isPages },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
