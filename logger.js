const eventEmitter =require('events');
const uuid=require('uuid');


class Logger extends eventEmitter{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(), msg});
    }
}

module.exports=Logger;


// index.js code
// const Logger=require('./logger');
// const logger = new Logger();
// logger.on('message',(data)=>console.log('Called listener',data));
// logger.log('Hello');