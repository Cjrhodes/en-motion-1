const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    // Configure module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    // Ensure Swiper modules are transpiled
    config.module.rules.push({
      test: /swiper\.esm\.js/,
      resolve: {
        fullySpecified: false,
      },
    });

    // Handle video files
    config.module.rules.push({
      test: /\.(mov|mp4)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });

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
