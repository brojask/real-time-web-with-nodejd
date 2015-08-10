var fs = require('fs');
var file = fs.createReadStream('read.md');
var newFile = fs.createWriteStream('new_read.md');

file.pipe(newFile);