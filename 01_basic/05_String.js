const name = "rajeev"
const repoCount = 50
// console.log(name + repoCount + "value"); // this is outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Declaration of string 

const gameName = new String('Rajeevrr-01');
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName); // It is a example of stack 

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,5)
// console.log(newString);

// Concept of slice 
const anotherString = gameName.slice(-7,9)
// console.log(anotherString);

// When ignore the whitespaces use of trim
const newStringOne = "    rajeevrawat@google.com     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// replace 

const url = "https://rajeev.com/rajeev%100rawat"
console.log(url.replace('%100','-'));

// console.log(url.includes('Rawat'));// for the searching purpose in keyword

console.log(gameName.split(''));