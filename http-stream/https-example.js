var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function (response) {
  console.log('In response to handler callback');
  console.log('Response: ', response);
};

console.log('I"m about the make the request!');

https.request(options, callback).end();

console.log('Request has been made');