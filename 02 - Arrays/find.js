/*
The find() method in JavaScript is used to find the first element in an array that satisfies a specific condition, defined by a test function.
If a matching element is found, the method returns that element; otherwise, it returns undefined.
*/

// return only the FIRST element finded
// to return more than one element we use the FILTER method

const names = ['Ana','Bob','Carlo','Denise']

const person = names.find((name)=>{
    if (name === 'Ana'){
        return name
    }
})

console.log(person);

const persons = [
    {name: 'Ana', age: 45},
    {name: 'Bob', age: 18},
    {name: 'Carlo', age:24}
]

const twentyplus = persons.find((person)=>{
    if(person.age > 20){
        return person
    }
})

console.log(twentyplus);
