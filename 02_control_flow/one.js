const userLoggedIn = true
const userEmail = []

if(2 == "2"){
    console.log("Executed");
}

if(2 === "2"){
    console.log("executed");
    // === checks datatype this statement can't be executed
}
else{
    console.log("Datatype does not match");
}

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}