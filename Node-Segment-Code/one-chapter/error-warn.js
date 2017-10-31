var fs = require('fs');
var filePath = ' ./error-warn.txt';
var encoding = 'utf-8';
fs.readFile(filePath,encoding,(err,data) => {
	if(err){
		console.error('error - \n %s',err);
		console.warn('warn - \n %s',err);
	}else{
		console.log(data);
	}
}) 