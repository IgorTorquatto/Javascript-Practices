/*

The slice() method in JavaScript is used to extract a portion of an
array or string, returning a new array or string without modifying the original.
*/

//original array is NOT modified
//we must pass the index [initial,final) final not includes
//final index is optional, without it we go to the end of the array
// we can use it to copy without losing the original array

const numbers = [1,2,3,4,5]

const numbers1to3 = numbers.slice(0,3)
console.log(numbers1to3);

const numbers3to5 = numbers.slice(2)
console.log(numbers3to5);

//copy
const copyNumbers = numbers.slice()
copyNumbers.unshift(0)
console.log(copyNumbers);

const lastElement = numbers.slice(-1)
console.log(lastElement);