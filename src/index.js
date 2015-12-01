import traverse from 'traverse'
import parser from './property.jison'

export default function parse(str){
  return traverse(parser.parse(str)).reduce(function(acc, x) {
    if (this.isLeaf && typeof x !== 'undefined') {
      acc.push(x)
    }
    return acc
  }, [])  
}
