function setUsername(username) {
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    
    this.email = email;
    this.password = password;
}

const karan = new createUser("Karan", "karan@gmail.com", "12345");

console.log(karan);
