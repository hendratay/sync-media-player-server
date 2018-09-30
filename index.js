const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(PORT, HOST);

app.get('/', function(req, res) {
    res.send("Hello World");
});

io.on('connection', function(socket) {

    console.log("CONNECTED");

    socket.on('disconnect', function() {
        console.log("DISCONNECT");
    });

});
