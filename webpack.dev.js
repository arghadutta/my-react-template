const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: './bundle.js'
	},
	mode: 'development',     
	devServer: {
		open: false,
		hot: true,
		port: 3000
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
