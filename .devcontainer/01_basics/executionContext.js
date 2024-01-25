// types
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// Global Execution Context [{}] Steps
// -> Memory Creation phase
// -> Execution Phase

let val1 = 10
let val2 = 3
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(4,6)

// 1. gloabal Execution -> this
// 2. Memory Phase
// --val1->undefined
// --val2->undefined
// --addNum->definition
// --result1->undefined
// --result2->undefined
// 
// 3. Execution Phase
// --val1->10
// --val2->3
// --line 17 result1 = addNum ----> this will result in execution of above 
//                                  3 points again in a new global environment
//                                  [ new variable environmnt
//                                              +
//                                      Execution Thread]
// 
