// array


const myArr = [0,1,2,3,4,5,true,"rajeev"]
const myHeros = ["Shaktman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

myArr2.push(6)// it can added the value of array
myArr2.pop()//it can remove the value of array
// console.log(myArr2);

// myArr2.unshift(9)//it can add the value in front of the array
// myArr2.shift(9)//it can remove from the front of the array
// console.log(myArr2);

// console.log(myArr2.includes(9));//it can check the number is existing in the array or not 
// console.log(myArr2.indexOf(4));// it can find the index of the value in array

const newArr = myArr2.join()//it can bind the value and converted into the string

// console.log(myArr2);
// console.log(newArr);

// slice and splice

console.log(myArr2);
console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3)