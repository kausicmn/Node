const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises').then(()=>console.log('Connected to MongoDB')).catch((err)=>console.error('Could not connect',err));

const courseSchema = new mongoose.Schema({
    _id:String,
    tags: [String],
    date:Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

const Course=mongoose.model('Course',courseSchema)

async function getCourses(){
   // const course= await Course.find({isPublished:true,tags:'backend'}).sort({name:1}).select({name:1,author:1})
//    const course= await Course.find({isPublished:true,tags:{$in:['frontend','backend']}}).sort({price:-1}).select({name:1,author:1})
// const course= await Course.find().or([{isPublished:true},{tags:['frontend','backend']}]).sort('-price').select('name author price')
// const course= await Course.find({isPublished:true}).or([{tags:'frontend'},{tags:'backend'}]).sort('-price').select('name author price')
const course= await Course.find({isPublished:true}).or([{price:{$gte:15}},{name:/.*by.*/i}]).sort({name:1}).select({name:1,author:1,price:1})
    console.log(course)
}

async function updatecourse(id){
    // try{
    //     const course=await Course.findById(id);
    //     console.log(course);
    //     if(!course) return;
    //     course.author='Kausic';
    //  //    course.set({
    //  //     author:'Kausic'
    //  //    })
    //  const result= await course.save();
    //  console.log(result);
    // }
    // catch(err)
    // {
    //     console.error(err)
    // }

    // const course=await Course.updateOne({_id:id},{
    //     $set:{
    //         author:'Kausic',
    //         isPublished:false
    //     }
    // })
    // console.log(course)

    const course=await Course.findByIdAndUpdate({_id:id},{
        $set:{
            author:'Kausic',
            isPublished:false
        }
    },{new:true})
    console.log(course)

}
//updatecourse('5a68fdc3615eda645bc6bdec');

async function remove(id){
const course=await Course.deleteOne({_id:id}); //  different method findbyidandremove
console.log(course);
}
remove('5a68fdc3615eda645bc6bdec');
// getCourses();