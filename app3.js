console.log('first') //synchronous code
setTimeout(()=>{
    console.log('second')
},0) //asynchronous code
console.log('third') //synchronous code