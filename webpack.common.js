const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: "./src/js/index.ts"
	},
	resolve: {
		extensions: [".ts", '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/views/index.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{loader: "ts-loader"}]
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			}
		]
	},
};
