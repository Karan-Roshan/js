// ----- promise 1 -----
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise Consumed");
})


// ----- promise 2 -----
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2 is complete");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async task 2 resolved");
})


// ----- promise 3 -----
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Karan", email: "karan@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})


// ----- promise 4 -----
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Karan", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// ----- promise 5 -----
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Javascript", password: "12345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




/* 
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("Error: ", error);
        
    }
    
}

getAllUsers();
*/



fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=> {
    console.log(data); 
})
.catch((error) => console.log(error));