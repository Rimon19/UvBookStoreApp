const express = require('express');
const router=express.Router();
const db =  require('../models/index');
 var fs = require('fs');
 //var imageData = fs.readFileSync('../image');

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
		try{
			fs.writeFileSync('../image', data.image);				
		}catch(e){
			console.log(e);
		}
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