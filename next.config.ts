import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  async redirects() {
    return [
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
