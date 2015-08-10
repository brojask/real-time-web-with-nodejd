var express = require('express');
var app = express();

app.get('/', function(req, res){
	// __dirname = current directory
	res.sendFile(__dirname +'/templates/index.html');
});

var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, res){
	var username = req.params.username;
	options = {
		protocol : 'https',
		host : 'api.twitter.com',
		pathname: '/1.1/statususes/user_timeline.json',
		query: {screen_name: username, count: 10}
	}
	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(res);
	// curl -s http://localhost:8080/tweets/eallam
	//npm install prettyjson -g
	// curl -s http://localhost:8080/tweets/eallam | prettyjson
});

app.listen(8080);