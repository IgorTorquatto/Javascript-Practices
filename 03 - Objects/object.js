const person = {
    name: "Igor",
    age: 55,
    detail: ()=>{
        return `Name: ${person.name} Age ${person.age}`
    }
}

console.log(person.detail());
