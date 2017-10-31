//反复的练习
console.info("\n");
console.log('----- fib -----');
console.log('\n')
var strFib;
var i=1,j=1,s = i+j;
strFib = '输出 Fib 数列 >>> 1 1 '
while(s<=100){
	strFib = strFib + s + ' ';
	i = j;
	j = s;
	s = i + j;
}

console.log(strFib);
console.info("\n");