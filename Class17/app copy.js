// function submitForm (event){
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     console.log("Name:", name);

// }

function readName() {
  let name = document.getElementById("name").value;
  console.log("Name", name);
}
function setName() {
  document.getElementById("name").value = "Asad";
}
function showName() {
  let name = document.getElementById("name").value;
  console.log(name);
}
function changeName() {
  document.getElementById("name").value = "Hanifa Asad ";
}
function changeMessage() {
  document.getElementById("message1").innerText = "Welcome To Javascript";
}

function showGreeting() {
  let name = document.getElementById("name").value;
  document.getElementById("message").innerText = "Hello" + " " + name;
}

function turnOn() {
  document.getElementById("bulb").src =
    "https://img.magnific.com/free-vector/realistic-lit-light-bulb-isolated_1284-41774.jpg?semt=ais_hybrid&w=740&q=80";
}
 function turnOff(){
    document.getElementById("bulb").src= "https://img.magnific.com/free-vector/energy-saving-lightbulb-isolated_1284-41849.jpg?semt=ais_hybrid&w=740&q=80"
 }

function changeImage(){
    document.getElementById("car").src="https://assets-v2.lottiefiles.com/a/49847160-3f53-11ef-8109-cbcc69139eb2/fZaPRJe15G.gif"
} 
function restoreImage() {
    document.getElementById("car").src= "image.png"
}
// function changeClass(){
//     document.getElementById("message").className="highlight"
// }

function changeClass(){
    document.getElementById("message").classList.add("highlight")
}
function removeClass(){
    document.getElementById("message").classList.remove("highlight")
}
function toogle(){
    document.getElementById("message").classList.toggle("highlight")
}

function changeStyle(){
    let message = document.getElementById("old");
    message.style.color ="pink"
    message.style.fontSize = "20px"
    message.style.backgroundColor ="blue";
}