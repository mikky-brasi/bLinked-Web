/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
};

module.exports = nextConfig;
