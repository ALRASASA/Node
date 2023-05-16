//blocking and non blcoking code
const{readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/test.txt','utf-8')


writeFileSync('./content/test.txt',`here is thee singhan:${first}`,{flag:'a'}) //for appending  )
console.log(first)

/* const fs=require('fs');
fs.readFileSync  */