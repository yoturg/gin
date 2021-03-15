const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/index.js'),

  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'js/[name].bundle.[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/index.tpl.html'),
    }),
  ],
}
