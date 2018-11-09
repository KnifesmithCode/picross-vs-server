const express = require('express');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

const app = express();

server.listen(PORT, () => console.log(`Listening with Socket.io and Express on ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'));

io.on('connection', function(client){
  client.on('event', function(data){console.log(data)});
  client.on('disconnect', () => console.log('User disconnected'));
});
