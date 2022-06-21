const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,  //用于自动清理上次打包的文件
    assetModuleFilename: 'images/[contenthash][ext]'  //自定义资源模块打包的位置和文件名
  },

  module: {
    rules: [
      {
        test: /\.png$/, //匹配的文件名
        type: 'asset/resource',  //使用的模式
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      },
      {
        test: /(\.css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                "postcss-preset-env"
              ],
            },
          },
        },]
      },
      {
        test: /(\.less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                "postcss-preset-env",
              ],
            },
          },
        }, 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //排除node_modules中的文件不处理
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env']
        // }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),  //根据哪个模板
    }),
    //用于提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'//自定义打包后文件的位置和名称
    })
  ],

  mode: 'production',

  optimization: {
    minimizer: [
      //压缩css文件
      new CssMinimizerPlugin()
    ]
  },

  performance: {
    hints: false
  }
}