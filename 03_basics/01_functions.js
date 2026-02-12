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
console.log(loginUserMessage());



