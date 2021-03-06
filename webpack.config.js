const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "bin"),
  },
  devServer: {
    contentBase: path.join(__dirname, "bin"),
    compress: true,
    port: 3000,
  },
};
