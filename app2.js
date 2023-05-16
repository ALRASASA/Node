const _ = require('lodash')
//they flatten up the arrays
const items =[1, [2, [3, [5]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
