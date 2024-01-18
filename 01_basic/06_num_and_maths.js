const score = 200


const balance = new Number(100)
// console.log(balance);

// kal sir ko kuchna h ki kha pe tostring karne ke baad bhi yeh typeof
//  object kyu aa rha h jabki yeh String hone chiye tha

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toString().length);

// use fixed in ecommerce application
// console.log(balance.toFixed(2));

const othernumber = 198.894923
// console.log(othernumber.toPrecision(2));//2.0e+2 value exponential ma aayi h


const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-In'));


// +++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//use for the convert the negative value to +value
// console.log(Math.round(4.3));//use for roundoff
// console.log(Math.ceil(4.8));



// * Important

// console.log(Math.random());
// console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);//use floor to ignore the point value take the roundoff value


const max = 1
const min = 6

// *  logic of ludo
console.log(Math.floor(Math.random()*(max - min + 1))+ min);




