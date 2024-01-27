// singleton is use in object constructor

// object create as a two type :> 1>Object literal  2>Object constructor

// agar hm esma symbol ka use kar toh 
const mySym  = Symbol("key1")

// object literal
const JsUser = {
    name : "Rajeev",
    "Full name" : "Rajeev Rawat",
    [mySym] : "RRkey1",
    age  :  "21",
    city :  "Srinagar Garhwal",
    email : "rajeevrawat257facebook.com",
    isLoggedIn : false,
    lastDayLogin : ["Monday","Tuesday"]
}

// console.log(JsUser.age);
// console.log(JsUser["Full name"]);//agar kisko access karna h toh hme string wli value 
// ko access karna h toh esko hm square bracs se hi access kr skte hn thik h bhai

// Interview Qus:> create the a symbol and it act like as a key then print the symbol

// console.log(JsUser.mySym);// esma maine yeh declare toh kr diya h but esko access toh kr pa rha hu ma but
// yeh symbol ki trah se use nhi ho rha h thik h na usko access asie krta hn
// console.log(JsUser); // yeh toh symbol ki trah treat hone lga gya h



// JsUser.email = "rajeevrawat@chatgpt.com"
// Object.freeze
// JsUser.email = "rajeevrawat@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
  
// console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
  
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());