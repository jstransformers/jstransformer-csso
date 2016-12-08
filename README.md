# jstransformer-csso

[CSSO](https://github.com/css/csso/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-csso/master.svg)](https://travis-ci.org/jstransformers/jstransformer-csso)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-csso/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-csso)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-csso/master.svg)](http://david-dm.org/jstransformers/jstransformer-csso)
[![NPM version](https://img.shields.io/npm/v/jstransformer-csso.svg)](https://www.npmjs.org/package/jstransformer-csso)

## Installation

    npm install jstransformer-csso

## API

```js
var csso = require('jstransformer')(require('jstransformer-csso'));

csso.render('blah').body
//=> 'blah'
```

## License

MIT
