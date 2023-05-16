const { readFile,writeFile } = require('fs')
const { resolve } = require('path')
const util = require('util'); 
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
const getText =(path) =>{
    return new Promise((resolve,reject)=>{
        readFile('./content/test.txt','utf8',(err,data)=>{
            if(err){
                reject(err)
            } else
            {
                resolve(data)
            
            }
        })
    })
}

/* getText('./content/first.txt')
    .then(result => console.log(result))
    .catch(err =>console.log(err)) */

const start = async() =>{
    try {
        const first = await readFilePromise('./content/test.txt','utf8')
        const first1 = await readFilePromise('./content/test1.txt','utf8')
        await writeFilePromise('./content/result.txt',`ANIMA: ${first} ${first1}`)
        console.log(first,first1)
    }
    catch (error) {
        console.log(error)
    }
}
start()
/* 
readFile('./content/test.txt','utf8',(err,data)=>{
    if(err){
        return
    } else
    {
        console.log(data)
    
    }
}) */