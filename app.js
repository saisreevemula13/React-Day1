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

// const division = React.createElement(
//   "div",
//   {id:child1},
//   React.createElement("h1", {}, React.createElement("span", {}, "I'm Saisree"))
// );
// var root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(division);

// const division2 = React.createElement(
//   "div",
//   {},
//   React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "I'm from second child2 div h1 tag")
//   )
// );
// var root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(division2);

// const city = "Hyd";
// function helloName() {
//   var name = "ss";
//   let x = 22;

//   const city = "knr";
//   city = "khamam";
// }
// console.log(city);
// helloName();


//<div id="parent">
//     <div id="parent1">
//         <h1 id="child11">
//              <span class="one-one">sample text</span>
//          </h1>
//          <h1 id="child12">
//              <span class="one-two">sample text</span>
//          </h1>
//          </div>
//     <div id="parent2">
//         <div id="two-one">
//               <p id="child2">React child2</p>
//               <p id="child1">React child1</p>
//         </div>
//          <div id="two-two">
//               <p id="child2">React child2</p>
//               <p id="child1">React child1</p>
//         </div>
//     </div>
//</div>
//Assigment
const assignment = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement(
      "h1",
      { id: "child11" },
      React.createElement("span", { className: "one-one" }, "sample text")
    ),
    React.createElement(
      "h1",
      { id: "child12" },
      React.createElement("span", { className: "one-two" }, "sample text")
    ),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("div", { id: "two-one" }, [
      React.createElement("p", { id: "child2" }, "React child2"),
      React.createElement("p", { id: "child1" }, "React child1"),
    ]),
    React.createElement("div", { id: "two-two" }, [
      React.createElement("p", { id: "child2" }, "React child2"),
      React.createElement("p", { id: "child1" }, "React child1"),
    ]),
  ]),
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(assignment);
//Example 1
/* <div id="container">
<div id="parent">
  <div id="child1">
    <h1>Hello</h1>
    <h1>Saisree</h1>
  </div>
  <div id="child2">
    <h1>Hello</h1>
    <h1>Saisree</h1>
  </div>
</div>
</div> */
// const division = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm Saisree"),
//     React.createElement("h2", {}, "I'm Saisree"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm Saisree"),
//     React.createElement("h2", {}, "I'm Saisree"),
//   ]),
// ]);
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(division);
