// Task Queue
// 1. Timer Phase: any callback emerging from setTimeout, setInterval  // T1
// 2. Pending Callback phase: Low level system errors DNS, TCP
// 3. Idle / Prepare Phase: Internal phase, used to maintain event loop and phases. Generally it is not used by developers 
// 4. Poll Phase: All new I/O events, DB Calls, FS calls, Socket calls
// 5. Check Phase: setImediate callbacks 
// 6. Close phase: Cleanup phase    Clc
// close socket, cleanup any residual database 


// const net = require('net');

// console.log('Start');

// const server = net.createServer(() => {});

// server.listen(0, () => {
//     const port = server.address().port;
//     const socket = net.createConnection(port);
//     socket.on('connect', () => {  // Phase 4 ConC
//         setTimeout(() => {   // T1
//             console.log('Log from timer');
//         }, 0);

//         setImmediate(() => {
//             console.log("from sI");
//         })

    
//         socket.destroy();
//         server.close();     // Phase 6      
//     });

//     socket.on('close', () => {  // Close phase // ClC
//          console.log('Log from close callback'); 
//     }); 
// });


// setImmediate(() => {
//     console.log("from sI");
// })

// setTimeout(() => {
//     console.log("from st");
// }, 0)



// process.nextTick(() => {
//         console.log('process.nextTick 1')
// });

// Example 3 & 4:
const fs = require('fs');

fs.readFile('./test.text', () => {  // IO Phase ==> Phase 4
    setTimeout(() => {
        console.log("SetTimeOut inside I/O");   // Phase 1 
    });

    setImmediate(() => {
        console.log("setImmediate inside I/O"); // Phase 5
    })

    Promise.resolve().then(() => {
        console.log("promise then 1");
    })

    process.nextTick(() => console.log("next Tick"));
});
