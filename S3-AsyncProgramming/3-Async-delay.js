console.log('Start');

const start = Date.now();
setTimeout(() => { //T1
    console.log("Start: ", start, " end: ", Date.now());
    console.log("In Between");

}, 1000)

console.log('End');

for (let i=0; i< 1000000; i++) {
    console.log("Hello world", i);
}




// Task Queue: T1
// Event Loop
// - See if anything is there in the task queue
// - No: Do nothing
// - Yes: Checks if main thread is idle
//          - No: Wait for the thread to become available
//          - Yes: Schedule the task on main thread