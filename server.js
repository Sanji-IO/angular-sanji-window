'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');
var watchr = require('watchr');
var _ = require('lodash');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bundleFolders = fs.readdirSync('./demo/bundle');
var BUNDLE_PATH = 'demo/bundle';

// For live reload
app.use(require('connect-livereload')({
  src: "' + (location.protocol || 'http:') + '//' + (location.hostname || 'localhost') + ':3000/browser-sync/browser-sync-client.1.9.0.js?v=1"
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

// Set static folder
app.use(express.static(path.resolve(__dirname, 'demo')));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/demo/index.html');
});
app.get('/api/bundles', function (req, res) {
  var bundles = [];

  _.forEach(bundleFolders, function(folder) {
    var bundle = createBundleObj(folder);

    if (!_.isEmpty(bundle.url)) {
      bundles.push(bundle);
    }
  });

  return res.json(bundles);
});

// Watch bundle folder and server push to notify client
watchr.watch({
  path: BUNDLE_PATH,
  listener: function(eventName, fullPath) {
    if ('create' === eventName) {
      var tmp = fs.readdirSync(BUNDLE_PATH);
      var newFolders = _.difference(tmp, bundleFolders);
      var newBundles = [];

      _.forEach(newFolders, function(folder) {
        var bundle = createBundleObj(folder);

        if (!_.isEmpty(bundle.url)) {
          bundleFolders.push(folder);
          newBundles.push(bundle);
        }
      });

      if (0 < newBundles.length) {
        console.log('emit: ', newBundles);
        io.sockets.emit('sanji.bundle.new', newBundles);
      }
    }

    if ('delete' === eventName) {
      _.forEach(bundleFolders, function(folderName, index) {
        if (-1 !== fullPath.indexOf(folderName)) {
          bundleFolders.splice(index, 1);
          console.log('remove: ', bundleFolders);
          io.sockets.emit('sanji.bundle.delete', {title: folderName});
          return false;
        }
      });
    }
  }
});

// Start server
server.listen(4000, function () {
  console.log('Express server start: http://localhost:4000');
});

function createBundleObj(folder) {
  var files = fs.readdirSync(BUNDLE_PATH + '/' + folder);
  var bundle = {};

  if (0 === files.length) {
    return true;
  }

  bundle.title = folder;
  bundle.url = {};

  if (-1 !== files.indexOf('main.html')) {
    bundle.url.template = 'bundle/' + folder + '/main.html';
  }
  if (-1 !== files.indexOf(folder + '.ctrl.js')) {
    bundle.url.controller = 'bundle/' + folder + '/' + folder + '.ctrl.js';
  }
  if (-1 !== files.indexOf(folder + '.srv.js')) {
    bundle.url.service = 'bundle/' + folder + '/' + folder + '.srv.js';
  }

  return bundle;
}
