// const logger=require('./logger')

// console.log(logger)
// logger.log("message")

// Path Module

// const path = require('node:path');
// var pathobj=path.parse(__filename);
// console.log(pathobj);


// OS module
// const os = require('node:os');

// console.log(os.totalmem())
// console.log(os.freemem())

// File Module
// const fs=require('fs');
// console.log(fs.readdirSync('./'));

// console.log(fs.readdir('./',function(err,files){
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log('Result',files);
//     }
// }))

// Event
const EventEmitter = require('events')
const emitter= new EventEmitter();

// Register an listner
emitter.on('MessageLogged',(arg)=>{
    console.log('Listener Called',arg)
})

// Signaling a event has happend - Raise and event

// emitter.emit('MessageLogged',{id:1,url:'https://'})









