/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["localhost:3000", "192.168.1.2:3000"],
  },
};

export default nextConfig;
