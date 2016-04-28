var webpack = require('webpack');
var path = require('path')
module.exports = {
    context: path.join(__dirname + '../../'),
    devtool: null,
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
            loaders: ['to-string', 'css', 'sass']
        }, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.html$/,
            loaders: ['html-loader']
        }]
    },
    'htmlLoader': {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
      customAttrAssign: [ /\)?\]?=/ ] 
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};