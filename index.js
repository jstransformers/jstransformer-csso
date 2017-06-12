'use strict'

const csso = require('csso')

exports.name = 'csso'
exports.outputFormat = 'css'

exports.render = function (str, options) {
  return csso.minify(str, options).css
}
