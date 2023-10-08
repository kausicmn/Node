const p=new Promise((resolve,reject)=>{ // promise is an object that holds the eventual results of async operation. Intially is in pending. then kicks of async and it can be resolved or fullfiled
    setTimeout(() => {
        //resolve(1);
        reject(new Error('message'));
    }, 2000);

})
p.then(result=>console.log(result)).catch(err=>console.log(err.message))