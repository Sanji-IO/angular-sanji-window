const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.dev');
new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  stats: {
    colors: true
  }
})
.listen(8080, 'localhost', function(err) {
  if (err) {
    throw err;
  }
  console.log('Listening at localhost:8080');
});

