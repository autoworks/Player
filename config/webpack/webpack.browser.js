const base = require('./webpack.base')
const paths = require('./paths')

// Base webpack config that can be used in storybook and app builds.
module.exports = {
  ...base,
  entry: paths.appIndexJs,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: 'AutoWorksPlayer.browser.js',
    library: 'AutoWorksPlayerComponent',
    libraryTarget: 'window',
    libraryExport: 'default',
    path: paths.dist
  }
}
