/*
Create a code snippet that declares two numeric variables, a and b, and uses the following operators:

Arithmetic: Addition, subtraction, multiplication, and division.
Assignment: Use += and -= to modify the values ​​of a and b.
Comparison: Compare the values ​​of a and b to see if a is greater than, less than, or equal to b.
Logical: Use logical operators to see if both variables are greater than zero.
Ternary: Use a ternary operator to determine a message based on the larger value between a and b.

*/

let a = 10
let b = 2

const sum = a + b
const sub = a - b
const mult = a * b
const div = a / b

console.log("Sum "+ sum);
console.log("Sub "+ sub);
console.log("Mult "+ mult);
console.log("Div "+ div);

a += a

console.log("New a value "+ a);

console.log(a === b);
console.log(a !== b);
console.log( a > b);
console.log( a < b);

console.log(a === !b);

console.log(a );

let c = a === b ? 500 : 100
console.log(c);