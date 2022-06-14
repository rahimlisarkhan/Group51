const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "ruslan.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    static: "./build",
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Output Ruslan Html",
  //   }),
  // ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
