const path = require("path");

module.exports = {
  mode: "development",
  // qual o arquivo principal
  entry: path.resolve(__dirname, "src", "index.jsx"),
  // qual arquivo irei gerar
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    //  array de regras
    rules: [
      {
        // para saber se é js ou não
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
