var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var newFile = fs.createWriteStream('readme_copy.md');
	var fileBytes = req.headers['content-length'];
	var uploadedBytes = 0;

	req.pipe(newFile);


	req.on('data', function(chunk){
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes / fileBytes) * 100;
		res.write('Progress: ' + parseInt(progress, 10) + "%\n");
	});

	req.on('end',function(){
		res.end('Uploaded!');
	});

	// curl --upload-file readme.md http://localhost:8080

}).listen(8080);