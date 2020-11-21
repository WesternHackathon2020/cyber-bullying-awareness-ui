const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const env = require('dotenv').config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			],
		},{
			test: /\.(gif|svg|jpg|png)$/,
			use : [
				{
					loader: 'url-loader'
				}
			]
		}],
	},
	plugins: [
		new webpack.DefinePlugin(envKeys),
		new CleanWebpackPlugin(['dist/css', 'dist/js']),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
	],
});
