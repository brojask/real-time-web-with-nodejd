// custom_hello.js
var hello = function(){
	console.log('Hello');
}

exports = hello;

// custom_gb.js
exports.goodbye = function() {
	console.log('Good bye');
}

var hello = require('./custom_hello');
var gb = require('./custom_gb');

hello();
gb.goodbye():

require('./custom_gb').goodbye();