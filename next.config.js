/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const nextConfig = {
  output: isGithubActions ? "export" : undefined,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY,
  },
};

module.exports = nextConfig;
