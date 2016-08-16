var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
/*
 * Webpack Constants
 */
const METADATA = {
	isDevServer: helpers.isWebpackDevServer()
};
module.exports = {
	metadata: METADATA,
	context: path.join(__dirname + '../../'),
	devtool: null,
	entry: "./dev/ts/boot.ts",
	output: {
		path: path.join(__dirname + '../../') + "/dist_client",
		filename: "bundle.min.js"
	},
	resolve: {
		root: [path.join(__dirname + '../../')],
		extensions: ['', '.ts', '.js']
	},
	module: {
		loaders: [{
			test: /\.sass$/,
			loaders: ['to-string', 'css', 'sass']
		}, {
			test: /\.scss$/,
			loaders: ['to-string', 'css', 'sass']
		}, {
			test: /\.ts$/,
			loader: 'awesome-typescript-loader'
		}, {
			test: /\.html$/,
			loaders: ['html-loader'],
			exclude: [helpers.root('dev/index.html')]
		}]
	},
	'htmlLoader': {
		minimize: true,
		removeAttributeQuotes: false,
		caseSensitive: true,
		customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
		customAttrAssign: [/\)?\]?=/]
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
			template: 'dev/index.html',
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
			ENV: require(path.join(__dirname, './environment/webpack-prod-env.js'))
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: false
		}),
	],
};