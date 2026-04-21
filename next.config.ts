import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // generates a static `out/` folder for GitHub Pages
  devIndicators: false,
  images: {
    unoptimized: true,     // required when there is no Next.js image server
  },
};

export default nextConfig;
