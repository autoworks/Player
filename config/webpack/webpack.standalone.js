const base = require('./webpack.base')
const paths = require('./paths')

// Base webpack config that can be used in storybook and app builds.
module.exports = {
  ...base,
  entry: paths.appIndexJsStandalone,
  output: {
    filename: 'AutoWorksPlayer.standalone.js',
    library: 'createAutoWorksPlayer',
    libraryTarget: 'window',
    libraryExport: 'default',
    path: paths.dist
  }
}
