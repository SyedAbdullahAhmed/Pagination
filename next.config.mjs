/** @type {import('next').NextConfig} */
const nextConfig = {
    resolve: {
        alias: {
          core: path.join(__dirname, 'core'),
        },
      },
};

export default nextConfig;
