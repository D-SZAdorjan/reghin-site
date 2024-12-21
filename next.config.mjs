/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uilvjvbbjgbdkimfoxjq.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      }
      // Add the domain here
    ],
  },
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
