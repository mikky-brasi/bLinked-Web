/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    // Needed to run `next export`.
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      // these are needed for google-auth-library to compile.
      // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
      fs: false,
      child_process: false,
      net: false,
      tls: false,
    };

    return config;
  },
  typescript: {
    // TODO: remove this when we fix all the type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // TODO: remove this when we fix all the eslint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
