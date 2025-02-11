/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/kdbishnoiji", // Apni GitHub repo ka naam yaha likhein
  images: {
    unoptimized: true, // GitHub Pages optimized images support nahi karta
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
