// ----- Reduce -----
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currVal) {
    // console.log(`acc: ${acc} and currval: ${currVal}`);
    return acc+currVal;
}, 0);
// console.log(myTotal)


const myTotals = myNums.reduce((acc, currVal)=> (acc+currVal), 0);
// console.log(myTotals)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc+item.price, 0);
console.log(totalPrice)