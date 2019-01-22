 
 //this file only for demonstration purpose
 //rest api crud example
 const Joi=require('joi');
 const express = require('express');
 const router=express.Router();
 const db =  require('../models/index');
 const user=require('../models/user');

 const courses=[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},

]

 //get
 router.get('/', function(req, res) {
user.create({
    firstName:'jack'
}).then(u=>console.log('work!'))
    res.send(courses);
  });
//specific get
 router.get('/:id', function(req, res) {
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) req.Status(404).send('id not found');

  res.send(course);
  });

  //post

  router.post('/',(req,res)=>{
   

    const scema={
        name:Joi.string().min(3).required()
    }

     const result=Joi.validate(req.body,scema)
    if(result.error){
        res.Status(400).send(result.error.details[0].message);
        return;
    }
   const course={
       id:courses.length+1,
       name:req.body.name
   }
     courses.push(course);
     req.send(course);
  })

  //post
  router.put('/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)req.Status(404).send('id not found');

  

     const {error}=Joi.validate(req.body)

  if(error){
      res.Status(400).send(error.details[0].message);
      return;
  }

  //update here
  course.name=res.body.name;
  //response to the client
  res.send(course);

   })

   //delete

   router.delete('/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)req.Status(404).send('id not found');

   const index=courses.indexOf(course);
    courses.slice(index,1)
   
    res.send(course);
   })

  

   function validateCourse(course){
    const scema={
        name:Joi.string().min(3).required()
    }

    return Joi.validate(course,scema)
   }

  module.exports=router;