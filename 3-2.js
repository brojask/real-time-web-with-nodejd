var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var newFile = fs.createWriteStream('readme_copy.md');

	req.pipe(newFile);
	req.on('end',function(){
		res.end('Uploaded!');
	});

	// curl --upload-file readme.md http://localhost:8080

}).listen(8080);