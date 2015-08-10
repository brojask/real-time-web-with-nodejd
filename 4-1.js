var http = require('http');
var message = "Here's looking at you, kid."
var options = {
	host: 'localhost', port : '8080', path : '/', method : 'POST'
};

var req = http.req(options, function(res){
	res.on('data', function(data){
		console.log(data);
	});
});

req.write(message);
req.end();

