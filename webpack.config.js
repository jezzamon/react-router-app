var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: BUILD_DIR + '/bundle.js'
  },
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /(node_modules)/,
        loader : 'babel'
      },
	  {
		test: /\.css$/,
		loader: "style-loader!css-loader"
	  }
    ]
  }
};

module.exports = config;
