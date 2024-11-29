/*
The example with setInterval illustrates how asynchronous functions can be used to manage
repetitive tasks without blocking the execution of other operations.
*/

const title = "<h1> Example Asynchronous function</h1>"

$("body").append(title)

const div = (text) =>{
    return `<div>${text}</div>`
}

const synchronousPInitial = "<p>This is a synchronous paragraph</p>"
const synchronousPFinal = "<p>This is a final synchronous paragraph</p>"

$("body").append(div(synchronousPInitial))

setInterval(()=>{
    const asynchronousP = "<p>This is a asynchronous paragraph</p>"
    $("body").append(div(asynchronousP))
},2000)

$("body").append(div(synchronousPFinal))
