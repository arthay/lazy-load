const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env = {}) => {
    return {
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        sourceMap: true,
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer],
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg|png|jpg|jpeg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                        },
                    },
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebPackPlugin({
                template: "./src/index.html"
            })
        ],
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.join(__dirname, '../build'),
            // publicPath: '',
            filename: '[name].bundle.js',
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
};