const dotenv = require("dotenv")
dotenv.config()

const path = require("path")
const HtmWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  }
}