const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,  //用于自动清理上次打包的文件
    assetModuleFilename: 'images/[contenthash][ext]'  //自定义资源模块打包的位置和文件名
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.png$/, //匹配的文件名
        type: 'asset/resource',  //使用的模式
        generator: {
          filename: 'images/test.png' //自定义资源模块打包的位置和文件名
        }
      },
      {
        test: /(\.css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  //根据哪个模板
      filename: 'app.html',   //生成文件的名称
      inject: 'body',  //定义生成的html在哪里引入资源,默认在head中
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'//自定义打包后文件的位置和名称
    })
  ],

  devServer: {
    static: './dist'
  },

  mode: 'development'
}