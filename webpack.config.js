/*
* Webpack development server configuration
*
* This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
* the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
*/

'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname,
    output: {
        publicPath: '/scripts/',
        path: __dirname + "/dist/scripts",
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'jquery.ui.widget': "jquery.ui.widget/jquery.ui.widget.js"
        },
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'src',
            'src/components',
            'js'
        ],
        extensions: ['', '.js', '.jsx']
    },
    cache: true,
    debug: true,
    devtool: false,
    entry: './src/index.jsx',
    plugins: [],
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        /*preLoaders: [],*/
        loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }, {
                    test: /\.less$/,
                    loader: 'style-loader!css-loader!less-loader'
                }, {
                    test: /\.gif/,
                    loader: 'url-loader?limit=100000&minetype=image/gif'
                }, {
                    test: /\.jpg/,
                    loader: 'url-loader?limit=100000&minetype=image/jpg'
                }, {
                    test: /\.png/,
                    loader: 'url-loader?limit=100000&minetype=image/png'
                }, {
                    test: /\.jsx$/,
                    loaders: ['jsx-loader?harmony']
                }, {
                    test: /\.js$/,
                    loaders: ['jsx-loader?harmony']
                }/*,
                {
                    test: /\.woff$/,
                    loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {
                    test: /\.ttf$/,
                    loader: "file-loader"
                },
                {
                    test: /\.eot$/,
                    loader: "file-loader"
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader"
                }*/,
                {
                    test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader"
                },
                { 
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                    loader: 'url-loader?limit=100000' 
                }
        ]
    }
};