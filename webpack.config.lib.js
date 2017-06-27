/**
 * Created by RequireSun on 2017/6/27.
 */

'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');

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
    })
);

module.exports = config;
