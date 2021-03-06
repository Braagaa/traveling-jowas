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
			'/assets': 'http://localhost:3000',
			'/images/upload': 'http://localhost:3000'
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
		}),
		new HtmlWebpackPlugin({
			filename: 'about',
			template: './src/server/views/about.pug',
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			filename: 'services',
			template: './src/server/views/services.pug',
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			filename: 'videos',
			template: './src/server/views/videos.pug',
			chunks: ["videos"]
		}),
		new HtmlWebpackPlugin({
			filename: 'admin',
			template: './src/server/views/admin/index.pug',
			chunks: ["admin"]
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
