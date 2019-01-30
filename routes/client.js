const express = require('express');
const router=express.Router();
const db =  require('../models/index');


//get 
router.get('/',(req,res)=>
db.Client.findAll().then(client => {

  res.send(client);
})

)
//get by id
router.get('/:id',(req, res) => {	
	db.Client.findById(req.params.id).then(client => {
		res.send(client);
	})
});
//post
router.post('/save',(req, res) => {	
	
data=(req.body);
console.log(data.ClientId);
	db.Client.create({  
        name: data.name,
        address: data.address,
        ClientId: data.ClientId,
        mobile: data.mobile,
        paidAmount: data.paidAmount,
        dueAmount: data.dueAmount,
        advanceAmount: data.advanceAmount
	}).then(client => {		
		// Send created book to client
	//	res.send('1 row affected');
	console.log('1 row affected');
	});

});
//put
router.put('/edit',(req, res) => {
	//const id = req.params.id;
	data=(req.body);
	db.Client.update( {
        name: data.name,
        address: data.address,
        ClientId: data.ClientId,
        mobile: data.mobile,
        paidAmount: data.paidAmount,
        dueAmount: data.dueAmount,
        advanceAmount: data.advanceAmount
		}, 
					 { where: {id:data.id} }
				   ).then(() => {
					 res.status(200);
				   });
});

       
//delete
router.delete('/delete/:id',exports.delete = (req, res) => {
	const id = req.params.id;
	db.Client.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200);
	});
});

module.exports=router;