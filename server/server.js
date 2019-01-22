
const helmet=require('helmet');
const express = require('express');
const app = express();
const compression=require('compression');
const db =  require('../models/index');
//const home = require('../routes/home');
//const courses = require('../routes/courses');
//const book = require('../routes/book');
//const user =  require('../models/user');

//const company=require('../models/company')

// db.User.create({  
//   firstName: 'firstname',
//   lastName: 'lastNma',
//   email: 'email'
// }).then(c => {		
//   c.createCompany({
//     name:'title',
  
//   }).then(artlce=>{
    
//   })
// });


db.User.findAll({
   include: [db.company]
  }).then(a=>{
    console.log(a[0].companies.name);
 
  });

  // db.company.findAll({
  //   include: [db.User]
  //  }).then(a=>{
  //    console.log(a[0].User.email);
    
    
  //  });




app.use(express.json());

app.use(helmet());
app.use(compression());

//app.use('/', home);
//app.use('/api/courses', courses);
//app.use('/api/books', book);



  const port=process.env.port||3000
  app.listen(port,()=>console.log(`listening on port ${port}`));