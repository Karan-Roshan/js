class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username);
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A newcourse added by ${this.username}`)
    }

}

const karan = new Teacher("Karan", "karan@gmail.com", "3232432");
karan.addCourse();
karan.logMe();

const roshan = new User("roshan");
// roshan.addCourse();
roshan.logMe();

console.log(karan == roshan);
console.log(karan == Teacher);
console.log(karan instanceof Teacher);
console.log(karan instanceof User);