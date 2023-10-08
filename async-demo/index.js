// Call back

// console.log('Before');
// getuser(1,displayuser)
// console.log('After'); // 2 nd one has to wait until first one is executed. Synchrous program

// function displayuser(user){
//     console.log(user) 
//     getrepo(user.gitusername,displayrepo)
// }
// function displayrepo(repo){
//     console.log(repo)
// }

// Promise

//getuser(1).then(user=>getrepo(user.gitusername)).then(repo=>console.log(repo)).catch(err=>console.log('Error',err.message));

// Async and await
async function displayrepo()
{
    try
    {
    const user= await getuser(1);
    console.log(user)
    const repo=await getrepo(user.username);
    console.log(repo)
    }
    catch(err){
        console.log(err.message)
    }
    
}

displayrepo()

function getuser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from DB') // Async non blocking function
            resolve({id:id,gitusername:'kausic'})
            //return {id:id,gitusername:'kausic'}
        },2000)
    }) 
    
}



function getrepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Getting repo information')
            resolve(['repo1','repo2','repo3'])
            //reject(new Error('No repo found'))
        }, 2000);
    })
    
   
}