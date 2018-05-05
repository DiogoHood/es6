const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};

if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
  config.devServe = {
    hot: true,
  };
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
}

module.exports = config;
