var url='http://mylogger.io/log'
console.log(__filename);
console.log(__dirname);
function log(message){
    console.log(message)
}

// let log=()=>{

// }

module.exports.log=log; // export modules

