/* eslint-env node */

var path = require('path');
var webpack = require('webpack');
var sourceDir = path.join(__dirname, '/src');
var examplesDir = path.join(__dirname, '/examples');

module.exports = {
	entry: path.join(examplesDir, 'style.js'),

	output: {
		path: examplesDir,
		filename: 'style.build.js'
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
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],

	resolve: {
		root: [
			path.join(sourceDir, 'js'),
			path.join(sourceDir, 'icons'),
			path.join(sourceDir, 'sass'),
			path.join(sourceDir, 'svg'),
			sourceDir
		]
	}
};