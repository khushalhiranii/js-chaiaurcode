// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB Connected`);
})();
// pehle parenthesis mai function invoke hoga
// dusra parenthesis function call ka tha
// semicolon is compulsary in the end coz it signifies termination of context

// Global scope k pollution se problem hoti hai kai baar, global scope
// k variables ya declarations k pollution ko hatane k liye humne iife 
// ka use liya

// arrow IIFE
(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED FOR ${name}`);
})('Khushal');