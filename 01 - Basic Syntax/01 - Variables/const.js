/*
Scope: The const variable cannot be accessed outside the block in which it was declared, since it also has block scope.
Reassignment: The const variable does not allow reassignment of values; once a value is assigned, it cannot be changed.
Objects and Arrays: Although the const variable does not allow reassignment, you can change the properties of an object or the elements of an array declared with const.
*/

const example = 3

//example = 2 error

const array1 = [1,2,3]

console.log(array1[0]);

array1[0]= 50

console.log(array1[0]);