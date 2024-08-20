const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  webpack: (config, { isServer }) => {
    // Existing alias configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/api': path.resolve(__dirname, 'src/api'),
    };

    // New configuration to ignore source map warnings
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Ignore source map warnings for specific packages
    config.ignoreWarnings = [
      { message: /Failed to parse source map/ },
    ];

    return config;
  },
  // Add this to help with the preload warning
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;