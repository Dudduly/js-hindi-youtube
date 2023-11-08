const accountId = 197371
let accountEmail = "falguni.mishra@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubneshwar"
let accountState;

// accountId = 2 //not allowed
accountEmail="falguni@gmail.com"
accountPassword="212121"
accountCity="Pune"

console.log(accountId); 

/*
prefer not to use var because of issue in 
block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])