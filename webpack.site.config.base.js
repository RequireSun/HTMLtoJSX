/**
 * Created by kelvinsun on 2016/12/6.
 */
'use strict';

const path    = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const htmlExtractor = new ExtractTextPlugin('./[name].html');
// const lessExtractor = new ExtractTextPlugin('./style/[name].css');

module.exports = {
    entry: {
        'htmltojsx-component': './site/htmltojsx-component.jsx'
    },
    output: {
        path    : './dist',
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test   : /\.js$/i,
            loader : 'babel-loader',
            include: [ path.resolve(__dirname, 'site'), ],
            query  : { presets: [ 'es2015', ], },
        }, {
            test   : /\.jsx$/i,
            loader : 'babel-loader',
            include: [ path.resolve(__dirname, 'site'), ],
            query  : { presets: [ 'react', 'es2015', ], },
        }/*, {
            test   : /\.html$/i,
            loader : htmlExtractor.extract([ 'html-loader?minimize=true', ]),
            include: [ path.resolve(__dirname, 'site'), ],
        }, {
           test  : /\.css$/i,
           loader: ExtractTextPlugin.extract(['css-loader']),
        }, {
           test   : /\.less$/i,
           loader : lessExtractor.extract([ 'css-loader', 'less-loader', ]),
           include: [ path.resolve(__dirname, 'dev/style'), ],
        }*/],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),   // 根据调用次数分配 id
        new webpack.NoErrorsPlugin(),   // 干掉所有错误输出
        // htmlExtractor,
        new HtmlWebpackPlugin({
            filename: 'htmltojsx.html',
            template: path.resolve(__dirname, 'site/htmltojsx.html'),
        })
    ],
};
