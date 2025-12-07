const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    qualities: [75, 85, 90, 100],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    // Handle video files
    config.module.rules.push({
      test: /\.(mov|mp4)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });

    // Fallback for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Ignore source map warnings
    config.ignoreWarnings = [
      { message: /Failed to parse source map/ },
    ];

    return config;
  },
  // Optimize page loading
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Add compression
  compress: true,
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Configure headers for better caching and Replit proxy
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path((?!_next|api|favicon.ico).*)*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
