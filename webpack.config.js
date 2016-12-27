/* eslint-env node */

var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var sourceDir = path.join(__dirname, '/src');

module.exports = {
	entry: path.join(sourceDir, 'ui.js'),

	externals: {
		maestro: 'maestro',
		react: 'react',
		'react-dom': 'react-dom'
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'ui.build.js',
		libraryTarget: 'commonjs2'
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
				loader: 'file?name=../dist/[hash].[ext]',
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
