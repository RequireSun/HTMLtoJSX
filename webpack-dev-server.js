/**
 * Created by RequireSun on 2017/6/27.
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const webpackConfigDev = require('./webpack.config.development');
const compilerDev = webpack(webpackConfigDev);

app.use(webpackDevMiddleware(compilerDev, {
    hot: true,
    lazy: false,
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    index: 'htmltojsx.html',
    headers: {
        "X-Custom-Header": "yes"
    },
    stats: {
        colors: true,
        chunks: false,
    },
}));

// app.use(webpackHotMiddleware(compilerDev));

app.use(express.static(path.resolve(__dirname, 'dist')));

const port = process.env.PORT || 8008;
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}, Ctrl+C to stop`);
});
