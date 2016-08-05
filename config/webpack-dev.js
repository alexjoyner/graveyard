var webpack = require('webpack');
var path = require('path');
require('../server');
module.exports = {
    context: path.join(__dirname + '../../'),
    devtool: "inline-sourcemap",
    entry: "./dev/ts/boot.ts",
    output: {
        path: path.join(__dirname + '../../') + "/dist_client/client",
        filename: "bundle.min.js"
    },
    resolve: {
        root: [path.join(__dirname + '../../')],
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['to-string','css', 'sass']
        }, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.html$/,
            loader: "html"
        }]
    }
};