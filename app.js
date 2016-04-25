var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var udpport = 33333;
var HOST = '192.168.1.186';
var dgram = require('dgram');
var udpsocket = dgram.createSocket('udp4');

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('http socket connected');
});

udpsocket.on("message", function(message, remote){
    console.log(remote.address + ':' + remote.port +' - ' + message);
	io.send(message);
})


udpsocket.on('listening', function () {
    var address = udpsocket.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);

});

udpsocket.bind(udpport, HOST);