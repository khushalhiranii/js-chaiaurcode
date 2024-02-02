const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
//  0 in line 6 initial value of acc

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal);

const courses = [
    {
        courseName: "Java course",
        price: 2999
    },
    {
        courseName: "Python course",
        price: 1999
    },
    {
        courseName: "JavaScript course",
        price: 999
    },
    {
        courseName: "Mobile Dev course",
        price: 4999
    }
]

const cartVal = courses.reduce( (acc, item) => acc+item.price, 0)
console.log(cartVal);