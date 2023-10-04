var express=require('express')
const app=express();
const Joi=require('joi');
app.use(express.json());
const courses =[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    {id:4,name:'course4'},
    {id:5,name:'course5'}

]
app.get('/',(req,res)=>{
    res.send('Hello world')
});
app.get('/api/courses',(req,res)=>{
    res.send(courses);
})
app.get('/api/courses/:id',(req,res)=>{
const course=courses.find(c=>c.id===parseInt(req.params.id));
if(!course) res.status(404).send('The course with given ID was not found')
res.send(course);

 //res.send(req.params.id);
// res.send(req.params);
// res.send(req.query); //http://localhost:3001/api/courses/1?sortBy=name
})
app.post('/api/courses',(req,res)=>{
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
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on Port ${port}....`));