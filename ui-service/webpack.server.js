const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Tell webpack we're building for node
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);