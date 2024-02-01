
// {} :> esko hi scope bolte hn

// var c = 300 // it is not use beacz they scope of the var is use when they call the f(x) they can print 
// while the other value like as (let and const) are not use in the scope of the f(x)

let a = 300
if(true){
    let a = 10 
    const b = 20
    var c = 30
    // console.log("Inner:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);




function one(params) {
    const username = "Rajeev"
    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const username = "Rajeev"
    if(username === "Rajeev"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// summary yeh h ki bade bhai chotyo se nhi mng skte while chotyo bhai bade bhai se mng skte hn



// ++++++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++++

addone(5)
function addone(num1) {
    return num1 + 1
}

const addtwo = function(num){ //expression bhi bol diya jta ha ena function ko
    return num + 2
}
addtwo(5)






