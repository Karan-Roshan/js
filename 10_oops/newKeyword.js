function multipleBy5 (num) {
    return num*5;
}
// console.log(multipleBy5(5));

multipleBy5.power = 2;
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



// New Keyword
function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

const karan = new createUser("Karan", 95);
const roshan = new createUser("Rosan", 65);

karan.printMe();


