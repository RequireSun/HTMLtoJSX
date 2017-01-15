/**
 * Created by kelvinsun on 2016/12/6.
 */
'use strict';

const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry : {
        index: './src/htmltojsx.js',
    },
    output: {
        library: 'html-to-jsx',
    },
    module: {
        loaders: [{
          test   : /\.js$/i,
          loader : 'babel-loader',
          include: [ path.resolve(__dirname, 'dev/script'), ],
          query  : { presets: [ 'es2015', ], },
        },],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),   // 根据调用次数分配 id
        new webpack.NoErrorsPlugin(),   // 干掉所有错误输出
    ],
};


// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const htmlExtractor = new ExtractTextPlugin('./[name].html');
// const lessExtractor = new ExtractTextPlugin('./style/[name].css');

// const outputDir      = './dist',
//       outputFilename = 'html-to-jsx.js';

// path      : outputDir,
// publicPath: 'http://127.0.0.1:8008/dist/',
// filename  : outputFilename,

/* {
 test  : /\.vue$/i,
 loader: 'vue,'
 }, {
 test  : /\.css$/i,
 loader: ExtractTextPlugin.extract(['css-loader']),
 }, {
 test   : /\.less$/i,
 loader : lessExtractor.extract([ 'css-loader', 'less-loader', ]),
 include: [ path.resolve(__dirname, 'dev/style'), ],
 }, {
 test   : /\.html$/i,
 loader : htmlExtractor.extract([ 'html-loader?minimize=true', ]),
 include: [ path.resolve(__dirname, 'dev'), ],
 }*/

// new webpack.HotModuleReplacementPlugin(),
// lessExtractor,
// htmlExtractor,
