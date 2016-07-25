var path = require('path');

module.exports = {
    entry: path.join(__dirname, './index'),
    output: {
        path: path.join(__dirname, './static/dist'),
        publicPath: '/static/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    plugins: []
};