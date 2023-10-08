console.log('Before');
const user=getuser(); // This will give undefined because the function can retrieve the answer in time. so inorder to get the answer we have to use callback or promises or async await
console.log(user)
console.log('After'); // 2 nd one has to wait until first one is executed. Synchrous program



function getuser(id){
    setTimeout(()=>{
        console.log('Reading a user from DB') // Async non blocking function
        return {id:id,gitusername:'kausic'}
    },2000)
    
}