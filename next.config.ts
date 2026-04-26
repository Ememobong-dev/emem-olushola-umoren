/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://emem-olushola-website.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
