console.log('Before');
getuser(1,(user)=>{
    console.log(user) // when the result is ready the function will be executed and result is displayed -- async using callback
    getrepo(user.gitusername,(repo)=>{
        console.log(repo)
    })
}); 
console.log('After'); // 2 nd one has to wait until first one is executed. Synchrous program



function getuser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from DB') // Async non blocking function
        callback({id:id,gitusername:'kausic'})
        //return {id:id,gitusername:'kausic'}
    },2000)
    
}

function getrepo(username,callback){
    setTimeout(() => {
        console.log('Getting repo information')
        callback(['repo1','repo2','repo3'])
    }, 2000);
   
}