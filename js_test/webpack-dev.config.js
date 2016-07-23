var base = require('./webpack-base.config.js');
var webpack = require('webpack');
var path = require('path');

module.exports = Object.assign({}, base, {
    devtool: 'cheap-module-eval-source-map',
    plugins: base.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]),
    devServer: {
        hot: true,
        inline: true,
        noInfo: false,
        historyApiFallback: true,
        stats: { colors: true },
        port: process.env.PORT,
        contentBase: __dirname
    }
});