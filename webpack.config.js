//zumis
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'z-bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'})
    ],
    module:{//第三方模块加载器
        rules:[//第三方的匹配规制
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {  test: /\.css$/, use: ['style-loader', 'css-loader']  },
            {  test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader']  }

        ]
    },
}
