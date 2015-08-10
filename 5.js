var express = require('express');
var app = express();

app.get('/', function(req, res){
	// __dirname = current directory
	res.sendFile(__dirname +'/templates/index.html');
});

app.listen(8080);