import path from 'path'
import pkg from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import CopyPlugin from 'copy-webpack-plugin'
// const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

const __dirname = path.resolve()

// module.exports = {
export default {
  node: {
    __dirname: true
  },
  // mode: 'production',
  entry: './playground/main.js',
  // entry: './demo/main.js',
  output: {
    // path: '../my-dist',
    path: path.resolve(__dirname, './my-dist'),
    filename: 'mini-vue.js',
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]' // for vscode debugger to map source files
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          // options: {
          //     presets: ['@babel/preset-env'],
          // },
        }
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new pkg.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      //   template: '../playground/index.html'
      template: path.resolve(__dirname, './playground/index.html')
    }) // generate html
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(
    //         __dirname,
    //         '../demo/firebase-validation/style.css'
    //       ),
    //       to: path.resolve(__dirname, '../dist/')
    //     }
    //   ]
    // })
  ]
}
