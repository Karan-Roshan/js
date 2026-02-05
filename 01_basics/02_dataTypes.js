"use strict"        // treat all JS code as a newer version

// alert(3+3)       // we are using nodejs, not browser



// ----- JavaScript Data Types -----
// 1. Number
let age = 21;
let price = 99.99;

// 2. String
let name = "Karan";

// 3. Boolean
let isLoggedIn = true;

// 4. Undefined
let x;

// 5. Null - standalone value
let data = null;

// 6. BigInt
let bigNum = 12345678901234567890n;

// 7. Symbol - unique
let id = Symbol("id");

// 8. Object (Non-Primitive)
let user = {
  name: "Karan",
  age: 21
};

// Array (Object type)
let numbers = [1, 2, 3, 4];

// Function (Object type)
function greet() {
  console.log("Hello JavaScript");
}

// Type checking
console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof x);
console.log(typeof data);   // object (JS bug)
console.log(typeof bigNum);
console.log(typeof id);
console.log(typeof user);
console.log(typeof numbers);
console.log(typeof greet);