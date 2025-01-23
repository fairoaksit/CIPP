/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [];
  },
};

module.exports = config;
