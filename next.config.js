/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require("path");

module.exports = nextConfig;
module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.(mp4|mov|webm)$/i,
  //       use: [
  //         {
  //           loader: "file-loader",
  //           options: {
  //             name: "[name].[ext]",
  //             outputPath: "videos/", // Output directory for the files
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  images: {
    domains: ["yt3.ggpht.com"],
  },
};
