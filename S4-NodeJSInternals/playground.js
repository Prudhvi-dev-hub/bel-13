setTimeout(() => {
    console.log("Main Timer")
}, 0)

// console.log("Main script");


Promise.resolve().then(() => {
    console.log("Promise Callback");   
})

// console.log("Main script");


// Queue: MT, PC
// EL