const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises').then(()=>console.log('Connected to MongoDB')).catch((err)=>console.error('Could not connect',err));

const courseSchema = new mongoose.Schema({
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

getCourses();