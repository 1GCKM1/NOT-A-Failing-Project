/*
* @Author: slowak
* @Date:   2017-07-20 15:40:43
* @Last Modified by:   slowak
* @Last Modified time: 2017-07-20 16:05:18
*/

'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello');
});

var server = app.listen(3000, function() {
	console.log("Server running at http://localhost:" + server.address().port);
});