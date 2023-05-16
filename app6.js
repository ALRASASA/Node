const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user ${name} with id:${id}`)
})
/* customEmitter.emit('response') */
customEmitter.on('response',()=>{
    console.log(`some other lgoic`)
})
customEmitter.emit('response','john',34)