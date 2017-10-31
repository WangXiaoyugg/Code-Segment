console.info('Node.js - readline.write() Usage');
var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

rl.write('Delete me ! Wait for 3 second...');
var timeoutLength = 3 * 1000;
var timeout = setTimeout(()=>{
	rl.write(null,{ctrl:true,name:'u'});
},timeoutLength)