const path = require('path')

const createSvgLoader = require('./config/webpack/svg-loader')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps(
  withBundleAnalyzer({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'src/asset/svg/icon')],
        use: createSvgLoader()
      })
      return config
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/asset/scss/settings')],
      prependData: `
        @import '~backline-mixins/src/backline-mixins';
        @import 'settings';
      `
    }
  })
)
