var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: 'http://0.0.0.0:3001/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.scss$/,
                inlcude: path.join(__dirname,'src'),
                loader: 'style!css!sass'
            }
        ]
    }
}