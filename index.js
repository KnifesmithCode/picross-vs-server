const express = require('express');
const app = require('express')();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening with Socket.io and Express on ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'));

io.on('connection', function(socket){
  console.log('User connected');
  socket.on('event', function(data){console.log('Event: ' + data)});
  socket.on('disconnect', () => console.log('User disconnected'));
});
