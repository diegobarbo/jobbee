/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:8000",
    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoiZGllZ29iYXJibyIsImEiOiJjbDJzeTdwYXcwM2RkM2tuMGJpempreWs2In0.E4qpuktdVxbvGrTaVgpE5g",
  },
};

module.exports = nextConfig;
