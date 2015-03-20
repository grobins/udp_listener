var http = require('http'),
    dgram = require('dgram'),
    socketio = require('socket.io');
var fs = require('fs');
var app = http.createServer(),
    io = socketio.listen(app),
    socket = dgram.createSocket('udp4');
/*
var crlf = new Buffer(2);
crlf[0] = 0xD; //CR - Carriage return character
crlf[1] = 0xA; //LF - Line feed character
*/
/*
socket.on('message', function(content, rinfo) {
   console.log('got message', content.readUInt16LE(0), 'from', rinfo.address, rinfo.port);
    io.sockets.emit('udp message', content.readUInt16LE(0)); 
});
*/

    socket.on('message', function (msg) {
        console.log('Message Received: ' + msg);
        io.sockets.emit('message', msg);
    });







socket.bind(5555);
app.listen(8000);