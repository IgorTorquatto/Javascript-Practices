/*
Arrow functions in JavaScript provide a concise syntax for defining functions.
*/

const oneArgument = (num) => num*2

const multipleArguments = (num1,num2) => num1+num2

const multipleLines = (num1) => {
    num1 + 1
    return num1*4
}

console.log(oneArgument(2));
console.log(multipleArguments(1,2));
console.log(multipleLines(5));