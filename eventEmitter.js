const express       = require('express');
const app           = express();
const event         = require('events'); //import events module
const eventEmitter  = new event.EventEmitter(); // create event emitter object

eventEmitter.on('bindEvent',()=>{
    console.log('Hello Good Afternoon');
}); // Bind the event
eventEmitter.emit('bindEvent'); //fire the event

console.log('Program Ended'); 