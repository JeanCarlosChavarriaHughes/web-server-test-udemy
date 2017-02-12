
//header of the server
var express = require('express');
var app = express();
var middleware = require('./middleware.js');

var PORT = process.env.PORT || 3000;
/*
//adding a new route
app.get('/', function(req, res){
	//get corresponds to GET HTTP request.
	res.send('Hello Express!');
});
*/ //commenting out to make index as the root


//if I call middleware here, all routes will call middleware
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

//adding route for About
app.get('/about', middleware.requireAuthentication, function(req,res){
	//sends a response
	res.send('About Us');
});

//tell express to show all files in publi
//console.log(__dirname);
app.use(express.static(__dirname + '/public'));


//tell the app to listen in a certain port.
app.listen(PORT,function () {
	console.log('Server has started sucessfully in port: ' + PORT);
});
