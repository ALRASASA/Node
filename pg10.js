const{readFile,writeFile}= require('fs')

readFile('./content/test.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/f2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    const second = result
writeFile('./content/f2.txt',`here is the result ${first},${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
}) })
})