//
// ./api/routes_v1.js
//
var express = require('express');
var router = express.Router();

var mijnObject = { 
	mijntekst: 'Hello World!',
	label: "Nog meer tekst",
	mijnarray: [ "tekst", "nog meer tekst", 2 ],
	mijnobject: {
		mijnlabel: 'mijntekst',
		getal: 4
	}
};

router.get('/hello', function(req, res){
	res.status(200);
	res.contentType('application/json');
	res.json(mijnObject);
});

router.get('/goodbye', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'tekst': 'Goodbye!'});
});

module.exports = router;