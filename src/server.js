var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/real_data.html');
}); 

io.on('connection', function(socket) {
  console.log('connected');
  socket.on('data', (message) => {
    console.log(message);
    socket.emit('real_time', message);
  })
})

http.listen(4000, function(){
  console.log('listening on *:4000');
}); 