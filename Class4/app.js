// let age = 10 
// console.log(age>=18 && age<=30);




// let idCard = true 
// let admitCard = true
// console.log(idCard && admitCard);


// let agestu = 20 
// if(agestu>=18 && agestu<=30){
//     console.log("eligible");
    
// }


// let age = 16
// console.log(age<18 || age >60);


// let age = 56
// console.log(age<18 || age >60);


//  let idCard = false 
//  let admitCard = false
//  console.log(idCard || admitCard);

// let age = 15
// let hasCnic = true
// let hasTicket = false
// if(age>=18 || hasCnic && hasTicket) // true || true  && false , true || false
//     console.log("entry allowed");  
    

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

// if("Hello"){console.log("truthy")};

// undefined
// if(10){console.log("truthy")};

// undefined
// if(true){console.log("truthy")};


// if(false){
//     console.log(":yes");
    
// }else{
//     console.log("no");
    
// }
// console.log(0 && "javascript");


//task
// Create a JavaScript program for an Online Exam Eligibility System.
// Given Variables:
// let age = 20;
// let hasCNIC = true;
// let hasAdmitCard = false;
// let isRegistered = true;
// Your Task
// Use && (AND), || (OR), and comparison operators to decide whether the student is eligible to enter the exam.
// Rules:
// A student is allowed to enter if:
// Age is 18 or above AND registered
// OR
// has both CNIC AND Admit Card.
// Then change the values and test these cases:
// Age = 16, CNIC = true, Admit Card = true, Registered = false
// Age = 20, CNIC = false, Admit Card = false, Registered = true
// Age = 16, CNIC = true, Admit Card = false, Registered = true


// let age = 20;
// let hasCNIC = true;
// let hasAdmitCard = false;
// let isRegistered = true;

// if ((age >= 18 && isRegistered) || (hasCNIC && hasAdmitCard)) {
//     console.log("Exam Entry Allowed"); // true||false
// } else {
//     console.log("Exam Entry Not Allowed");
// }

let age = 18;
let hasCNIC = false;
if(age>=18){
    if(hasCNIC){
        console.log("entry allowed");
        
    }else{
        console.log("CNIC Required")
    }
}else{
    console.log("not alloweed")
}