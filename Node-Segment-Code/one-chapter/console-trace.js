console.trace();
console.trace('start');
var fs = require('fs');
var filePath = './not-found.txt';
var encoding = 'utf-8';
fs.readFile(filePath, encoding, (err,data) => {
	console.trace('fs-start');
	if(err){
		console.error('error - \n %s',err);
		console.warn('warn - \n %s',err);
	}else{
		console.log(data);
	}
	console.trace('fs-end');
});
console.trace('end');