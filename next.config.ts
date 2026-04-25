import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Prefer this repo as tracing root when multiple lockfiles exist (e.g. parent ~/package-lock.json).
  outputFileTracingRoot: path.join(process.cwd()),

  reactCompiler: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
