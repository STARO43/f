import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* Редизайн книги: статический сайт обслуживается из /public */
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/book.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
