const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js', './src/sass/main.scss'],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/],
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },
};
