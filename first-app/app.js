// const logger=require('./logger')

// console.log(logger)
// logger.log("message")

// const path = require('node:path');
// var pathobj=path.parse(__filename);
// console.log(pathobj);

// const os = require('node:os');

// console.log(os.totalmem())
// console.log(os.freemem())

const fs=require('fs');
console.log(fs.readdirSync('./'));

console.log(fs.readdir('./',function(err,files){
    if(err){
        console.log('Error',err);
    }
    else{
        console.log('Result',files);
    }
}))