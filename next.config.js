/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "https://create-react-app.dev/",
      "create-react-app.dev",
    ],
  },
};

module.exports = nextConfig;
