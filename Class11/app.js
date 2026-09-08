// let now = new Date();
// console.log(now);

// let today = new Date();
// console.log(today.toDateString());
// console.log(today.toTimeString());

// let fullYear = new Date();
// console.log(fullYear.getFullYear());

// let month = new Date();
// console.log(month.getMonth() +1 );

// console.log(month.getDate());

// console.log(month.getDay());

// console.log(month.getHours());
// console.log(month.getMinutes());
// console.log(month.getSeconds());


// let birthday = new Date("2022-9-23");
// let birthday2 = new Date(2026,9,23);
// console.log(birthday);
// let difference = birthday - birthday2;
// console.log(difference);

// let nowDate = new Date ();
// nowDate.setFullYear(2040);
// nowDate.setFullYear(2003);
// nowDate.setMonth(5);
// nowDate.setDate(25);
// nowDate.setHours(11);
// nowDate.setMinutes(58);
// nowDate.setSeconds(2);
// console.log(nowDate);




// let birthYear = Number(prompt("Enter Your Birth Year"));
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log("Your Age is:", age);



// let birthday = new Date("2026-09-20");
// birthday.setDate(birthday.getDate() + 1)
// console.log(birthday);


// let date1 = new Date();

// let day = date1.getDate();
// let month = date1.getMonth();
// let year = date1.getFullYear();

// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];

// console.log("Today is:", day, months[month], year);




// let userDate = prompt("Enter a date (YYYY-MM-DD):");

// let date = new Date(userDate);

// let dayNumber = date.getDay();

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];

// console.log("The day is", days[dayNumber]);



// let dob = prompt("Enter your date of birth:");

// let birthDate = new Date(dob);
// let today = new Date();

// let birthYear = birthDate.getFullYear();
// let birthMonth = birthDate.getMonth();
// let birthDay = birthDate.getDate();

// let currentYear = today.getFullYear();
// let currentMonth = today.getMonth();
// let currentDay = today.getDate();

// let age = currentYear - birthYear;

// if (
//   currentMonth < birthMonth ||
//   (currentMonth === birthMonth && currentDay < birthDay)
// ) {
//   age--;
// }

// console.log("Your age is:", age);


// function welcome() {
//     alert("hello hanifa")
// }

// welcome(); 
// welcome();
// welcome();

function greet(name) {
    alert("Hello", name);
    
};
greet("Ali");
greet("Amna");
greet("Huma");


