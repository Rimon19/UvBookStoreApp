const express = require('express');
const router=express.Router();
const db =  require('../models/index');
const multer=require('multer');
const path=require('path');


const storage=multer.diskStorage({
	destination:'../public/uploads/',
	filename:function(req,res,cb){
		cb(null,file.fieldname+'-'+Date.now()+
		path.extname(file.originalname));
	}
})

//init upload


//get 
router.get('/',(req,res)=>
db.BookInf.findAll().then(book => {

  res.send(book);
})

)
//get by id
router.get('/:id',(req, res) => {	
	db.BookInf.findById(req.params.id).then(book => {
		res.send(book);
	})
});
//post
router.post('/save',(req, res) => {	

data=(req.body);
// upload(req,res,(err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data.image);
// 	}
// })
// multer({
// 	storage:data.image
// }).single('myImage');

	db.BookInf.create({  
	  name: data.name,
	  basePrice: data.basePrice,
		categoryId: data.categoryId,
		image: data.image,
		publisher: data.publisher,
		publicherYear: data.publicherYear,
		author: data.author
	}).then(book => {		
		// Send created book to client
		res.send('1 row affected');
	
	});

});
//put
router.get('/edit',(req, res) => {
	const id = req.params.id;
	db.BookInf.update( {
		name: req.body.name,
	  basePrice: req.body.basePrice,
		categoryId: req.body.categoryId,
		image: req.body.image,
		publisher: req.body.publisher,
		publicherYear: req.body.publicherYear,
		author: req.body.author
		}, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
});

       
//delete
router.delete('/delete',exports.delete = (req, res) => {
	const id = req.params.id;
	db.BookInf.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a book with id = ' + id);
	});
});

module.exports=router;