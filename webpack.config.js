const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash].js",
  },
  // 模式
  mode: "development",
  // loader 讓 webpack 看得懂非原生JS的東西，例如css style
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.gif/,
        use: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.[hash].css",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "./static", to: "./static" }],
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
    new CompressionPlugin(),
  ],
  devtool: "source-map",
};
