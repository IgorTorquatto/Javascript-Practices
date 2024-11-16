/*
JavaScript closures are functions that have access to variables in their lexical scope even after the outer function has been executed. This means that an inner function can "remember" and access variables that were available at the time it was created,
allowing for data encapsulation and the creation of persistent state.
*/

function counter(){
    let count = 0

    function counter2(){
        count++
        console.log(count);
    }

    return counter2
}

const call1 = counter()
const call2 = counter()

call1()
call1()

call2()