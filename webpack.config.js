const path = require('path');

module.exports = {
    entry: './src/index.js',//入口文件路徑
    output: {
        path: path.resolve(__dirname, 'dist'),//出口文件輸出文件夾
        filename: 'zumis-bundle.js'//輸出文件名稱
    },
    //loader 規則
    module: {
        reles: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//loader順序右到左
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    //先在聲明 再在plugins創建實例
    plugins: [

    ]
};