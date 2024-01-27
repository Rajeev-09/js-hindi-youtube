// it is a example of singleton literals in the create an Object

// object constuctor in singleton literals


// const tinderUser = new Object()//it is a singleton object
// const tinderUser = {}//it is a non singleton object method

const tinderUser = {}
tinderUser.id = "2123abc"
tinderUser.name = "ayush"
tinderUser.isLoggedIn = "true"

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Rajeev",
            secondname: "Rawat"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}
const obj4 = { 5:"c", 6:"d"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

//mostly use
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


// when the value is come from the DB
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "c@gmail.com"
    } ,
    {
        id: 3,
        email: "d@gmail.com"
    } 
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring in object

const course = {
    Coursename: "Js in Hindi",
    price: "999",
    CourseInstructor: "hiteshchoudhary"
}

// course.CourseInstructor

const {CourseInstructor: instructor} = course

// console.log(CourseInstructor);
console.log(instructor);