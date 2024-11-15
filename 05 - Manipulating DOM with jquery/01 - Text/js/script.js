/*
In this example I will use the uncompressed version of the javascript jquery framework to modify the h1 title of an html
file after a period of time and add text to an html paragraph that has no content.
*/

const titles = ["Title1", "Title2", "Title3"];

let count = 0;

setInterval(() => {
  if (count == 3) {
    count = 0;
  }
  $("#title").text(titles[count]);
  count++;
}, 1000);

//the setInterval function executes the function at a defined time interval

$("#test").append("content added by Jquery")
