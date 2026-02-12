// ----- Fumctions -----
function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
}

// sayMyName();


function sum(a, b) {
    console.log(a+b);
}
// sum(5,2);
// sum(5,"2");
// const result = sum(5,2);
// console.log("Result:" , result);        // output: undefined



function sumOfNumber(a, b) {
    return a+b;
}
const output = sumOfNumber(5,2);
// console.log(output);



// function loginUserMessage(username="Anmol") {
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("Karan"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());        // output: undefined just logged in.


// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("Please enter username");
//         return;
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage());


// function loginUserMessage(username) {
//     if(!username) {
//         console.log("Please enter username");
//         return;
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage());


function loginUserMessage(username = "Anmol") {
    if(!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage());



// ----- Rest Operator (...) -----
// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(100, 200, 39, 928, 98894, 383289));


function calculateCartPrice(val1, val2, ...num1) {
     return num1;
}
// console.log(calculateCartPrice(100, 200, 39, 928, 98894, 383289));



const user = {
    username: "Karan",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}.`);  
}
// handleObject(user);
handleObject({
    username: "Roshan",
    prices: 1999
});



const myNewArray = [200, 400, 600, 800, 1000];

function returnSecondElement(arr) {
    console.log(arr[2]);
}
returnSecondElement(myNewArray);
returnSecondElement([9045049, 340432, 342355, 78979, 373289]);
