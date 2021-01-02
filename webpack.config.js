const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  path.resolve(__dirname, "src/scripts/main.ts"),
    devtool: 'inline-source-map',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "src/public"),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]

            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".less"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "base.css"
        })
    ],

    watchOptions: {
        ignored: 'node_modules/**'
    },
};
