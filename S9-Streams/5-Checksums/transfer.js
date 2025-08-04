const fs = require('fs');
const crypto = require('crypto');
const { Transform, pipeline } = require('stream');
const path = require('path');



const readStream = fs.createReadStream('../input/leviathan.txt'); // Readable stream
const writeStream = fs.createWriteStream('../output/leviathanDownloaded.txt'); // Writable stream


class ChecksumStream extends Transform {
  constructor(algorithm = 'sha256') {
    super();
    this.hash = crypto.createHash(algorithm);
  }

  _transform(chunk, encoding, callback) {
    this.hash.update(chunk); // Update the hash with the current chunk
    this.push(chunk); // Pass the chunk to the next stream in the pipeline
    callback();
  }

  _flush(callback) {
    this.emit('checksum', this.hash.digest('hex')); // Emit the final checksum when the stream ends
    callback();
  }
}

const checksumStream = new ChecksumStream();

checksumStream.on('checksum', (transferedChecksum) => {
  const originalChecksum = fs.readFileSync('../input/leviathan.txt.sha256').toString();
  console.log(`Original checksum: ${originalChecksum} \nTransfered File checksum : ${transferedChecksum} \nAre they equal? ${originalChecksum === transferedChecksum}`);
});

pipeline(
  readStream,
  checksumStream, // Compute checksum
  writeStream, // Write to destination
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('File transfer complete and checksum computed.');
    }
  }
);


