const merge = require('webpack-merge')
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    }
                ]
            }
            /*{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }*/
        ]
    }
})