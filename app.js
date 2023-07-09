// var x=10;
// var greeting="Hello good morning";
// function myhobby(){
//     var hobby="gardening";
//     console.log(hobby);
// }
// function favMovie(){
//     var movie="RRR";

// }
// favMovie();
// myhobby();
// console.log(greeting);
// console.log(x);

const division = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, React.createElement("span", {}, "I'm Saisree"))
);
var root = ReactDOM.createRoot(document.getElementById("container"));
root.render(division);

const division2 = React.createElement(
  "div",
  {},
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "I'm from second child2 div h1 tag")
  )
);
var root = ReactDOM.createRoot(document.getElementById("container"));
root.render(division2);
