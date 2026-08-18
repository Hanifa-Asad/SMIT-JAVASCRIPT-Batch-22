// let student1 = "Ali"
// let student2 = "Aliza"
// let student3 = "Alina"
// let student4 = "Alisha"
// let student5 = "Alvina"
// let student6 = "Alia"

// let students = ["Ali", "Aliza", "Alina", "Alisha", "Alvina", "Alia"]
// console.log(students);

// console.log(students[1]);
// console.log(students.length);

// console.log(students.length-1);
// students[0] = "sara"
// console.log(students);
// students[6] = "Tabia"
// students[7] = "Rabia"
// console.log(students);
// students.pop()
// console.log(students);
// students.push("Saba")
// console.log(students);
// students.shift()
// console.log(students);
// students.unshift("sadia","Shifa")
// console.log(students);

// let fruits = ["Apple", "Banana", "Mango", "Cherry","Grapes","Kiwi"]
// console.log(fruits);
// fruits.splice(2,2) 
// // 1st value btai gi kis index se start krna hai
// //2nd value btai gi kitne element remove krne hain

// console.log(fruits);

// fruits.splice(1,2, "Orange", "Melon", "Peach" )
// console.log(fruits);

// let newArray = fruits.slice(1,4)
// console.log(newArray);
// console.log(fruits);
// fruits.slice(1,3)
// console.log(fruits);
// let updatedFruits = fruits.slice(2,5)
// console.log(updatedFruits);

//Class task
// Create a Shopping Cart using a JavaScript array
// Use slice() to create a new array containing only "Mouse", "Keyboard", and "Headphones".
// Print the new array.
// Use splice() to remove "Webcam" from the original cart.
// Use splice() to replace "Keyboard" with "Mechanical Keyboard".
// Use splice() to add "USB Hub" at the end of the cart.
// Print the final cart.
// Before running the code, predict:
// What will the slice() result be?
// What will the original cart look like after slice()?
// What will the final cart look like after all splice() operations?

let cart = ["Laptop", "Mouse", "Keyboard", "Headphones", "Webcam"];

// 1. Using slice() to get Mouse, Keyboard, Headphones
let selectedItems = cart.slice(1, 4);

console.log("Selected Items:", selectedItems);

// 2. Check original cart
console.log("Original Cart:", cart);

// 3. Remove Webcam
cart.splice(4, 1);

console.log("After removing Webcam:", cart);

// 4. Replace Keyboard with Mechanical Keyboard
cart.splice(2, 1, "Mechanical Keyboard");

console.log("After replacing Keyboard:", cart);

// 5. Add USB Hub at the end
cart.splice(cart.length, 0, "USB Hub");

console.log("Final Cart:", cart);