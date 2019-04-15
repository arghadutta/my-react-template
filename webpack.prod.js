const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'js/bundle.js',
		publicPath: './'
	},
	mode: 'production',
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{
				test: /\.sass$/,
				use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new miniCssExtractPlugin({
			filename: 'css/style.css'
		}),
		new CleanWebpackPlugin({})
	]
}
