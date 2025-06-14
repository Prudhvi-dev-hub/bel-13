console.log('Start');

setTimeout(() => {
    console.log("In Between");
}, 10)



setTimeout(() => {
    console.log("In Between 1");
}, 5)


setTimeout(() => {
    console.log("In Between 2");
}, 0)
console.log('End');

// Event Queue
// Event Loop