var parse = require("object-path-parse")

console.log(parse("a.b.c"))                // ["a","b","c"]
console.log(parse("a.0.c[0]"))             // ["a","0","c","0"]
console.log(parse("a.b.x['wfw.efef']"))    // ["a","b","x","wfw.efef"]