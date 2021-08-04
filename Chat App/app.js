const express = require('express');
const app = express();
const http = require('http').Server(app);
const routes = require('./routes/route');
const socket = require('socket.io')

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});

const io = socket(server);
require('./utils/socket')(io);