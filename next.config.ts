import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Enable static optimization for better performance
  output: "standalone",

  // Optimize images for better Core Web Vitals
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression for better performance
  compress: true,

  // Optimize bundle size
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // Rewrites required to proxy PostHog API and assets
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/flags",
        destination: "https://eu.i.posthog.com/flags",
      },
    ]
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

export default nextConfig
