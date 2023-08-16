/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "https://create-react-app.dev/",
      "firebasestorage.googleapis.com",
      "create-react-app.dev",
      "i.insider.com",
    ],
  },
};

module.exports = nextConfig;
