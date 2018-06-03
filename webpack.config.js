const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  context: src,
  devtool: 'inline-source-map',
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /lib/]
      }
    ],
  },
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devServer: {
    contentBase: dist,
    port: 8080,
    noInfo: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App Index',
      template: './index.html'
    })
  ]
};
