const {resolve} = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	output: {
		path: resolve(__dirname, 'public'),
		filename: "[name].bundle.js"
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		open: true,
		proxy: {
			'/graphql': 'http://localhost:3000',
			'/assets': 'http://localhost:3000'
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'}, 
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	}
});
