// There are mainly two types of datetype -:> primitive datatype 
// and non-Primitive datatype(non refrence type)

// It mean when the data can be access and data use in the memory
//  that are two type like as primitive datatype and non-Primitive datatype


// primitive that are known as (refrence value)call by value it mean when the call by value 
// of the primitive data type is in the form of copy of data not a orignal data they 
// don't show in this primitive datatype 
// It mean the change in the copy not a orignal data 

// Objects,array,function

// Dynamically-typed languages are those (like JavaScript) where the interpreter 
// assigns variables a type at runtime based on the variable's value at the time

// and static type is opposite to the Dynamically-typed languages




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack memory(primitive) and heap memory(non-primitive)


let myYoutubeName = "hiteshChoudharydotcom"

let anothername = myYoutubeName 
anothername = "Chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "useer@email.com",
    upi: "user@ybl"
}


let userTwo = userOne
userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);