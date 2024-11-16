/*
Destructuring allows you to extract values ​​from arrays or object
properties and assign them to variables concisely.
*/

const numbers = [1,2,3,4,5]
const [a,b] = numbers

console.log(a);

const [first, ...rest] = numbers
console.log(first);
console.log(rest);