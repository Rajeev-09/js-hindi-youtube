// singleton is use in object constructor

// object create as a two type :> 1>Object literal  2>Object constructor

// agar hm esma symbol ka use kar toh 
const mySym  = Symbol("key1")

// object literal
const JsUser = {
    name : "Rajeev",
    "Full name" : "Rajeev Rawat",
    mySym : "RRkey1",
    age  :  "21",
    city :  "Srinagar Garhwal",
    email : "rajeevrawat257facebook.com",
    isLoggedIn : false,
    lastDayLogin : ["Monday","Tuesday"]
}

console.log(JsUser.age);
console.log(JsUser["Full name"]);//agar kisko access karna h toh hme string wli value 
// ko access karna h toh esko hm square bracs se hi access kr skte hn thik h bhai

// Interview Qus:> create the a symbol and it act like as a key then print the symbol