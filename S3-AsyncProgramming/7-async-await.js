const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");    
            reject(1);
        }, 1000);
    })
};


const asyncFunction2 = () => {
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
            resolve(3);
        }, 1000);
    })
};

const test = async () => {
    return 5;
}


const main =  async () => {
    // console.log("Step 1");
    // let resp1;

    // try {
    //     resp1 = await asyncFunction1(); 
    // } catch (e) {
    //     console.log("Err", e);
    // }

    // console.log("Resp", resp1)
    
    // const resp1 = await asyncFunction1();  
    // const resp2 = await asyncFunction2();   
    // const resp3 = await asyncFunction3();  
    // console.log(resp1, resp2, resp3);

    const resp = test();

    console.log(resp);
}
main();



