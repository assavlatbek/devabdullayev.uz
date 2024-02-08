/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: [
      "w7.pngwing.com",
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "i.pinimg.com",
      "brandslogos.com",
      "www.edigitalagency.com.au",
    ],
  },
};

module.exports = nextConfig;
