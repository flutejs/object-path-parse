[![Build Status](https://travis-ci.org/flutejs/object-path-parse.svg)](https://travis-ci.org/flutejs/object-path-parse)
[![Coverage Status](https://coveralls.io/repos/flutejs/object-path-parse/badge.svg?branch=master&service=github)](https://coveralls.io/github/flutejs/object-path-parse?branch=master)
[![NPM version](https://img.shields.io/npm/v/object-path-parse.svg?style=flat)](https://npmjs.org/package/object-path-parse)
[![NPM downloads](http://img.shields.io/npm/dm/object-path-parse.svg?style=flat)](https://npmjs.org/package/object-path-parse)

```javascript
var parse = require("object-path-parse")

console.log(parse("a.b.c"))                // ["a","b","c"]
console.log(parse("a.0.c[0]"))             // ["a","0","c","0"]
console.log(parse("a.b.x['wfw.efef']"))    // ["a","b","x","wfw.efef"]
```

[try it in your browser](https://tonicdev.com/npm/object-path-parse)

## API

- parse(String)

  return the path array
