const user = {
    username: "Khushal",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`Hey ${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Khushu"
// user.welcomeMessage()
// console.log(this);

// const chai = function(){
//     console.log(this);
// }

// const chai = function(){
//     username: "Khushal"
//     console.log(this);
// }

// const chai = function(){
//     username: "Khushal"
//     console.log(this.username);
// }
// chai()

// arrow functions

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // curly braces use karoge toh  return keyword likhna padega

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1+num2)
console.log(addTwo(3,4));

const user2 = () => ({username: "Khushal"})
console.log(user2);