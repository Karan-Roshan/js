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