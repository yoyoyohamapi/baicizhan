var base = require('./webpack-base.config');
var webpack = require('webpack');

module.exports = Object.assign({},base,{
    plugins: base.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new webpack.optimize.DedupePlugin()
    ])
});
