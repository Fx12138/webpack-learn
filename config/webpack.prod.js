const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const os = require('os')
//获取cpu核数
const threads = os.cpus().length;
const TerserWebpackPlugin = require('terser-webpack-plugin')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

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
        oneOf: [
          {
            test: /\.(png|jpge?g|gif|webp|svg)$/, //匹配的文件名
            type: 'asset',  //使用的模式
            parser: {
              dataUrlCondition: {
                maxSize: 4 * 1024 // 如果文件大于4k，选择resource的类型；如果文件小于4k，选择inline的类型
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
                  cacheCompression: false,  //关闭缓存文件压缩
                  plugins: ["@babel/plugin-transform-runtime"] //减少体积
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
    }),
    //用于提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'//自定义打包后文件的位置和名称
    }),

  ],

  mode: 'production',

  optimization: {
    //压缩的操作
    minimizer: [
      //压缩css文件
      new CssMinimizerPlugin(),
      //压缩js
      new TerserWebpackPlugin({
        parallel: threads   //开启terser多进程打包和进程数量
      }),
      // 图片压缩
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     // Lossless optimization with custom option
      //     // Feel free to experiment with options for better result for you
      //     options: {
      //       plugins: [
      //         ["gifsicle", { interlaced: true }],
      //         ["jpegtran", { progressive: true }],
      //         ["optipng", { optimizationLevel: 5 }],
      //         // Svgo configuration here https://github.com/svg/svgo#configuration
      //         [
      //           "svgo",
      //           {
      //             plugins: [
      //               'preset-default',
      //               'prefixIds',
      //               {
      //                 name: "sortAttrs",
      //                 params: {
      //                   xmlnsOrder: 'alphabetical',
      //                 },
      //               },
      //             ]
      //           },
      //         ],
      //       ],
      //     },

      //   },
      // }),
    ]
  },

  performance: {
    hints: false
  }
}