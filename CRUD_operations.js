//prefix*******************************************************

// var sellerForm = {

// 	//receive from client

// 	// 	_id: 115,
// 	// 	name : 'tran xuan cuong',
//  // 		phone: 113,
// 	// 	address: 'viet nam',
// 	// 	shop: [1,2,3]
// 	// 
// };

// var removeForm = {
// 	//receive from client
// 	//_id : 1
// };
// var findSellerForm = {
// 	//_id :12, 
// };

// var seller = db.collection('seller');

//working***********************************************************
module.exports = {

	insertSeller : function (seller, sellerForm) {

		seller.insertOne(sellerForm,function(err,result) {
			if (err) throw err;
			console.log('insert successfully');
		});


},

	updateSeller : function (seller,query,sellerForm){
		seller.updateOne(query,{$set : sellerForm},function(err,result){
			if (err) throw err;
			console.log('update successfully');
		});
},

	removeSeller : function (seller,removeForm){	
		seller.deleteOne(removeForm,function(err,result){
			if (err) throw err;
			console.log('remove successfully');
		});
},

//*********item collection************************

	insertItem : function (item, itemForm) {

		item.insertOne(itemForm,function(err,result) {
			if (err) throw err;
			console.log('insert item successfully');
		});


},

	updateItem : function (item,query,itemForm){
		item.updateOne(query,{$set : itemForm},function(err,result){
			if (err) throw err;
			console.log('update item successfully');
		});
},

	removeItem : function (item,removeForm){	
		seller.deleteOne(removeForm,function(err,result){
			if (err) throw err;
			console.log('remove item successfully');
		});
}
};
