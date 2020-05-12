'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
// process.env.PORT = 8080;
// require('../server');
/*
 * Webpack Constants
 */
var METADATA = {
    isDevServer: helpers.isWebpackDevServer()
};
var webpack_dev_config = function webpack_dev_config(BASE_DIR) {
    return {
        metadata: METADATA,
        context: path.join(BASE_DIR),
        devtool: "inline-sourcemap",
        entry: {
            bundle: ["client/_startup/index.js", hotMiddlewareScript]
        },
        output: {
            path: path.join(BASE_DIR, 'docs'),
            filename: "[name].js"
        },
        resolve: {
            root: [BASE_DIR],
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: [/\.js/, /\.jsx/],
                exclude: [path.join(BASE_DIR, 'client/index.html'), /node_modules/],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
        },
        plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(),
        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: path.join(BASE_DIR, 'client/index.html'),
            chunksSortMode: 'dependency'
        }),
        /*
         * Plugin: HtmlHeadConfigPlugin
         * Description: Generate html tags based on javascript maps.
         *
         * If a publicPath is set in the webpack output configuration, it will be automatically added to
         * href attributes, you can disable that by adding a "=href": false property.
         * You can also enable it to other attribute by settings "=attName": true.
         *
         * The configuration supplied is map between a location (key) and an element definition object (value)
         * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
         *
         * Example:
         *  Adding this plugin configuration
         *  new HtmlElementsPlugin({
         *    headTags: { ... }
         *  })
         *
         *  Means we can use it in the template like this:
         *  <%= webpackConfig.htmlElements.headTags %>
         *
         * Dependencies: HtmlWebpackPlugin
         */
        new webpack.DefinePlugin({
            ENV: require(path.join(__dirname, './environment/webpack-dev-env.js'))
        })],
        /**
         * Webpack Development Server configuration
         * Description: The webpack-dev-server is a little node._startup Express server.
         * The server emits information about the compilation state to the testing,
         * which reacts to those events.
         *
         * See: https://webpack.github.io/docs/webpack-dev-server.html
         */
        devServer: {
            port: 9000,
            host: 'localhost',
            hot: true,
            historyApiFallback: true
            // watchOptions: {
            //     aggregateTimeout: 300,
            //     poll: 1000
            // }
        }
    };
};

exports.webpack_dev_config = webpack_dev_config;
exports.webpack = webpack;