const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let resolve = path.resolve;

module.exports = {
    entry: resolve(__dirname,'../client/client.js'),
    output: {
        path: resolve(__dirname, '../server/public/javascripts'),
        filename:'[name].wp.js'
    },
    module: {
        // 关于模块配置
    
        rules: [
          // 模块规则（配置 loader、解析器等选项）    
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, "../client")
            ],            
            loader: "babel-loader",            
            options: {
                presets: ["env"],
                plugins: ["transform-runtime", "transform-object-rest-spread"]
            } 
          },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['public/javascripts/*'],{
                root: resolve(__dirname,'../server'),       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            
        }),
    ]
}