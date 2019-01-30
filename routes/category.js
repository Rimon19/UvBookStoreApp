const express = require('express');
const router=express.Router();
const db =  require('../models/index');


//get 
router.get('/',(req,res)=>
db.Category.findAll().then(book => {

  res.send(book);
})

)
//get by id
router.get('/:id',(req, res) => {	
	db.Category.findById(req.params.id).then(book => {
		res.send(book);
	})
});
//post
router.post('/save',(req, res) => {	
	
data=(req.body);

	db.Category.create({  
        categoryName: data.categoryName,
	}).then(book => {		
		// Send created book to client
	//	res.send('1 row affected');
	console.log('1 row affected');
	});

});
//put
router.put('/edit',(req, res) => {
	//const id = req.params.id;
	data=(req.body);
	db.Category.update( {
		categoryName:data.categoryName,	
		}, 
					 { where: {id:data.id} }
				   ).then(() => {
					 res.status(200);
				   });
});

       
//delete
router.delete('/delete/:id',exports.delete = (req, res) => {
	const id = req.params.id;
	db.Category.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200);
	});
});

module.exports=router;