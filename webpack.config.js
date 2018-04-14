const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  output: {
    filename: 'higlass-register.min.js',
    library: 'higlass-register',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  module: {
    rules: [
      // Run ESLint first
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      // Transpile the ESD6 files to ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new UnminifiedWebpackPlugin(),
  ],
};
