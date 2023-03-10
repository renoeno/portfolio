module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },

};
