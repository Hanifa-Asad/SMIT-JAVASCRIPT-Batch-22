// function add(a,b) {
//     return a + b;
// // let c = a + b;
// // console.log(c);

// };
// let c = add(2,5);
// console.log(c);
function hello() {
  alert("Hello Student");
}

function over() {
  console.log("Mouse is here");
}
function out() {
  console.log("Mouse left");
}
function focusInput() {
  console.log("input field is active");
}
function blurInput() {
  console.log("You left the input field");
}
function readName() {
  let name = document.getElementById("name").value;
  console.log(name);
}

function cityChange() {
  let city = document.getElementById("city").value;
  console.log("city:", city);
}
function bulbHover() {
  document.getElementById("bulb").src =
    "https://img.magnific.com/free-vector/realistic-lit-light-bulb-isolated_1284-41774.jpg?semt=ais_hybrid&w=740&q=80";
}
function bulbLeave() {
  document.getElementById("bulb").src =
    "https://img.magnific.com/free-vector/energy-saving-lightbulb-isolated_1284-41849.jpg?semt=ais_hybrid&w=740&q=80";
}
function turnOn() {
  document.getElementById("on").src =
    "https://img.magnific.com/free-vector/realistic-lit-light-bulb-isolated_1284-41774.jpg?semt=ais_hybrid&w=740&q=80";
}
function turnOff() {
  document.getElementById("on").src =
    "https://img.magnific.com/free-vector/energy-saving-lightbulb-isolated_1284-41849.jpg?semt=ais_hybrid&w=740&q=80";
}
