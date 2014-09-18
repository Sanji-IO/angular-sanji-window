'use strict';

var express = require('express'),
    path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(require('connect-livereload')({
  src: "' + (location.protocol || 'http:') + '//' + (location.hostname || 'localhost') + ':3000/browser-sync-client.1.3.6.js?v=1"
}));

// Disable caching of scripts for easier testing
app.use(function noCache(req, res, next) {
  if (req.url.indexOf('/scripts/') === 0) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
  }
  next();
});

app.use(express.static(path.resolve(__dirname, 'demo')));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/demo/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// Start server
server.listen(4000, function () {
  console.log('Express server start: http://localhost:4000');
});
