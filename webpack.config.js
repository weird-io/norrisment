const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  context: src,
  devtool: "inline-source-map",
  entry: {
    app: "./index.tsx",
    tachyons: "tachyons/css/tachyons.css",
    vendor: ["react", "react-dom", "react-router"]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /lib/]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-tff&name=fonts/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=fonts/[name].[ext]"
      },
      {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=img/[name].[ext]"
      },
      {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=img/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml&name=img/[name].[ext]"
      }
    ]
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist,
    port: 8080,
    noInfo: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App Index",
      template: "./index.html"
    })
  ]
};
