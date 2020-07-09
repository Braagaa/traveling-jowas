const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: "./src/client/js/index.tsx",
		vendor: ["react", "react-dom"]
	},
	resolve: {
		extensions: [".ts", '.tsx', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/server/views/index.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{
					loader: "ts-loader",
					options: {
						configFile: 'tsconfig.client.json',
						onlyCompileBundledFiles: true
					}
				}]
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack']
			}
		]
	},
};
