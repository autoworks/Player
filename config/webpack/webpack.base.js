const paths = require('./paths')
const { resolve, join } = require('path')
const createSvgLoader = require('./svg-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [resolve(__dirname, '../../node_modules')],
    alias: {
      '@': join(__dirname, '../../src')
    }
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'AutoWorksPlayer.css' })],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint/lib/cli-engine/formatters/unix'),
          eslintPath: 'eslint'
        }
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: [paths.appSrc],
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.svg$/,
            include: [paths.svg],
            use: createSvgLoader()
          },
          {
            test: /\.vtt$/,
            loader: 'file-loader'
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: [
                      join(__dirname, '../../src/asset/scss/settings')
                    ]
                  },
                  additionalData: `
                    @import '~backline-mixins/src/backline-mixins';
                    @import 'settings';
                  `
                }
              }
            ]
          },
          {
            test: /\.(apng|png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  performance: {
    hints: false
  }
}
