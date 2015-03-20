/*http://java.dzone.com/articles/getting-started-socketio-and*/

var http = require('http'),
    dgram = require('dgram'),
    socketio = require('socket.io');
var fs = require('fs');
var app = http.createServer(),
    io = socketio.listen(app),
    socket = dgram.createSocket('udp4');

    socket.on('message', function (msg) {
        console.log('Message Received: ' + msg);
        io.sockets.emit('message', msg);
    });







socket.bind(5555);
app.listen(8000);