var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

var webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS:{
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }
        })
    ]
})

module.exports = webpackConfig