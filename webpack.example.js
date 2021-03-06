/* eslint-env node */

var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var sourceDir = path.join(__dirname, '/src');
var examplesDir = path.join(__dirname, '/example');

module.exports = {
	devServer: {
		contentBase: './example',
		hot: true
	},

	devtool: 'inline-source-map',
	entry: path.join(examplesDir, 'example.js'),

	output: {
		path: examplesDir,
		filename: 'example.build.js'
	},

	postcss: [ autoprefixer ],

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
				loaders: [ 'style', 'css', 'postcss', 'sass' ]
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
			path.join(sourceDir, 'js'),
			path.join(sourceDir, 'icons'),
			path.join(sourceDir, 'sass'),
			path.join(sourceDir, 'svg'),
			sourceDir
		]
	}
};
