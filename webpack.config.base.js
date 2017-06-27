/**
 * Created by kelvinsun on 2016/12/6.
 */
'use strict';

const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        HTMLtoJSX: './src/index.js',
    },
    output: {
        library: '[name]',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [{
          test   : /\.js$/i,
          loader : 'babel-loader',
          include: [
              path.resolve(__dirname, 'src'),
          ],
          query  : { presets: [ 'es2015', ], },
        }],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),   // 根据调用次数分配 id
        new webpack.NoEmitOnErrorsPlugin(),   // 干掉所有错误输出
    ],
};

