var fs = require('fs');

var readerStream = fs.createReadStream('./tmp/input.txt');

var writerStream = fs.createWriteStream('./tmp/output.txt');

readerStream.pipe(writerStream);

console.log('Program Ended');