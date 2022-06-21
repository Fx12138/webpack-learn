const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const os = require('os')
//获取cpu核数
const threads = os.cpus().length;
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    //开发模式没有输出,path可以直接定义成undefined
    // path: path.resolve(__dirname, '../dist'),
    path: undefined,
    assetModuleFilename: 'images/[contenthash][ext]'  //自定义资源模块打包的位置和文件名
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.png$/, //匹配的文件名
            type: 'asset/resource',  //使用的模式
            generator: {
              filename: 'images/test.png' //自定义资源模块打包的位置和文件名
            }
          },
          {
            test: /(\.css)$/,
            use: ["style-loader", 'css-loader']
          },
          {
            test: /(\.css|less)$/,
            use: ["style-loader", 'css-loader', 'less-loader']
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/, //排除node_modules中的文件不处理
            use: [
              {
                loader: 'thread-loader', //开启多进程
                options: {
                  works: threads //进程的数量
                }
              },
              {
                loader: 'babel-loader',
                options: {
                  // presets: ['@babel/preset-env'],
                  cacheDirectory: true,  //开启babel缓存
                  cacheCompression: false  //关闭缓存文件压缩
                }
              }
            ]
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),  //根据哪个模板
    })
  ],

  devServer: {
    host: 'localhost',
    port: '3000',
    open: true
  },

  mode: 'development',
}