
var Params = require('node-programmer/params');
var WebSocket = require('ws');

var params = new Params({
    host: 'localhost',
    protocol: 'ws',
    path: '' // some path like "/ws"
  });
  
var opts = params.getOpts();
var optCount = params.getOptCount();

let connection = opts.protocol + '://' + opts.host + opts.path;

console.log('Connection:' + connection);

let webSocket = new WebSocket(connection);

webSocket.onmessage = function(e) { console.log(e)}

webSocket.send("test");

