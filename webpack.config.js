var path = require("path")
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/js/index.js',
    post: './src/js/post.js',
    news: './src/js/news.js',
    contact:'./src/js/contact.js',
    team:'./src/js/team.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: ""
  },
  devServer: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          },
        }, ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/post.html',
      filename: 'post.html',
      chunks: ['post']
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/news.html',
      filename: 'news.html',
      chunks: ['news']
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/contact.html',
      filename: 'contact.html',
      chunks: ['contact']
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/team.html',
      filename: 'team.html',
      chunks: ['team']
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CleanWebpackPlugin(),
  ]
}