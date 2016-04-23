var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var udpport = 33333;
var HOST = '192.168.2.7';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

http.listen(3000, function(){
  console.log('listening on *:3000');
});

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	server.on("message", function(message, remote){
	    console.log(remote.address + ':' + remote.port +' - ' + message);
		socket.send('message', message);
	})
});


server.bind(udpport, HOST);