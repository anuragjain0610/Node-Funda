const eventEmitter= require('events');

// create class
class Myemitter extends eventEmitter{}

// init object
const myemitter=new Myemitter();


// event listener
myemitter.on('event' ,()=> console.log('Event fired....'));

//init event
myemitter.emit('event');
myemitter.emit('event');myemitter.emit('event');myemitter.emit('event');


