// ----- this -----

const user = {
    username: "Karan",
    price: 999,

    messageMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}
// user.messageMessage;
// user.messageMessage();
// user.username = "Anmol";
// user.messageMessage();

// console.log(this);      // {}


function one() {
    const username = "Karan";
    // console.log(this);
    console.log(this.username);     // undefined  
}
// one();

const two = function () {
    const username = "Karan";
    // console.log(this);
    console.log(this.username);     // undefined  
}
// two();




// ---------- Arrow function ----------
const three = () => {
    const username = "Roshan";
    console.log(this);
    console.log(this.username);
    console.log(username);
}
// three();


const addTwo = (a, b) => {
    return a + b;
}
// console.log(addTwo(4,9));


// const subTwo = (a,b) => a-b;
const subTwo = (a, b) => (a - b);
// console.log(subTwo(8, 9));


const obj = () => ({ username: "hitesh" })
// console.log(obj());