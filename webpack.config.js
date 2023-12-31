const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].bundle.js'
    },

    plugins: [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({title: 'My App', 
        template: path.resolve(__dirname, "./src/template.html"),
        filename: "index.html",
        inject: "body",
        }),
        new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: "handlebars-loader"
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto',
      },
    ],
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 1313,
  },
};