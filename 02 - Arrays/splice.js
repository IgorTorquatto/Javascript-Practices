/*
The splice() method in JavaScript is used to change the contents of an
array, allowing you to add, remove, or replace elements.
*/

// alters the original array
// uses index
// array.splice(initialIndex,quantityRemoveElements,elementToAdd)
//elementToAdd is optional

const numbers = [1,2,3,4,5]
numbers.splice(0,2) //removes 2 elements starting at index 0
console.log(numbers); //[3,4,5]

numbers.splice(0,0,1,2) //at index 0 remove 0 elements and add 1,2
console.log(numbers); [1,2,3,4,5]
