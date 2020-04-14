const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: __dirname + '/src/index.js',

	output: {

		// output path of the compiled bundle
		path: __dirname + '/build',

		// output filename of the compiled bundle
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({

			// output filename
			filename: 'index.html',

			// input html template
			template: __dirname + '/src/index.html'
		})
	]
};
