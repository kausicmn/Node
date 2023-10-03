var url='http://mylogger.io/log'
console.log(__filename);
console.log(__dirname);
const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('logging',(message)=>{
console.log('logging',message)
})
function log(message){
    
    console.log(message)
    emitter.emit('logging',message);
}
log('kausic');
// let log=()=>{

// }

module.exports.log=log; // export modules

