/*
spread operator makes it easier
to manipulate and combine arrays and objects.
*/

//copy
const numbers = [1,2,3]
const copy = [...numbers]
console.log(copy);

//join
const numbers2 = [4,5,6]
const numbers1to6 = [...numbers,...numbers2]
console.log(numbers1to6);

//add
const numbers1to9 = [...numbers1to6,7,8,9]
console.log(numbers1to9);