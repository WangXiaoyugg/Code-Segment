var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question('What is your name ?',(answer)=>{
	console.log('My name is ',answer);
	// rl.close();
	rl.question('How old are you ?',(answer)=>{
	console.log('I am ',answer);
	rl.close();
	})
})


