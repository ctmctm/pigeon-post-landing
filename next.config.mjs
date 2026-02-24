const APP_ORIGIN = String(process.env.PIGEON_APP_ORIGIN || "https://preview.pigeonpost.app")
  .trim()
  .replace(/\/+$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/newsletters/:path*",
        destination: `${APP_ORIGIN}/newsletters/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: `${APP_ORIGIN}/login`,
        permanent: false,
      },
      {
        source: "/register",
        destination: `${APP_ORIGIN}/register`,
        permanent: false,
      },
      {
        source: "/editor",
        destination: `${APP_ORIGIN}/editor`,
        permanent: false,
      },
      {
        source: "/editor/:path*",
        destination: `${APP_ORIGIN}/editor/:path*`,
        permanent: false,
      },
      {
        source: "/admin",
        destination: `${APP_ORIGIN}/admin`,
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: `${APP_ORIGIN}/admin/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
