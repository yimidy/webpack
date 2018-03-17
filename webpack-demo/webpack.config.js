var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {                     //打包的文件入口，webpack4新增默认价格src下index.js打包到dist下main.js
        a: './src/script/a.js',
        b: './src/script/b.js',
        common: './src/script/common.js'
    },
    output: {                    //打包文件的出口
        path: __dirname + '/dist',    //绝对路径
        filename: 'js/[name].js', //文件名
        publicPath: 'http://yiffi.xyz'        //生成在线路径
    },
    plugins: [
        new htmlWebpackPlugin({        //对于html文档来说
            filename: "index.html",    //打包后文件名
            template: "index.html",    //打包的文件
            inject: false,             //script标签的位置
            title: 'webpack demo ',  //自定义的title
            data: new Date(),              //自定义添加数据
            minify: {                      //压缩打包文件格式
                 removeComments: true,      //去除注释
                 collapseWhitespace: false    //去除空格
            },
            chunks: ['common']         //在这里指定script(注意，要么在模板里引入【inject为false】，要么指定【inject为‘body’或‘head’】，两个方法不能混用）
        }),
        new htmlWebpackPlugin({      //多页面应用a
            filename: "a.html",
            template: "index.html",
            inject: false,
            title: 'webpack demo a',
            data: new Date(),
            excludeChunks: ['b']  //在这里排除不需要的script
        }),
        new htmlWebpackPlugin({      //多页面应用b
            filename: "b.html",
            template: "index.html",
            inject: false,
            title: 'webpack demo b',
            data: new Date(),
            chunks: ['b','common']
        })
    ]


}