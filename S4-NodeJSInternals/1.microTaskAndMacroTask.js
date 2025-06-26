// Example 1

// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)

// console.log("Main script 1");


// Promise.resolve().then(() => { //P1
//     console.log("Promise Callback");   
// })

// console.log("Main script 2");


// // Queue: 
// //      mIcro: 
// //      mAcro: 

// // Callstack 
// T1



// // Output
// MS 1
// MS 2
// PC
// Main Timer

// Example 2
// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`Main Timer ${i}`)
//     }, 0)


//     Promise.resolve().then(() => {
//         console.log(`Promise Callback ${i}`);   
//     });
// }

// CallStack


// A: T1, T2 ... T9
// I: P1, P2 ... P9

/* Output





*/


// Example 3
setTimeout(() => {
    console.log("Main Timer")
}, 0)


Promise.resolve().then(() => {  // P1
    console.log("Promise Callback");   
    Promise.resolve().then(() => { // P2
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");


// I: 
// A: 

// CallStack: 
// T1

/* Output
Main Script
Promise Callback
Resolved inner promise
Main Timer



*/