const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let resolve = path.resolve;

module.exports = {
    entry: resolve(__dirname, '../client/client.js'),
    output: {
        path: resolve(__dirname, '../server/public/javascripts'),
        filename: '[name].wp.js',
        crossOriginLoading: "anonymous"
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
            {
                test: /\.vue$/,
                include: [
                    path.resolve(__dirname, "../client")
                ],
                use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                'scss': 'style-loader!css-loader!sass-loader'
                            }
                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/javascripts/*'], {
            root: resolve(__dirname, '../server'), //根目录
            verbose: true,
            　　　　　　　　　　 //开启在控制台输出信息
            dry: false　　　　　　　　　　 //启用删除文件

        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js", ".json", ".coffee", ".css", ".sass", ".scss", ".jpg"],
        alias: {
            'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.js')
        }
    }
}