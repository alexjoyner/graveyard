var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
// process.env.PORT = 8080;
// require('../server');
/*
 * Webpack Constants
 */
const METADATA = {
    isDevServer: helpers.isWebpackDevServer()
};
const webpack_dev_config = (BASE_DIR) => {
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
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(BASE_DIR, 'client/index.html'),
                chunksSortMode: 'dependency'
            }),
            new webpack.DefinePlugin({
                ENV: require(path.join(__dirname, './environment/webpack-dev-env.js'))
            })
        ]
    }
};

export {webpack_dev_config, webpack};
