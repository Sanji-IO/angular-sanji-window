'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.dev');
new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  }
})
.listen(config.port, config.ip, function(err) {
  if (err) {
    throw err;
  }
  console.log('Listening at ' + config.ip + ':' + config.port);
});

