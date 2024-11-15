/*
In this example I used the onclick event on the HTML button so that when clicked
it adds paragraphs to the body with different IDs
*/
let countP = 0
const clickFunction = ()=>{
    countP++

    let newP = $("<p>New Content</p>")
    newP.attr('id','paragraph'+countP )

    $("body").append(newP)
}