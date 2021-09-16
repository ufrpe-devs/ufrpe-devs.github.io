const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,

  assetPrefix: isProd ? '/ufrpe-devs.github.io/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        and: [/\.(js|ts)x?$/] 
       // for webpack 5 u`se
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
}
