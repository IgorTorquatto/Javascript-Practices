class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    hello(){
        console.log(`Hi my name is ${this.name} I'm ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(name,age,course){
        super(name,age)
        this.course = course
    }

    courseStudent(){
        console.log(`I'm student of ${this.course}`);
    }
}

const studentCarlo = new Student("Carlo",18,"Computer Science")
studentCarlo.hello()
studentCarlo.courseStudent()