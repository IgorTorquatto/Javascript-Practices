/*
A callback function is a function provided as an
argument to another function, which is called after a specific task is completed.
*/

function array1(callback,...rest){
    const initialArray = [...rest]
    for(let i = 0 ; i < initialArray.length;i++){
        initialArray[i]= callback(initialArray[i])
    }
    return initialArray
}

function double(num){
    return num*2
}

function triple(num){
    return num *3
}

const newArray = array1(double,1,2,3)
console.log(newArray);

const newArray2 = array1(triple,1,2,3)
console.log(newArray2);
