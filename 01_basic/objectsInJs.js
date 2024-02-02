// singleton 

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Khushal",
    "full name": "Khushal Hirani",// this entry can only be acesed by using attribute in square brackets
    [mySym]: "mykey1",// we've to declare symblsin square brackets
    age: 21,
    location: "Kota",
    email: "khushal.hirani4@gmail.com"
}

console.log(Jsuser.name);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);//this will refer symbol otherwise it will refer string

Jsuser.email = "khushal@rediff.com"
// Object.freeze(Jsuser)
// console.log(Jsuser);
// Jsuser.email = "khushal@chatbot.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());