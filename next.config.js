/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false, // React hydration bug with custom elements.
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
