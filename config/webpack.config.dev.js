const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
module.exports = (env) => {
    const commonConfigs = common(env);
    return merge(commonConfigs, {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '../src'),
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        plugins: [
            ...commonConfigs.plugins,
            new webpack.HotModuleReplacementPlugin(),
        ],
    });
};