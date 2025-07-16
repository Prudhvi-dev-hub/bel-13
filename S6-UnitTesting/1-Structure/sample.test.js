// 1. Testing with null
// 2. (2,2) => 4
// 3. () => -1
// 4. ("abc", "xyz") => -1
// 5. (-5, -10) => -15

const {add} = require('./sample');

describe("Test addition of 2 numbers", () => {  // Defines a test Suite
    
    test("Should add 2 positive integers", () => {  // Defines a unit test
        const response = add(2, 2);
        
        expect(response).toBe(4);

    });

    test("Should add 2 negative integers", () => {  
        const response = add(-5, -10);
        expect(response).toBe(-15);
    })

    test("Should have 2 parameters", () => { 
        const response = add();
        expect(response).toBe(-1);
    })

    test("Should accept numbers only", () => { 
        const response = add("Jay", 5);
        expect(response).toBe(-1);
    })


})




