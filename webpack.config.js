const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: 'prettier-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /lib/]
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devServer: {
    contentBase: './dist',
    port: 8080,
    noInfo: true,
  },
};
