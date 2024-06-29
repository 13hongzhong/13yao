/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/13yao', // Set the base path
  assetPrefix: '/13yao/', // Set the asset prefix
  images: {
    domains: [], // Add domains for images if needed
  },
  publicRuntimeConfig: {
    basePath: '/13yao', // Public runtime config for base path
  },
};

module.exports = nextConfig;
