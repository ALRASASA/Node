/* const os=require('os')
//info about current user
const user= os.userInfo()
console.log(user)

//metheod returns the system uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds`)
 */
/* const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos) */

const path=require('path')
console.log(path.sep)
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)