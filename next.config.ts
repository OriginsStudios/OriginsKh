// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

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
};

export default nextConfig;