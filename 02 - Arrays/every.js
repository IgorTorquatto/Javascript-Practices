/*
The every() method in JavaScript is used to test whether all elements
of an array satisfy a specific condition, defined by a test function.
It returns a boolean value (true or false).
*/

const numbers = [10,20,30,40]

console.log(numbers.every((num)=> num%2 ==0)); //every even