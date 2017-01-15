/**
 * Created by kelvinsun on 2016/12/6.
 */
'use strict';

const path    = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlExtractor = new ExtractTextPlugin('./[name].html');
// const lessExtractor = new ExtractTextPlugin('./style/[name].css');

const baseConfig = require('./webpack.config.base');

// const outputDir      = './dist',
//       outputFilename = 'html-to-jsx.js';

const config = Object.create(baseConfig);

config.entry = {
    index: './src/site/*',
};

config.output = {

};

config.module = {
    loaders: [{
        test   : /\.html$/i,
        loader : htmlExtractor.extract([ 'html-loader?minimize=true', ]),
        include: [ path.resolve(__dirname, 'dev'), ],
    }/*, {
       test  : /\.css$/i,
       loader: ExtractTextPlugin.extract(['css-loader']),
    }, {
       test   : /\.less$/i,
       loader : lessExtractor.extract([ 'css-loader', 'less-loader', ]),
       include: [ path.resolve(__dirname, 'dev/style'), ],
    }*/],
};

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),   // 根据调用次数分配 id
    new webpack.NoErrorsPlugin(),   // 干掉所有错误输出
    htmlExtractor,
],

module.exports = config;
