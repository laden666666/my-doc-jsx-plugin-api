var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            chunks: ['myDocJsxPluginTemplate'],
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'myDocJsxPluginTemplate',],
            minChunks: Infinity,
        }),
    ]
})