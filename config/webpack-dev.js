var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
// process.env.PORT = 8080;
// require('../server');
console.log('Development server running');
/*
 * Webpack Constants
 */
const METADATA = {
    isDevServer: helpers.isWebpackDevServer()
};
module.exports = {
    metadata: METADATA,
    context: path.join(__dirname + '../../'),
    devtool: "inline-sourcemap",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname + '../../') + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        root: [path.join(__dirname + '../../')],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['to-string', 'css', 'sass']
        }, {
            test: /\.sass$/,
            loaders: ['to-string', 'css', 'sass']
        }, {
            exclude: [helpers.root('src/index.html'), /node_modules/],
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    plugins: [
        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: helpers.root('src/index.html'),
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
        new HtmlElementsPlugin(),
        new webpack.DefinePlugin({
            ENV: require(path.join(__dirname, './environment/webpack-dev-env.js'))
        })
    ],
    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        port: 9000,
        host: 'localhost',
        historyApiFallback: true
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // }
    }
};