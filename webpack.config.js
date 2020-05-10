const path = require('path')
const src = __dirname + "/src"
const dist = __dirname + "/docs"
const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyFilePlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    contentBase: dist,
    public: process.env.URL || ''
  },
  context: src,
  entry: {
    'editor': './js/editor/index.babel.js',
    'dashboard': './js/dashboard/index.babel.js',
    'serviceWorker': './serviceWorker/js/ws.js',
  },
  output: {
    filename: './[name].bundle.js',
    sourceMapFilename: './map/[id].[chunkhash].js.map',
    chunkFilename: './chunk/[id].[chunkhash].js',
    path: dist,
    publicPath:""
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new MonacoWebpackPlugin({
    // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    // Include a subset of languages support
    // Some language extensions like typescript are so huge that may impact build performance
    // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
    // Languages are loaded on demand at runtime
    languages: ['javascript', 'css', 'html', 'typescript']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['dashboard'],
      template: './html/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['editor'],
      template: './html/editor.html',
      filename: './editor.html'
    }),
    new CopyFilePlugin(
        [
            {
                from: 'css/*.css',
                to: dist
            },
            {
                from: 'html/blank.html',
                to: dist
            },
            {
                from: 'serviceWorker/js/ws.js',
                to: dist
            },
            {
                from: 'sample/*/*.*',
                to: dist
            }
        ],
        { copyUnmodified: true }
    ),
    new WriteFilePlugin()
  ]
}