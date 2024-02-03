const user = {
    username: "Rajeev",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "rajeev"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "rajeev"
//     console.log(this.username);
// }
// chai()

// Explicity return example

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicity return example

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// other example like

const addTwo = (num1, num2) => ({name: "rajeev"})


console.log(addTwo(4,92));







