/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: [
      "https://images.pexels.com/photos/",
      "https://cdn.skypack.dev",
    ],
  },
};

module.exports = nextConfig;
