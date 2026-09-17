// let i = 1;
// do{
//     console.log(i);
//     i++
    
// }while(i>=5);


// let password ;
// do{
//     password = prompt("Enter your password")
// }while(password !=="1234")
//     console.log("login successsful");

 let secretNumber = Math.floor(Math.random()*10) + 1;
 let guess;
 do{
    guess = Number (prompt("Guess a number between 1 and 10"));
    if(guess<secretNumber){
        console.log("Too Low ");

        
    }else if(guess>secretNumber){
        console.log("too high");
        
    }else{
        console.log("correct");
        
    }
 }  while (guess !== secretNumber)
    
