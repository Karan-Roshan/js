/*
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    };

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const karan = new User("karan", "karan@gmail.com", "12345")

console.log(karan.encryptPassword());
console.log(karan.changeUsername());
*/



// behind the scene
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const roshan = new user("roshan", "roshan@gmail.com", "1234524442")

console.log(roshan.encryptPassword());
console.log(roshan.changeUsername());