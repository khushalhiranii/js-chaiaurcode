const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.name = "Khushu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "khushu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Khushal",
            lastname: "Hirani"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) // {} inside the parenthesis denotes the object in which other objects are to be copied
// in this case we've taken empty object

const obj4 = {...obj1, ...obj2, ...obj3} // this method is called spread method

console.log(obj4);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "u@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    }
]

// console.log(users[2].email);

// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "xyz"
}

const {courseInstructor: instructor} = course

console.log(instructor);










