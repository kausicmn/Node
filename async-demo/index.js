console.log('Before');
getuser(1,displayuser); 
console.log('After'); // 2 nd one has to wait until first one is executed. Synchrous program

function displayuser(user){
    console.log(user) 
    getrepo(user.gitusername,displayrepo)
}
function displayrepo(repo){
    console.log(repo)
}

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