const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: path.resolve(__dirname, "..", "./src/components/index.js"),
  externals: {
    'react': 'commonjs react' 
  },

  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "hfncomponets.bundle.js",
    library: 'hfncomponents',
    libraryTarget: 'umd',
    clean: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("hfn"),
    }),
  ],
};
