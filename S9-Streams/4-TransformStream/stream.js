const { Transform } = require('stream');
const fs = require('fs');

const readableStream = fs.createReadStream('../input/preTranformInput.txt', { encoding: 'utf8', highWaterMark: 5*1024 });  //5KB / chunk
const writableStream = fs.createWriteStream('../output/tranformedOutput.txt');                      // 1KB /chunk

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
}
});


readableStream.on('data', (chunk) => {
    const transformedChunk = chunk.toString().toUpperCase()
    writableStream.write(transformedChunk);
});




readableStream.pipe(upperCaseTransform).pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});