const express=require('express')
const router =express.Router();
const courses =[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    {id:4,name:'course4'},
    {id:5,name:'course5'}

]
router.get('/',(req,res)=>{
    res.send(courses);
})
router.get('/:id',(req,res)=>{
const course=courses.find(c=>c.id===parseInt(req.params.id));
if(!course) res.status(404).send('The course with given ID was not found')
res.send(course);

 //res.send(req.params.id);
// res.send(req.params);
// res.send(req.query); //http://localhost:3001/api/courses/1?sortBy=name
})


router.post('/',(req,res)=>{
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    const result=schema.validate(req.body)
    // console.log(result)
    // if(!req.body.name||req.body.name<3)
    // {
    //     res.status(400).send('Name is required');
    //     return;
    // }
    const {error}=validatecourse(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})

router.put(':id',(req,res)=>{
const course=courses.find(c=>c.id===parseInt(req.params.id));
if(!course) 
{
    return res.status(404).send('The course with given ID was not found')
}
const {error}=validatecourse(req.body);
if(error)
{
    return res.status(400).send(error.details[0].message);
}
course.name=req.body.name
res.send(course);
})

router.delete(':id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('course not found');
    }
    const idx=courses.indexOf(course);
    courses.splice(idx,1);
    res.send(course);

})

function validatecourse(course)
{
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course)
}

module.exports=router