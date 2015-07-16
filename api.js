var express = require('express'),
	bodyParser 	= require('body-parser'),
	Bourne 		= require('bourne'),
    db          = new Bourne('data.json');

var router 	= express.Router();

router
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	.post('/contact', function(req, res) {

		var contact = {
			name: 	req.body.name,
			email: 	req.body.email,
			message: req.body.message 	
		};

		db.insert(contact, function (err, data) {
			res.sendfile('public/views/receive.html');
		});	
	});

module.exports = router;