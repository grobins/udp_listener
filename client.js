$(function(){
    
    function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    
    var iosocket = io.connect('http://localhost:8000');

    iosocket.on('connect', function () {
 console.log('connected')

        iosocket.on('message', function(msg) {
            
            $('#message').text(ab2str(msg))


        }); 

        iosocket.on('disconnect', function() {
            $('#thelist').append('<li>Disconnected</li>');
        });

    });


});

