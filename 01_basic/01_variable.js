const accountId = 123475965
let accountEmail = "rajeevrawat244@gmail.com"
var accountPassword = "123456"
accountCity = "Srinagar Garhwal"
let accountState;

accountEmail = "hc@gmail.com"
accountPassword = "0945802"
accountCity = 'Delhi'

// accountId = 2 is not allowed it becaz container name is const 
// console.log(accountId);
console.table([accountId,accountPassword,accountCity,accountEmail,accountState])

/* *
Prefer not to use var 
becaz of issues block scope and functional scope
*/