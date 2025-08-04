const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf-8', highWaterMark: 1024});


readableStream.on('data', (chunk) => {
    console.log("$$$$$$$$$$$$$$$ Received Chunk $$$$$$$$$$$$$$$$$$$$$$$");
})

readableStream.on('end', () => {
    console.log("################### File Reading complete #########################");
})


readableStream.on('error', (err) => {
    console.log("Got an error", err);
})