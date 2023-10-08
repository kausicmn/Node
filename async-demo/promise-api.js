// const p=Promise.resolve({id:1})
// p.then(res=>console.log(res))

// const p=Promise.reject(new Error('rejected'))
// p.then(err=>console.log(err.message))

const p1= new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log('Async 1..')
    //reject(new Error('some error'))
    resolve(1);
},2000)
});

const p2= new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async 2..')
        resolve(2)
    },2000)
    });

///Promise.all([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err.message));

Promise.race([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err.message));

    
