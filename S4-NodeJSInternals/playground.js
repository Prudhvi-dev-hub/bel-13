// setTimeout(() => {
//     console.log("setTimeout inside I/O");
// })

// function recursiveNexTick() {
//     console.log("From recursive next tick");   
//     process.nextTick(recursiveNexTick);
    
// }

// recursiveNexTick();

// Promise.resolve().then(() => {
//     console.log("Promise then");
// })


// console.log("Main Script");



// setTimeout(() => {
//     console.log("setTimeout 1");
// })

// process.nextTick(() => {
//     console.log("process.nextTick 1");
// })

// const start = Date.now();

// while(Date.now() -  start < 1000) {
//     // block event loop for 1 sec
// }

// setTimeout(() => {
//     console.log("setTimeout 2");
// })

// process.nextTick(() => {
//     console.log("process.nextTick 2");
// })

// console.log("Main Script");





// function recursive() {
//     recursive();
// }

// recursive();



setTimeout(() => console.log("A"), 0);  // T1

Promise.resolve()
.then(() => { // anonP
    console.log("B");
    return new Promise(resolve => setTimeout(() => { // anonP1, anonT2
        console.log("C");
        resolve();
    }, 0));
})
.then(() => { // anonThen
    console.log("D");
});


// IIFE
(async () => {
    console.log("E");
    await null;
    console.log("F"); // XYZ would be treated as a promise    
})();

console.log("G");
