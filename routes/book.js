const express = require('express');
const router=express.Router();
//const db =  require('../models/index');
const Book =  require('../models/Book');

//get 
router.get('/',(req,res)=>
Book.findAll().then(book => {

  res.send(book);
})

)
//get by id
router.get('/:id',(req, res) => {	
	Book.findById(req.params.id).then(book => {
		res.send(book);
	})
});
//post
router.post('/add',(req, res) => {	
	// Save to MySQL database
	Book.create({  
	  title: req.body.title,
	  price: req.body.price,
	  publication: req.body.publication
	}).then(book => {		
		// Send created book to client
		res.send(book);
	});
});
//put
router.get('/edit',(req, res) => {
	const id = req.params.id;
	Book.update( { title: req.body.title, price: req.body.price, publication: req.body.publication }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
});

       
//delete
router.delete('/delete',exports.delete = (req, res) => {
	const id = req.params.id;
	Book.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a book with id = ' + id);
	});
});

module.exports=router;