const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    // alias: {
    //   'vue': path.resolve(__dirname, 'source/vue/index.js')
    // }
    modules: [path.resolve(__dirname, 'source'), path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }}
    ]
  },
  devServer: {
    port: 8001,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}