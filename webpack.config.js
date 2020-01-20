const path = require('path');


module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'bable-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-env'],
          }
        }
      }
    ]
  }
}