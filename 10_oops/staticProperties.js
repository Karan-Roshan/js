// Static Properties
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);   
    }

    static createId() {     //  static means the function belongs to the class, not to the objects made from that class.
        return "12345";
    }
}

const karan = new User("Karan");
// console.log(karan.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const roshan = new Teacher("Roshan", "roshan@gmail.com")
console.log(roshan);
// console.log(roshan.logMe());
console.log(roshan.createId());