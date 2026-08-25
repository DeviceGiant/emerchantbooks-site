import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // HSTS: TLS terminates at Traefik, so every request reaching Next is HTTPS.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www → apex (301), keeps one canonical host
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.emerchantbooks.com" }],
        destination: "https://emerchantbooks.com/:path*",
        permanent: true,
      },
      // legacy WordPress URLs (Wayback-verified) → new locations
      { source: "/abous/", destination: "/about-us/", permanent: true },
      { source: "/abous", destination: "/about-us/", permanent: true },
      { source: "/partner-program/", destination: "/", permanent: true },
      { source: "/referrals/", destination: "/", permanent: true },
      { source: "/master-ecommerce-bookkeeping/", destination: "/bookkeeping-tips/ecommerce-chart-of-accounts/", permanent: true },
      { source: "/monthly-finance-meeting-agenda-guide/", destination: "/bookkeeping-tips/", permanent: true },
      { source: "/2021/:month/:slug*", destination: "/bookkeeping-tips/", permanent: true },
    ];
  },
};

export default nextConfig;
