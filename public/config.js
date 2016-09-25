// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: '',
    assetsPublicPath: 'http://yourbucket.oss-cn-shanghai.aliyuncs.com/',
    productionSourceMap: false
  },
  dev: {
    port: 8181,
    proxyTable: {},
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  }
}
