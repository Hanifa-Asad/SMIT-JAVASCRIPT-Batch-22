let fname = "hanifa asad";
// console.log(fname.toUpperCase());
// fname = fname.toUpperCase();
// console.log(fname);
// fname = fname.toLowerCase();
// console.log(fname);
// console.log(fname.toLowerCase());

let text = "JavaScript"
// console.log(text.length);
// console.log(fname.length);
// let fnamelength = fname.length;
// console.log(fnamelength);

// fname=fname.slice(0,6)
// console.log(fname);
// console.log(fname.slice(0,4));

// let position = fname.indexOf("d")
// console.log(position);
// let result = fname.includes("e")
// console.log(result);
// let result = fname.startsWith("hani")
// console.log(result);
// let result2 = fname.endsWith("ad")
// console.log(result2);
// let character = fname.charAt(0);
// console.log(character);
// console.log(fname.charAt(5));
// console.log(text);
// text = text.replace("S", "s")
// console.log(text);
// text = text.replace("Javascript", "python");
// console.log(text);

// let fruit = "apple apple apple";
// fruit = fruit.replace("apple","mango");
// console.log(fruit);

// let username =  prompt("Enter your username");
// username = username.toLowerCase();
// let length = username.length;
// let starts = username.startsWith("user_")
// let hasSpace = username.includes(" ");
// username = username.replace("@","a")
// let firstthree = username.slice(0,3);


// console.log("username:", username);
// console.log("length:", length);
// console.log("start with user:",starts);
// console.log("contains space:", hasSpace);
// console.log("First 3 characters:", firstthree);

// if(length<5){
//     console.log(" username is too short");
    
// }else if (hasSpace){
//     console.log("username cannot contain space");
    
// }else{
//     console.log("username is valid");
    
// }

let products = [
    "Apple","Mango","Berry", "Banana", "Grapes"
];
let search = prompt("Search For a product")
search = search.toLowerCase();
let found = false;
for(let i=0; i<products.length; i++){
    let product = products[i];
    let lowerproduct = product.toLowerCase();
    if(lowerproduct.includes(search)){
        found = true;
        let firstFive = product.slice(0,5);
        console.log("index",i);
        console.log("product", product);
        console.log("first 5 character", firstFive);
        
        console.log("product found");
        
        
    }else if(found ===false){
        console.log("product not found");
        
    }
}
