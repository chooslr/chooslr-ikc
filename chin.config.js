const inkscape = require('chin-plugin-inkscape').default

module.exports = {
  put: 'svg',
  out: 'png',
  clean: true,
  processors: {
    svg: inkscape('png', { height: 2000 })
  }
}