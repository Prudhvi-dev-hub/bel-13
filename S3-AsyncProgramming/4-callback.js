// Calee function
// DB call: Don't own
const asyncFunction = (xyz) => {
    setTimeout(() => {
        console.log('In between');
        xyz(); // Notifying the caler function that my execution is complete
        xyz();
        xyz();

    }, 1000)
}

// Caler function
// Code that you own
const main = async () => {
    console.log('Start');
    asyncFunction(() => {
        console.log('End');
    });
}


main();


// Callback:
/*
    Where is the callback defined? Caller function
    Where is the callback executed? Callee function
    --> Promises
    --> Async Await 
    --> Event Emitter
*/


