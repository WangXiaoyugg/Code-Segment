var fs = require('fs');
var filePath = './not-found.txt';
var endcoding = 'utf-8';
fs.readFile(filePath, endcoding, (err,data) => {
	if(err){
		console.error('error - \n %s',err);
		console.warn('warn - \n %s',err);
	}else{
		console.log(data);
	}
});

//控制台使用 node xxx.js 2> err.log