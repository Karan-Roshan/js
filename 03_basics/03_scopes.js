// ----- nested scope -----

function one() {
    const username = "Karan";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);    // Error: website is not defined
    
    two();
}

// one();



if(true) {
    const username = "Roshan";
    if(true) {
        const website = " LinkedIn";
        // console.log(username + website);
    }
    // console.log(website);   // Error: website is not defined 
}
// console.log(username);      // Error: website is not defined




// ++++++++++++++++++ interesting ++++++++++++++++++
function addOne(num) {
    return num+1;
}
console.log(addOne(5));


const addTwo = function(num) {
    return num+2;
}
console.log(addTwo(5));