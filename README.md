
# WebSocket Tester

Testing the connection to your WebSocket server or the status of the WebSocket server.

Sometimes we have our WebSocket server running behide nginx, express, etc., we are not sure whether we can access it with the configuration.

This is the tool for this purpose.

## Installation
```bash 
git clone https://github.com/e-tang/websocket-tester
cd websocket-tester
npm install

```

## Usage

```javascript

node . [--host host] [--port port] [--protocol https|http]

--host, the host where the WebSocket is running on
--port, the port
--protocol, the protocol / schema

```