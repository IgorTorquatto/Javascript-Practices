/**
 High Order Functions in JavaScript are functions that can receive other functions as arguments
 or return functions as results.
 */


const mult = (a,b)=>{
    return a*b
}

const sum = (a,b)=>{
    return a+b
}

const sub = (a,b)=>{
    return a-b
}

const operation=(a,b,op)=>{
    return op(a,b)
}

console.log(operation(7,2,mult));