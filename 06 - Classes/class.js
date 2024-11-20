class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    hello(){
        console.log(`Hi my name is ${this.name} I'm ${this.age} years old`);
    }
}

const maria = new Person("Maria",22)

maria.hello()