const{createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{
    highWaterMark: 90000, //gives control over the buffer memory
    encoding: 'utf8'
});

stream.on('data',(result)=>{
     console.log(result)
})