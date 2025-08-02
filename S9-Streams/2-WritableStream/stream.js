const fs = require('fs');

const writableStream = fs.createWriteStream('../output/writeResponse.txt');

writableStream.write("Hello World \n");

writableStream.write("This is writeable stream demo\n");

writableStream.end(() => {
    console.log("Finising writing to file");
})

writableStream.on('error', (err) => {
    console.log("Got an error", err);
})