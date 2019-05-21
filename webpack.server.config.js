const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding
const path = require("path");

module.exports = {
  entry: "./src/server.ts",
  output: {
    path: path.resolve("./dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{loader: 'ts-loader', options: {onlyCompileBundledFiles: true}}],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },  
  plugins: [
    new NodemonPlugin() // Dong
  ]
};
