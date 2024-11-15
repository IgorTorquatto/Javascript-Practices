/*
Scope: The var variable cannot be accessed outside of functions when declared inside them because is a local variable and is not available in the global scope.
Reassignment: The var variable allows reassignment of values. You can change its value after declaration.
Hoisting: The var variable cannot be accessed before its declaration. If you try to access it before, JavaScript will return undefined.
*/
var change = 10

function testingVariables(){
    var a = "test"
}

testingVariables()

//console.log(a); error

change = 20

console.log(change);