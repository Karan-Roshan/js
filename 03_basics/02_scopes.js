// ----- scopes -----
/*
let a=10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
*/


// -- In scope --
if(true) {
    let a=10;
    const b = 20;
    var c = 30;
}
// console.log(a);     // show an error: a is not defined
// console.log(b);     // show an error: a is not defined
console.log(c);     // This show the vlaue of c i.e. 30
