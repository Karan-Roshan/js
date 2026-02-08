// Stack and Heap
// 1. stack -> primitive data types
// 2. heap -> non-primitive data types

// ----- stack -----
let myEmail = "karanroshan@gmail.com"

let anotherEmail = myEmail;
// console.log(anotherEmail);

anotherEmail = "roshan@gmail.com";

console.log(myEmail)
console.log(anotherEmail)



// ----- heap -----
let userOne = {
    email: "anmol@gmail.com",
    upi: "anmol@ybl"
}

let userTwo = userOne;
userTwo.email = "anmolmodi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);