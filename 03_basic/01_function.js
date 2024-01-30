function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("j");
    console.log("e");
    console.log("e");
    console.log("v");
}

// sayMyName//is a reference
// sayMyName()//is a execution


function addTwoNumber(num1,num2) {
    console.log(num1 + num2);;
}
// addTwoNumber(3,4)

// parameter jab hmne f(x) ma num1 and num2 diya h tab yeh parameter hota h
// jab hm logo esko call krta hn toh esko argument bol ta hn 

// result ko print karne ke  tarika

// step 1

// function addTwoNumber(num1,num2) {
//     let result = num1 +num2
//     return result// return ke bd kuxh bhi print nhi hta h
// }

// const result = addTwoNumber(4,4)
// console.log("Result:",result);

// step 2nd 

function addTwoNumber(num1,num2) {
    return num1 + num2;
}

const result = addTwoNumber(4,4)
// console.log("Result:",result);
// esma diyna de wla bta yeh h ki agar result ko store krna h toh hm return show krna hi pd gya


function userLoginMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter the username");
//         return
//     }
    if (!username) {//in this line is ensure the condition is true then they go into the inner part
        console.log("Please enter the username");
        return
    }
    
    return `${username} Just logged In`
}

// console.log(userLoginMessage("Rajeev"));
console.log(userLoginMessage());//when the value in not insert the username then alway show the undefined

function userLoginMessage(username = "sam") {
    if (username === undefined) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged In`
}

