
const sqrt = require('math-sqrt');

let x;

for (let i=0; i< 100; i++) {
    // Generates random number in 0-999
    x = Math.round(Math.random()*1000);
    console.log(sqrt(x));
}

