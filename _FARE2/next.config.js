module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'dist',
    /*
    images: {
        domains: [
            'assets.guebbit.com',
            'placekitten.com'
        ]
    },
    */
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
        };
        return config;
    },
};
