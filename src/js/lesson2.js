//1
let x = 5; 
alert( x++ ); 
// result: alert(5) and after this alert x will equal 6

//2
[ ] + false - null + true;
//result: NaN (special number value)

//3
let y = 1; 
let x = y = 2; 
alert(x);
//result: alert(2) because assignment in 2nd line will work right-to-left, so y will be 2 and after that x will be equal y, which is 2 

//4
[ ] + 1 + 2;
//result string containing '12' because empty array will be converted to an empty string '' and after that 1 and 2 will be added as strings too

//5
alert( "1"[0] );
//result: alert(1) because 1st symbol in string "1" is 1

//6
2 && 1 && null && 0 && undefined
//result: will return null because result is unknown or empty

//7
!!( a && b ) и (a && b)
//result: 1st equation will return true, result will be converted to boolean type, and 2nd equation will return second operand

//8
alert( null || 2 && 3 || 4 ); 
//result: alert(3) because first boolean true value will be 3 in this case

//9
a = [1, 2, 3]; b = [1, 2, 3]; 
a == b ?
//result: unfortunately not, every array equals only to himself, so even if there are two identical arrays it will be false

//10
alert( +"Infinity" ); 
//result: alert("Infinity") because "Infinity" itself is a string, also there is some catch - if we will use alert(+Infinity) - it will also return as alert("Infinity") - adding plus sign easiest way to convert anything to string

//11
"ёжик" > "яблоко"
//result: True, because in Unicode letter ё has bigger code number than symbol я

//12
0 || "" || 2 || undefined || true || falsе 
//result: will return 2 as first operand which is True in boolean 




