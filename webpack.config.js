"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 打包后生成html的插件

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  stats: "summary", // 控制控制台日志信息
  devServer: {
    host: "localhost",
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true, // 是否压缩
    port: 8000,
    hot: true, //  webpack HMR
    open: true, // 在 server 启动后打开浏览器
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  mode: "development",
};
