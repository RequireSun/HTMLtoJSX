/**
 * Created by RequireSun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtractor      = new ExtractTextPlugin('styleBundle.css');

// config.devServer = { hot: true, line: true, inline: true, progress: true, };

module.exports = {
    entry: {
        HTMLtoJSX: './src/index.js',
        pageBundle: './site/htmltojsx-component.jsx',
    },
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library : '[name]',
        libraryTarget: 'umd',
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [{
            test   : /\.js$/i,
            loader : 'babel-loader',
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'site'),
            ],
            query  : { presets: [ 'es2015', ], },
        }, {
            test   : /\.jsx$/i,
            loader : 'babel-loader',
            include: [ path.resolve(__dirname, 'site'), ],
            query  : { presets: [ 'react', 'es2015', ], },
        }, {
            test  : /\.css$/i,
            loader: cssExtractor.extract(['css-loader']),
        }, {
            test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
            loaders: [
                // 小于10KB的图片会自动转成dataUrl
                'url-loader?limit=10240&name=img/[hash:8].[name].[ext]',
                'image-webpack-loader?{bypassOnDebug:true,progressive:true,pngquant:{quality:"65-80",speed:4}}'
            ]
        }],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),   // 根据调用次数分配 id
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),   // 干掉所有错误输出
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'htmltojsx.html',
            template: path.resolve(__dirname, 'site/htmltojsx.html'),
            chunksSortMode: function (a, b) {  //alphabetical order
                if (a.names[0] > b.names[0]) {
                    return 1;
                }
                if (a.names[0] < b.names[0]) {
                    return -1;
                }
                return 0;
            }
        }),
        cssExtractor,
    ],
};

