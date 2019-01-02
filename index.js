require('dotenv').config();

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT, process.env.HOST, function() {
    console.log(`Server start on ${process.env.HOST} with port ${process.env.PORT}`);
});

io.on('connection', function(socket) {

    console.log("CONNECTED");

    socket.on('disconnect', function() {
        console.log("DISCONNECT");
    });

    socket.on('play', function(data) {
        console.log("Play");
        socket.broadcast.emit('play', data);
    });

    socket.on('pause', function(data) {
        console.log("Pause");
        socket.broadcast.emit('pause', data);
    });

    socket.on('stop', function(data) {
        console.log("Stop");
        socket.broadcast.emit('stop', data);
    });

});
