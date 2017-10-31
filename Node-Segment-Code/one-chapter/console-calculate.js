var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})
rl.setPrompt('Calculate>');
rl.prompt();
var a = Math.round(Math.random() * 100);
var b = Math.round(Math.random() * 100);
var sign = Math.round(Math.random() * 3);
var summary = switchSign(a,b,sign);

rl.on('line',(line)=>{
	if(line.trim() == summary){
		console.info('answer is right!');
	}else {
		console.info('answer is error! the correct answer is '+ summary + '.');
	}

	rl.prompt();
	a = Math.round(Math.random() * 100);
	b = Math.round(Math.random() * 100);
	sign = Math.round(Math.random() * 3);
	summary = switchSign(a,b,sign);
}).on('close',()=>{
	console.log('Calculate exits');
	process.exit(0);
})

function switchSign(a,b,sign) {
	var c;
	switch(sign){
		case 0:
			c = a + b;
			console.log(a+'+'+b+'=');
			break;
		case 1:
			c = a - b;
			console.log(a+'-'+b+'=');
			break;
		case 2:
			c = a * b;
			console.log(a+'*'+b+'=');
			break;
		case 3:
			c = a / b;
			console.log(a+'/'+b+'=');
			break;					
	}
	return c;
}

