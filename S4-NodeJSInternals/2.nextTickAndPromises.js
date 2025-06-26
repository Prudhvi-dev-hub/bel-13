// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)

// for (let i = 0; i< 5; i++ ) {
//     Promise.resolve().then(() => {
//         console.log("Promise Callback");   
//     })
//     process.nextTick(() => console.log('process.nextTick'));
// }

// console.log("Main script");


// MicroTask: Promises, process.nextTick  
// CallStack:
// T1



// I: 
//      N: 
//      P: 

// A: 


/* Output:
main script
process.nextTick
Promise Callback
Main Timer
*/

// Example 3


// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// process.nextTick(() => console.log('process.nextTick 1'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 1");   

// })


// process.nextTick(() => console.log('process.nextTick 2'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");


// Example 4
setTimeout(() => { // T1
    console.log("Timeout");
    Promise.resolve().then(() => console.log("Promise inside timeout")) // P1
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("Inner timeout"));
}) 

Promise.resolve().then(() => console.log("Outer Promise")); // P2



