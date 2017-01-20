/**
 * Created by kelvinsun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.create(baseConfig);

config.output = Object.assign(config.output, {
    path    : path.resolve(__dirname, 'dist'),
    filename: '[name].js',
});
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
        IN_BROWSER: true,
    }),
    new HtmlWebpackPlugin({
        filename: 'htmltojsx.html',
        template: path.resolve(__dirname, 'site/htmltojsx.html'),
    })
);

module.exports = config;
