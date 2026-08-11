// Q1  Write a script to greet your website visitor using JS alert
//box.
//Answer1


// if statements



// var number = 2  // assign operator 
// if (number === 2) {
//     console.log("u are correct its a number"); // comparision operatror
    
// } else{
//     console.log(" u are not a number");
    
// }
// var stuAge = prompt("what is your age")

// if (stuAge >= 18) {
//         console.log("U ARE ELIGIBLE");
// } else {
//       console.log("U ARE NOT ELIGIBLE");
// }
// var yourTicketNumber = 487209
//  if (yourTicketNumber !== 487208) {
//  alert("Better luck next time.");
// }else(
//     alert("congratulations")
// )


// var ques = prompt(" How can we create a structure of website")
// var ans = "html"
// var score = 0 
// if (ques === ans) {
//     score++
//     console.log("Correct answer!");
    
// } else {
//     console.log("wrong answer!");
    
    
// }
// console.log("Your Score is :" +score);


// var gender = prompt(" Enter your Gender")
// var message;
// if(gender == "female"){
//     message = "you are eligible in aliabad"
// } else if (gender == "male"){
//     message = "you are eligible in bahadurabd"
// }else{
//     message = "u are not eligible"

// }
// console.log(message);

var sub1 = +prompt("Enter marks of subject 1:")
var sub2 = +prompt("Enter marks of subject 2:")
var sub3 = +prompt("Enter marks of subject 3:")
var TotalMarks = 300;
var obtainedMarks = sub1+sub2 +sub3
var percentage = (obtainedMarks/TotalMarks) *100;
var grade, remarks;
if(percentage > 100){
    obtainedMarks = "Invalid"
    percentage = "Invalid"
    grade = "Invalid"
    remarks = "Enter marks into 100s"

}
else if(percentage >= 90){
    grade = "A-one" ;
    remarks = "Excellent"

}
else if(percentage >= 80){
    grade = "A" ;
    remarks = "Very Good"

}
else if(percentage >= 70){
    grade = "B+" ;
    remarks = "Good"

}
else if(percentage >= 60){
    grade = "B" ;
    remarks = "U need to Improve"

}else{
    grade = "Fail" ;
    remarks = "Sorry"

}
console.log(grade + " " + remarks);
