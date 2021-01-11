const path = require('path')
// const ExtractTestPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/main.ts'),
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js'
    },
    resolve: {
        extensions: [".ts", ".js", ".less"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}