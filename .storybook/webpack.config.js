const path = require('path')

const createSvgLoader = require('../config/webpack/svg-loader')

module.exports = ({ config, mode }) => {
  // TODO: this is a hack to delay writing a completely bespoke config.
  // Find Storybooks in-built svg rule, and modify it to exclude SVGs we
  // want to embed inline via a custom rule
  const existingSvgRule = config.module.rules.findIndex((rule) =>
    rule.test.toString().includes('svg')
  )
  config.module.rules[existingSvgRule].exclude = [
    path.resolve(__dirname, '../src/asset/svg/icon')
  ]

  // Add support for creating icons using inline SVGs
  config.module.rules.unshift({
    test: /\.svg$/,
    include: [path.resolve(__dirname, '../src/asset/svg/icon')],
    use: createSvgLoader()
  })

  config.module.rules.unshift({
    test: /\.vtt$/,
    loader: 'file-loader'
  })

  // Add CSS modules support
  config.module.rules.unshift({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: { localIdentName: '[name]__[local]___[hash:base64:5]' }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [path.join(__dirname, '../src/asset/scss/settings')]
          },
          additionalData: `
            @import '~backline-mixins/src/backline-mixins';
            @import 'settings';
          `
        }
      }
    ]
  })

  config.resolve.alias['@'] = path.join(__dirname, '../src')

  return config
}
