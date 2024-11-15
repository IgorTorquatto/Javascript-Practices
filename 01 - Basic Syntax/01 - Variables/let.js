/*
Scope: The let variable cannot be accessed outside the block in which it was declared, as it has block scope.
Reassignment: The let variable allows reassignment of values, that is, you can change its value after declaration.
Hoisting: The let variable cannot be accessed before its declaration, resulting in an error, as it is not initialized until the line in which it is declared.
*/

const function2 = ()=>{
    let example = 2

    example = 3

    console.log(example);
}

function2()

//console.log(example); error
