// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
        
//     case 2:
//         console.log("Tuesday");
//     //     // break;
//     // case 3:
//         console.log("Wednesday");
//         break;
        

//     default:
//         console.log("Invalid Day");
        
//         break;
// }

// let fruit = "grapes";
// switch (fruit) {
//     case "apple" :
//     console.log("apple selected");
//     break;

//     case "banana" :
//         console.log("banana selected");
//         break;
//     case "grapes" :
//         console.log("grapes selected");
//         break;
//     default:
//         console.log("Invalid");
               
    
// }
// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i++;
    
// }


// let i = 5;
// while (i>=1) {
//     console.log(i);
//     i--;
    
// }

// let i =2;
// while (i<=10) {
//     console.log(i);
//     i+=2;
    
// }

// let i=1;
// while(i<=10){
//     if(i % 2 === 0){
//         console.log( i ,"even number");
        
//     }else{
//         console.log(i, "odd number");
        
//     }
//     i++;
// }

// let password = ""
// while (password !=="1234"){
//     password = prompt("Enter Password")
//     }
//     console.log("login Successful");
    
// let i = 1;
//  while (i<=10) {
//      console.log(i);
//   if(i===5){
//     break;
//   }
//     i++;
//  }

//   let i=1;
//  while(i<=10){
//      i++;
//      if(i % 2 === 0){
//         continue;
//      }
//      console.log(i);
     
        
   
    
//  }


let secretNumber = Math.floor(Math.random()*10) + 1;
let guess = 0;
while(guess !== secretNumber){
    guess = Number(prompt("Guess A Number Between 1 And 10" ))
    if(guess===secretNumber){
        console.log("Correct U Guessed The Number");
        
    }else if (guess < secretNumber){
        console.log("Too Low Try Again");
        
    }else{
        console.log("Too High Try Again");
        
    }
}