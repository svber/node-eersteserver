//
// ./api/routes_v2.js
//
var express = require('express');
var router = express.Router();

var mijnObject = { mijntekst: 'Hello World!' };

router.get('/hello', function(req, res){
	res.status(200);
	res.contentType('application/json');
	res.json(mijnObject);
});

router.get('/goodbye', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'tekst': 'Goodbye versie 2!'});
});

module.exports = router;