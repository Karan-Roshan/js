// ----- Type Conversion -----

let age = "20";

// console.log(typeof age);
// console.log(typeof(age));        // as a method

let valueInNumber = Number(age);
// console.log(typeof(valueInNumber)); 


let score = "86abc";
// console.log(typeof(score));

valueInNumber = Number(score);
// console.log(typeof(valueInNumber)); 
// console.log(valueInNumber);          // NaN (not a number) - NaN is a number date type


// ----- Notes -----
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "true"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// ----- Notes -----
// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);            // 12
// console.log(1 + "2");            // 12
// console.log("1" + 2 + 2);        // 122
// console.log(1 + 2 + "2");        // 32

// console.log( (3 + 4) * 5 % 3);      // 2


// console.log(+true);      // true
// console.log(+"");        // 1
// console.log(+true);      // error
// console.log(+"");        // 0
// console.log("");


let a, b, c;
// a = b = c = 2 + 2


// increment and decrement operators
let num = 100
console.log(num);

let num1 = ++num;
console.log(num1);
let num2 = num++;
console.log(num2);

let gameCounter = 20;
console.log(gameCounter);
let gameCounter1 = --gameCounter;
console.log(gameCounter1);
let gameCounter2 = gameCounter--;
console.log(gameCounter2);