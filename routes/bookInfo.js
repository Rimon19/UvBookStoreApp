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

db.BookInf.findAll({
	
})
.then(book => {
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
router.put('/edit',(req, res) => {

	data=(req.body);
	db.BookInf.update( {
		name: data.name,
	  basePrice: data.basePrice,
		categoryId: data.categoryId,
		image: data.image,
		publisher: data.publisher,
		publicherYear: data.publicherYear,
		author: data.author
		}, 
					 { where: {id: data.id} }
				   ).then(() => {
					 res.status(200);
				   });
});

       
//delete
router.delete('/delete/:id',exports.delete = (req, res) => {
	const id = req.params.id;
	db.BookInf.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a book with id = ' + id);
	});
});

module.exports=router;