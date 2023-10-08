// const p=Promise.resolve({id:1})
// p.then(res=>console.log(res))

const p=Promise.reject(new Error('rejected'))
p.then(err=>console.log(err.message))