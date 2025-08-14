// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", // for static export
//   experimental: { appDir: true }, // if using App Router
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // enables static export
//   distDir: 'out',   // default output folder for static files
// };

// export default nextConfig;
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;