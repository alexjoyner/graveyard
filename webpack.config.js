var path = require('path');

module.exports = {
	entry: {
		'home/home': './src/home/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: '[name].bundle.js'
	}
};