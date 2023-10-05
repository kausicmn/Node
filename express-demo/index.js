const config=require('config')
const courses =require('./routes/courses')
const home=require('./routes/home')
const startdebugger=require('debug')('app:startup')
const dbdebugger=require('debug')('app:db')
var express=require('express')
const app=express();

// returning html templates to the user- use pug
app.set('view engine','pug')
app.set('views','./views')

const Joi=require('joi');
const helmet=require("helmet");
const morgan=require("morgan")
const logger=require('./middleware/logger')

// console.log(process.env.NODE_ENV) // adding developemt, testing, staging, production machine tags environment
// console.log(`App: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended:true})); // middleware
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses',courses) // any api that starts with /api/courses use this router
app.use('/',home)
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



const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on Port ${port}....`));