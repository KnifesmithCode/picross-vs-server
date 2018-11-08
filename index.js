const server = require('http').createServer();
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

io.on('connection', function(client){
  client.on('event', function(data){console.log(data)});
  client.on('disconnect', function(){console.log('User disconnected'});
});

server.listen(PORT, () => console.log(`Listening with Socket.io on ${PORT}`));
