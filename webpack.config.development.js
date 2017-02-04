/**
 * Created by kelvinsun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtractor      = new ExtractTextPlugin('codemirror.css');

const config = Object.create(baseConfig);

config.output = Object.assign(config.output, {
    path    : path.resolve(__dirname, 'dist'),
    filename: '[name].js',
});
config.devtool = '#cheap-module-source-map';
config.devServer = { hot: true, line: true, inline: true, progress: true, };
config.module.loaders.push({
    test  : /\.css$/i,
    loader: cssExtractor.extract(['css-loader']),
});
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
        IN_BROWSER: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'htmltojsx.html',
        template: path.resolve(__dirname, 'site/htmltojsx.html'),
    }),
    cssExtractor
);

module.exports = config;
