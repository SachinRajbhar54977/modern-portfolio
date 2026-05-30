/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",  value: "nosniff"                      },
          { key: "X-Frame-Options",          value: "DENY"                         },
          { key: "X-XSS-Protection",         value: "1; mode=block"                },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/cv",       destination: "/resume-khan-aarav.pdf",              permanent: false },
      { source: "/github",   destination: "https://github.com/khan-aarav",       permanent: false },
      { source: "/linkedin", destination: "https://linkedin.com/in/khan-aarav",  permanent: false },
    ];
  },

  // Turbopack (Next.js 16 default bundler)
  turbopack: {},
};

module.exports = nextConfig;