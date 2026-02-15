// ----- Maps -----

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")          

// console.log(map);       // it store only unique values & stores in the same order as we stored in it

for (const key of map) {
    console.log(key);
}


for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    console.log(key, ':-', value);
}


/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);      // Error: myObject is not iterable  
}
*/