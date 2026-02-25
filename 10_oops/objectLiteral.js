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