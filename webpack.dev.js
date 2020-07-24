const {resolve} = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/server/views/index.pug',
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			filename: 'destinations',
			template: './src/server/views/destinations.pug',
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			filename: 'listings',
			template: './src/server/views/listings.pug',
			chunks: ["listings"]
		})
	],
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
