const express = require('express');
const router=express.Router();
const db =  require('../models/index');


//get 
router.get('/',(req,res)=>
db.ClientReport.findAll().then(client => {

  res.send(client);
})

)
//get by id
router.get('/:id',(req, res) => {	
	db.ClientReport.findById(req.params.id).then(client => {
		res.send(client);
	})
});


//post
router.post('/save',(req, res) => {	
	
data=(req.body);

	db.ClientReport.create({  
        name: data.name,
        address: data.address,
        ClientId: data.ClientId,
        mobile: data.mobile,
        paidAmount: data.paidAmount,
        dueAmount: data.dueAmount,
        advanceAmount: data.advanceAmount,
        packingCoast: data.packingCoast,
        commision: data.commision,
        currentDue: data.currentDue,
        total: data.total,
        totalWithComiAndPackingCost: data.totalWithComiAndPackingCost,
        totalWithPreviousDue: data.totalWithPreviousDue,
        finalTotal: data.finalTotal,
        billNo: data.billNo,
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
	db.ClientReport.update( {
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
	db.ClientReport.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200);
	});
});

module.exports=router;