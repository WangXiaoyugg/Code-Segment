var n = 0;
console.time('10000X10000-times');
for(var i=0;i<10000;i++){
	for(var j=0;j<10000;j++){
		n++
	}
}
console.timeEnd('10000X10000-times');
console.info(n);

