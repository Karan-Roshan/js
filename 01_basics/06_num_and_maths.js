// ---------- Number ---------- 
const score = 500;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 123.98437;
// console.log(otherNumber.toPrecision(4));        // trywith chnage the number in toPrecision()


const money = 100000000;
// console.log(money.toLocaleString());            // accourding to the US standard
// console.log(money.toLocaleString('en-In'));     // accourding to the Indian standard



// ---------- Maths ----------
// console.log(Math.abs(-4985));       // convert -ve to +ve
// console.log(Math.round(94.75));
// console.log(Math.ceil(5.2));        // It rounds a number UP to the nearest integer.
// console.log(Math.floor(5.9));       // It rounds a number DOWN to the nearest integer
// console.log(Math.min(5, 4, 74, 343));
// console.log(Math.max(5,44, 754, 45));


console.log(Math.random());             // b/w 0 to 1
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);