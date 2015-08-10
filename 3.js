var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200);
	/*req.on('data', function(chunk){
		//console.log(chunk.toString());
		res.write(chunk);
	});

	req.on('end', function(){
		res.end();
	});*/
	// curl -d 'hello' http://localhost:8080
	req.pipe(res);

}).listen(8080);