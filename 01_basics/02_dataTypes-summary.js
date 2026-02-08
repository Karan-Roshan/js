// Primitive And Non primitive Data Types

// Primitive (7 types): String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n




// Reference (Non primitive): Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);




// Verify the Date types
console.log("Type of score: " + (typeof(score)));
console.log("Type of scoreValue: " + (typeof(scoreValue)));
console.log("Type of isLoggedIn: " + (typeof(isLoggedIn)));
console.log("Type of outsideTemp: " + (typeof(outsideTemp)));
console.log("Type of id: " + (typeof(id)));
console.log("Type of anotherId: " + (typeof(anotherId)));
console.log("Type of bigNumber: " + (typeof(bigNumber)));
console.log("Type of heros: " + (typeof(heros)));
console.log("Type of myFunction: " + (typeof(myFunction)));