console.log(addOne(4));

function addOne(num){
    return num + 1
}
// a function can be called before its declaration

// console.log(addTwo(7));
const addTwo = function(num){
    return num + 2
}// this is also known as expression
// expression can't be called before its declaration
console.log(addTwo(7));