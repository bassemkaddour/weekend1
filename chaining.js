var fs = require('fs');
var zlib = require('zlib');

// fs.createReadStream('./tmp/input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('./tmp/input.txt.gz'));

// console.log('Flie compressed');

fs.createReadStream('./tmp/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./tmp/input.txt'));

console.log('File decompressed');