var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    context: __dirname,
    module: {
        rules: [
          {  test: /\.js$/,
             exclude: path.resolve(__dirname, 'node_modules'),
             include: /src/,
             use: {
                loader: 'babel-loader',
                options: {
                    presets: ["latest"]
                }
             }
          },
          {  test: /\.html$/,
             use: [
                 {loader:'html-loader'},
             ]
          },
          {  test: /\.tpl$/,
                use: [
                    {loader:'ejs-loader'}
                ]
          },
          {
              test: /\.css/,
              use: [
                  {loader:'style-loader'},
                  {loader:'css-loader',options: {importLoaders: 1}},
                  {loader: 'postCSS-loader',
                      options: {
                        plugins: function (){return [require('autoprefixer')({
                               browsers: ["last 5 versions"]
                        })];}}
                  }]
          },
          {
              test: /\.less$/,
              use: [
                  {loader: 'style-loader'},
                  {loader: 'css-loader'},
                  {loader: 'postCSS-loader',
                      options: {
                          plugins: function (){return [require('autoprefixer')({
                              browsers: ["last 5 versions"]
                          })];}}
                  },
                  {loader: 'less-loader'}
              ]
          },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 10000,
                            name: 'asset/[name]-[hash:5].[ext]'
                        }
                    }

                ]

                }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({        //对于html文档来说
            filename: "index.html",    //打包后文件名
            template: "index.html",    //打包的文件
            inject: 'body',             //script标签的位置
            title: 'webpack test ',  //自定义的title
        })
    ]
}