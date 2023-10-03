var url='http://mylogger.io/log'
console.log(__filename);
console.log(__dirname);
const EventEmitter=require('events');
class Logger extends EventEmitter {
    log(message){
    
        console.log(message)
        this.emit('logging',message);
    }
}

// let log=()=>{

// }

module.exports=Logger; // export modules

