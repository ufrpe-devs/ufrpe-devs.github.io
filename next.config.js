const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,

  assetPrefix: isProd ? '/ufrpe-devs.github.io/' : ''
}
