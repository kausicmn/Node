const config=require('config')
const startdebugger=require('debug')('app:startup')
const dbdebugger=require('debug')('app:db')
var express=require('express')
const app=express();
const Joi=require('joi');
const helmet=require("helmet");
const morgan=require("morgan")
const logger=require('./logger')

// console.log(process.env.NODE_ENV) // adding developemt, testing, staging, production machine tags environment
// console.log(`App: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended:true})); // middleware
app.use(express.static('public'))
app.use(helmet())

// config based on different environemnt

// console.log('App Name:'+config.get('name'));
// console.log('Mail Server:'+config.get('mail.host'));


if(app.get('env')==='development')
{
    app.use(morgan('tiny'))
    startdebugger('Morgan enabled...')
    dbdebugger('connected to db')
}
app.use(logger);
// app.use(function(req,res,next){
//     console.log('Authenticating');
//     next();
// })

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

app.put('/api/courses/:id',(req,res)=>{
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
function validatecourse(course)
{
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course)
}

app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('course not found');
    }
    const idx=courses.indexOf(course);
    courses.splice(idx,1);
    res.send(course);

})


const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on Port ${port}....`));