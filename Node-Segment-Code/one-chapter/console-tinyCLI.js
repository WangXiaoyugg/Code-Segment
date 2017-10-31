var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
}) 

rl.setPrompt('NodeJs>');
rl.prompt();
rl.on('line',(line) => {
	switch (line.trim()) {
		case 'name':
			console.log('king!')
			break;
		case 'code':
			console.log('Node.js');
			break;
		case 'time':
			console.log('2017');
			break;			
		default:
			console.log('Say What ? I might have heard `' + line.trim()+'`');
			break;
	}
	rl.prompt();
}).on('close',() => {
	console.log('Hava a great day!');
	process.exit(0);
})