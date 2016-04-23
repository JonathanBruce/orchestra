/* eslint-env node */

var path = require('path');
var webpack = require('webpack');
var webpackEntries = require('./tests/support/webpack');
var testsDir = path.join(__dirname, '/tests');

module.exports = {
	entry: webpackEntries(testsDir),

	output: {
		path: testsDir,
		filename: './[name].entry.js'
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
				test: /\.(ttf|woff|woff2|eot|png|jpg|svg)$/,
				loaders: [ 'file' ]
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
			testsDir
		]
	}
};
