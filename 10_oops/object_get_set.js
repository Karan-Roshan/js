const User = {
    _email: "karan@gmail.com",
    _password: "123ABC",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}


const karan = Object.create(User)
console.log(karan.email);