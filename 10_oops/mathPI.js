// Math PI

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);


const name = {
    name: "Karan Roshan",
    price: 50,
    isAvailable: true,

    IDcards: function () {
        console.log("I have a PAN Card");
    }
}

console.log(name);
// console.log(Object.getOwnPropertyDescriptor(name));
console.log(Object.getOwnPropertyDescriptor(name, "name"));


// Object.defineProperty(name, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(name, "name"));


for (let [key, value] of Object.entries(name)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}