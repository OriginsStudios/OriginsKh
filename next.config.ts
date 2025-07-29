import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/join",
        destination: "/", // Redirect to homepage (or "/contact" if preferred)
        permanent: true, // 301 redirect for SEO
      },
    ];
  },

  // Optimize video handling and other experimental features
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Optimize images and static assets
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
  },
};

export default nextConfig;
