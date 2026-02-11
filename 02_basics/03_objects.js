// object literals

const mySym = Symbol("key1");       // declare symbol data type

const JsUser = {
    name: "Karan",
    "full Name": "Karan Roshan",
    [mySym]: "mykey1",
    age: 20,
    location: "Jharkhand",
    email: "karanroshan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);           // 1st method to print the object values
// console.log(JsUser["name"]);        // 2nd method
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);


JsUser.email = "karan@google.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);                  // Object.freeze(obj) makes an object immutable — you cannot add, delete, or modify its properties (shallow freeze).
JsUser.email = "karan@microsoft.com";
// console.log(JsUser.email);


JsUser.greeting = function() {
    console.log("Hi, Karan");
}
JsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());