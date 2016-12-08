'use strict';

var csso = require('csso');

exports.name = 'csso';
exports.inputFormats = ['csso', 'css'];
exports.outputFormat = 'css';

exports.render = function (str, options) {
  return csso.minify(str, options).css;
};
