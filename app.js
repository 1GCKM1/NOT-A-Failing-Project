//test creating a collection and do something inside the collection

// {
//   	_id:2,
//   	name: 'le duc thien',
//   	phone: '114',
//   	address:'vn',
//   	shop: [1,2,3,4]
// }

//{
  // 	_id:2,
  // 	name: 'Victoria Secret ver 3.0',
  // 	type: 'pantsu',
  // 	description: 'speechless',
  // 	seller: [{_id:1 , sl:2}]
  // }
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var crud = require('./CRUD_operations');
// Connection URL
var url = 'mongodb://localhost:27017/mydb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  var seller = db.collection('seller');
  var item = db.collection('item');
  seller.find({
  	//query here!
  	}).toArray(function(err,val){

   		val.forEach(function(r){
   			r.shop.forEach(function (final){
   				item.findOne({_id:final},function(err,rr){
   					console.log(rr);
   				});
   			});
   		});
  		//console.log(val[0].shop[0]);
   		db.close();
   });
});