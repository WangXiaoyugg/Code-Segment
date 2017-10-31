var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout,
});

var flag,strPrimeNum;
rl.question('please enter a number ?',(number) => {
	strPrimeNum = '2 ';
	for(var i=3;i<number;i++){
		flag = true;
		for(var j=2;j<i;j++){
			if(i%j === 0){
				flag = false;
				break;
			}
		}
		if(flag){
			strPrimeNum = strPrimeNum + i + ' ';
		}
	}
	console.log('strPrimeNum is ',strPrimeNum);
	rl.close();
})