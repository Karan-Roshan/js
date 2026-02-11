// const tinderUser = new Object();    // singleton object
const tinderUser = {};              // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Karan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "anmol@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Anmol",
            lastName: "Modi"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }      // wrong method        
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);  


// when users comes from database - it comes in "array of objects"
const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
];

// console.log(users[1].email);



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));       // the output comes in the arrays format, means typeof(Object.keys(tinderUser)) = array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('email'));