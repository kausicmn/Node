const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/playground').then(()=>console.log('Connected to MongoDB..')).catch(err=>console.error('Could not connect',err))

// string, number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema= new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date:{
        type:Date,
        default:Date.now
    },
    isPublished:Boolean
});

const Course=mongoose.model('Course',courseSchema)

async function createCourse()
{
    const course=new Course({
        name:'React.js',
        author:'Kausic',
        tags:['Frontend', 'React'],
        isPublished:true
        });
        
        const result= await course.save();
        console.log(result)
}
//conditional
// eq
// ne
// gt
// gte
// lt
// lte
// in
// nin


// logical
// or 
// and

async function getCourses()
{

 // const courses=await Course.find({author:'Kausic',isPublished:true}).limit(10).sort({name:1}).select({name:1,tags:1});
   // const courses=await Course.find({price:{$gte:10,$lte:20}}).limit(10).sort({name:1}).select({name:1,tags:1});
    //const courses=await Course.find({price:{$in:[10,15,20]}}).limit(10).sort({name:1}).select({name:1,tags:1});

    //const courses=await Course.find().or([{author:'Kausic'},{isPublished:true}]).limit(10).sort({name:1}).select({name:1,tags:1});

   // /C$/i ends with C case insensitive
   // /^C/ starts with C
   // Contains K /.*K.*/i 
   // const courses=await Course.find({author:/^K/,isPublished:true}).limit(10).sort({name:1}).select({name:1,tags:1});
   // const courses=await Course.find({author:'Kausic',isPublished:true}).limit(10).sort({name:1}).count()
   const pagenumber=2;
   const pagesize=10;
   const courses=await Course.find({author:'Kausic',isPublished:true}).skip((pagenumber-1)*pagesize).limit(pagesize).sort({name:1}).select({name:1,tags:1});
   console.log(courses);
}
//createCourse();

getCourses();