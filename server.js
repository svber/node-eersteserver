//
// dit is mijn server
//
var http = require('http');
var express = require('express');
var routes_v1 = require('./api/routes_v1');
var routes_v2 = require('./api/routes_v2');

var app = express();

app.get('*', function(req, res, next){
	console.log('Default URL afgehandeld');
	next();
});

app.use('/api/v1', routes_v1);
app.use('/api/v2', routes_v2);

app.get('*', function(req, res){
	console.log('Error URL afgehandeld');
	res.status(401);
	res.contentType('application/json');
	res.json({ error: 'Deze URL bestaat niet!'});
});

app.listen(process.env.PORT || 3000);

console.log('De server luistert op port 3000');

module.exports = app;
