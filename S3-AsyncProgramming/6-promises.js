const asyncFunction1 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");    
            reject(1);
        }, 1000);
    })
};


const asyncFunction2 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");    
            reject(2);
        }, 1000);
    })
};


const asyncFunction3 = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");    
            reject(3);
        }, 1000);
    })
};


const main = async () => {
    console.log("Step 1");
    // Promises Hell  ==> Callback hell
    // asyncFunction1()
    //     .then(() => {
    //         asyncFunction2()
    //             .then(() => {
    //                 asyncFunction3()
    //                     .then(() => {
    //                         console.log("Finished execution");
    //                     })
    //             })
    //     })
    
    // > 6 secs
    // Async functions are dependent on each other
    // 1. Process the payment via payment gateway
    // 2. store the info in DB
    // 3. Send the order to kitchen
    // asyncFunction1()
    //     .then(asyncFunction2)
    //     .then(asyncFunction3)
    //     .then(() => console.log("All executed"))
    //     .catch((e) => console.log(e));

    
    /* Order confirms (Async code could be parallelized)
    - Sending an email
    - sending an SMS
    - sending a whatsapp message
    */

    // Promise .all
    // const response = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // console.log(response);

    // response
    //     .then(parallelRes => console.log(`Success: ${parallelRes}`))
    //     .catch(e => console.log(`error ${e}`));


    // const response = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // console.log(response);

    // response
    //     .then(parallelRes => console.log("Success: ", parallelRes))
    //     .catch(e => console.log(`error ${e}`));
    
    // throw new Error("XYZ");

    // const responseAny = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]); // fulfilled promises
    // console.log(responseAny);
    // responseAny.then(res => {
    //     console.log(res);
    // })

    const responseRace = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]); // settled promises
    console.log(responseRace);
    responseRace.then(res => {
        console.log(res);
    }).catch(e => console.log(e))
    // Pending
    // Settled 
    //      - Resolved / fulfilled
    //      - Rejected / failed        

    
    
    
};
const errorFunction = () => {
    throw new Error('Error')
}
main();

