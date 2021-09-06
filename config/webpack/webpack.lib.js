const base = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

// Base webpack config that can be used in storybook and app builds.
module.exports = {
  ...base,
  entry: paths.appIndexJs,
  externals: [nodeExternals()],
  output: {
    filename: 'AutoWorksPlayer.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: paths.dist
  }
}
