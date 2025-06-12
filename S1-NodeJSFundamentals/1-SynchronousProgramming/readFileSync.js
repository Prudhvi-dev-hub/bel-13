const fs = require('fs');

const filePath = './lengthyFile.txt';

console.log(`[${Date.now()}] Started reading file`);

const data = fs.readFileSync(filePath);

console.log(`[${Date.now()}] Reading file complete`);

console.log(`[${Date.now()}] Starting For Loop`);

for (let i=0; i< 1000; i++) {
    //console.log(`${i} Doing more work`);
}
console.log(`[${Date.now()}] Ending For Loop`);


/* Option 1
Wait for file read and then run the loop

Option 2: This code will not work

*/

