// Object literal
const user = {
    username: "karan",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);




// ----- Constructor function -----
// const promiseOne = new Promise();
// const date = new date();


function User (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this 
}

const userOne = new User("karan", 10, true);
// const userTwo = new User("Anmol", 15, false);
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);






/*
----- Here's what happens behind the scenes when the new keyword is used: -----

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/