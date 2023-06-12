const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    open: true,
    static: "./dist",
  },
  output: {
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
