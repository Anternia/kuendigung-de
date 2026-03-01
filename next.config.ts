import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/kuendigung-de" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
