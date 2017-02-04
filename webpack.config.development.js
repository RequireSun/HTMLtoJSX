/**
 * Created by kelvinsun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtractor      = new ExtractTextPlugin('styleBundle.css');

const config = Object.create(baseConfig);

config.entry.pageBundle = './site/htmltojsx-component.jsx';
config.output = Object.assign(config.output, {
    path    : path.resolve(__dirname, 'dist'),
    filename: '[name].js',
});
config.devtool = '#cheap-module-source-map';
config.devServer = { hot: true, line: true, inline: true, progress: true, };
config.module.loaders.push({
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
        'url?limit=10240&name=img/[hash:8].[name].[ext]',
        'image?{bypassOnDebug:true,progressive:true,pngquant:{quality:"65-80",speed:4}}'
    ]
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
