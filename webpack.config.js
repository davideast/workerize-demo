const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            'es2015',
            {
              modules: false,
            },
          ],
        ]
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' }
    ])
  ]
};
