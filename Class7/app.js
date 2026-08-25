// let isRunning = true;
// for (let i =0; isRunning ; i++){
//     console.log(i);
//     if(i===4){
//         isRunning = false
//         console.log("False")
//     }
    
// }
// let students = ["Sara","Ali","Ahmed"];
// let isAvailable = true;
// for(let i=0; i,students.length && isAvailable; i++){
//     console.log(students[i]);
// break;
    
// }
// for(let i=0; i<3; i++){
//     for(let j=0; j,3; j++){
//         console.log(i);
        
//     }
// }

// let secretNumber = 7
// let attempts = []
// for(let i=1; i<=5; i++){
//     let guess = Number(prompt("Guess a number between 1 and 10"));
//     attempts.push(guess);
//     if(guess===secretNumber){
//         console.log("Correct u guessed the number");
//         console.log("Your guesses", attempts);
        
//         break;
//     }else if(guess<secretNumber){
//         console.log("too low");
        
//     }else{
//         console.log("too high");
        
//     }
//     console.log("ATTEMPTS REMAINING:", 5-i);
    
// }
// console.log("ALL GUESSES", attempts);



let A = [24, 53, 78, 91, 12];

let largest = Math.max(...A);

console.log("The largest number is", largest);

let B = [24, 53, 78, 91, 12];

let smallest = Math.min(...B);

console.log("The Smallest number is", smallest);