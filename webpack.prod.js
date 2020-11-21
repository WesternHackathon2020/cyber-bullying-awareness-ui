const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

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
		new CleanWebpackPlugin(['dist/css', 'dist/js']),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
	],
});
