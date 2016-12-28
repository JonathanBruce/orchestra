/* eslint-env node */

var path = require('path');
var webpack = require('webpack');
var webpackEntries = require('./tests/support/webpack');
var testsDir = path.join(__dirname, '/tests');

module.exports = {
	devtool: 'inline-source-map',
	entry: webpackEntries(testsDir),

	output: {
		path: testsDir,
		filename: './[name].entry.js',
		publicPath: testsDir
	},

	module: {
		loaders: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015', 'react', 'stage-1' ]
				}
			},
			{
				loader: 'file?name=fonts/[hash].[ext]',
				test: /\.(ttf|woff|woff2|eot|png|jpg|svg)$/
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [ 'style', 'css', 'sass' ]
			}
		],

		preLoaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		})
	],

	resolve: {
		root: [
			path.join(__dirname, '/src'),
			path.join(__dirname, '/dist'),
			testsDir
		]
	}
};
