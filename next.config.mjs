/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Admin redirect
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: true,
      },
      // Auth redirect
      {
        source: "/auth",
        destination: "/auth/sign-in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
