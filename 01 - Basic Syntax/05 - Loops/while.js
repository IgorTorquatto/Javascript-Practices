const array1= [1,2,3,4]

const lengthArray1 = array1.length
let aux = 0
let sum = 0

while (aux !== lengthArray1){
    sum += array1[aux]
    aux++
}

console.log(sum);