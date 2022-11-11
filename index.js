
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

async function connect (socket, timeout = 10000) {
  const isOpened = () => (socket.readyState === WebSocket.OPEN)

  if (socket.readyState !== WebSocket.CONNECTING) {
    return isOpened()
  }
  else {
    const intrasleep = 100
    const ttl = timeout / intrasleep // time to loop
    let loop = 0
    while (socket.readyState === WebSocket.CONNECTING && loop < ttl) {
      await new Promise(resolve => setTimeout(resolve, intrasleep))
      loop++
    }
    return isOpened()
  }
}

async function main () {
  console.log('Connecting: ' + connection);

  let webSocket = new WebSocket(connection);

  if (await connect(webSocket)) {
    console.log('Connected');

    webSocket.onmessage = function(e) { console.log(e)}

    webSocket.send("test");
  }
  else {
    console.log('Failed to connect');
  }
}

main();
