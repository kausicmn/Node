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
// const EventEmitter = require('events')
// const emitter= new EventEmitter();

// Register an listner


// Signaling a event has happend - Raise and event

// emitter.emit('MessageLogged',{id:1,url:'https://'})

// const Logger=require('./logger')
// const logger=new Logger();
// // listener
// logger.on('logging',(arg)=>{
//     console.log('Listener Called',arg)
// })
// logger.log('kausic');


// HTTP 

const http =require('http')

// this is not used in real world as it gets complicated dealing more routes. Instead we use Express.js which is built on top of Http Module in Node
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});
// not going to respond to connection event to build a http service in real world.
// server.on('connection',(socket)=>{
// console.log('New Connection...');
// });
server.listen(3000);
console.log('Listening on port 3000...');







