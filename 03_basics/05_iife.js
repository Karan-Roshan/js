// Immediately Invoked Function Expressions (IIFE)


// ----- without iife -----
function one() {
    console.log(`DB Connected`);
}
// one();


// ----- with iife -----
(function one() {
    // named IIFE
    console.log(`DB Connected`);
})();

(() => {
    console.log(`Again, DB Connected`);
})();



((name) => {
    console.log(`My name is ${name}`);
})("Karan");