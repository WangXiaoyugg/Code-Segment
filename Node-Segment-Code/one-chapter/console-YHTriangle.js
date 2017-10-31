var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout,
})

//太难了，要复习
var i,j,k,strLine;
rl.question('line is: ',function (line) {
	//输出杨辉三角第一行
	strLine = '>'
	for(i=1;i<=10*line;i++){
		if(i === 5*line){
			strLine = strLine + 1;
		}else{
			strLine = strLine + '-';
		}
	}
	console.info(strLine);//'---------1----------'

	//输出杨辉三角的后续行
	strLine = '>';
	for(j=1;j<=line-1;j++){
		for(k=1;k<5*(line-j-1);k++){
			strLine = strLine + ' '
		}
		var y=1;
		strLine = strLine + FormatNumber(y);
		for(k=1;k<=j;k++){
			y = y*(j-k+1)/k;
			strLine = strLine + FormatNumber(y);
		}
		console.info(strLine);
		strLine = '>'
	}

	rl.close();
})

function FormatNumber(y){
	var strL = '';
	if(y<10){
		strL = strL +'    '+y+'    ';
	}else if(y >= 10 && y<100){
		strL = strL +'    '+y+'    ';
	}else if(y>=100){
		strL = strL +'    '+y+'    ';
	}
	return strL;
};
