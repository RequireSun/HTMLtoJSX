/**
 * Created by kelvinsun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.output = Object.assign(config.output, {
    path    : path.resolve(__dirname, "dist"),
    filename: 'htmltojsx.js',
});
config.devtool = '#cheap-module-source-map';
config.devServer = { hot: true, line: true, inline: true, };
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
        IN_BROWSER: true,
    }),
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
