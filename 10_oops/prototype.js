//  prototype
let myName = "Karan      "

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength);



let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.karan = function () {
    console.log(`Karan is present in all objects.`);
}

Array.prototype.heyKaran = function() {
    console.log(`Karan says hello`);
    
}

// heroPower.karan();
// myHeroes.karan();
// myHeroes.heyKaran();
// heroPower.heyKaran()



// ----- inheritance -----
const user = {
    name: "Karan",
    email: "karan@gmail.com"
}
const teacher = {
    makeVideo: true
}

const teachingSupports = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupports
}

teacher.__proto__ = user;


// modern syntax
Object.setPrototypeOf(teachingSupports, teacher);





let anotherUsername = "Karan           ";
String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"KaranRoshan".trueLength();
"      Anmol Modi       ".trueLength();