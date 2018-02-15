# jstransformer-csso

[CSSO](https://github.com/css/csso/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-csso/master.svg)](https://travis-ci.org/jstransformers/jstransformer-csso)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-csso/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-csso)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-csso/master.svg)](http://david-dm.org/jstransformers/jstransformer-csso)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-csso.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-csso.svg)](https://www.npmjs.org/package/jstransformer-csso)

## Installation

    npm install jstransformer-csso

## API

```js
var csso = require('jstransformer')(require('jstransformer-csso'))

csso.render('.csso { color: #ff0000; } .bar { color: rgba(255, 0, 0, 1); }').body
//=> '.bar,.csso{color:red}'
```

## License

MIT
