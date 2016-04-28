var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path')
module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./dev/ts/boot.ts",
    output: {
        path: __dirname + "/dist_client/client",
        filename: "bundle.min.js"
    },
    resolve: {
        root: [path.join(__dirname)],
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
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};