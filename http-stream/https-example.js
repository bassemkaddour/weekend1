var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function () {
  console.log('In response to handler callback')
};

console.log('I"m about the make the request!');

https.request(options, callback).end();

console.log('Request has been made');