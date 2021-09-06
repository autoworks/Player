const { resolve } = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => resolve(appDirectory, relativePath)

module.exports = {
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp(
    'src/component/Primary/AutoWorksPlayerLibrary/index.jsx'
  ),
  appIndexJsStandalone: resolveApp(
    'src/component/Primary/AutoWorksPlayerStandalone/index.jsx'
  ),
  svg: resolveApp('src/asset/svg/icon'),
  dist: resolveApp('dist'),
  projectRoot: resolveApp(''),
  appUrlPath: '/'
}
