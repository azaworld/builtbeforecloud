import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting at builtbeforecloud.com
  output: "export",
  images: {
    // Images are pre-sized in public/images; the default optimizer
    // requires a server, which static export does not have.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
