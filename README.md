# 核心概念

四个核心概念:入口(entry) 	输出(output) 	loader	插件(plugins) 

## loader

*loader* 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效[模块](https://www.webpackjs.com/concepts/modules)，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

在更高层面，在 webpack 的配置中 **loader** 有两个目标：

1. `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. `use` 属性，表示进行转换时，应该使用哪个 loader。

## plugins

loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

# 资源模块

- asset/resource 发送一个单独的文件并导出 URL。resource类型打包后，会在dist下面生成对应的静态资源文件。
- asset/inline 导出一个资源的 data URI。比如svg格式导出为base64的格式。inline类型打包后，dist下不会生成对应的静态资源文件。
- asset/source 导出资源的源代码。比如实现的功能为在网页上渲染txt文件中的内容。source类型打包后，dist下不会生成对应的静态资源文件。
- asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。在resource和inline中自动选择；默认选择方式如果文件大于8k，选择resource的类型；如果文件小于8k，选择inline的类型。也可以通过parser下的dataUrlCondition来修改这个默认规则

## Resource资源

```js
  module: {
    rules: [
      {
        test: /\.png$/, //匹配的文件名
        type: 'asset/resource'  //使用的模式
      }
    ]
  },
```

可以自定义打包后的位置和文件名,在output中进行配置

```js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,  //用于自动清理上次打包的文件
    assetModuleFilename: 'images/[contenthash][ext]'	//自定义资源模块打包的位置和文件名
  },
```

也可以在loader里为一个文件单独设置打包后的位置和文件名,使用generator,当assetModuleFilename和generator同时存在时,generator优先级高

```js
  module: {
    rules: [
      {
        test: /\.png$/, //匹配的文件名
        type: 'asset/resource',  //使用的模式
        generator: {
          filename: 'images/test.png' //自定义资源模块打包的位置和文件名
        }
      }
    ]
  },
```

# loader

## 处理css资源



需要css-loader 和 style-loader 两个loader,其中css-loader是用来打包css文件,而style-loader用于将效果在页面中展示

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
```

less文件需要在这两个loader后面加一个less-loader

## 抽离和压缩css

上一节已经可以将css文件进行处理并在页面中展示,但是打包后的css资源是在html文件里的,接下来就是将css抽离成单独的文件并使用link标签引入.这里用到了mini-css-extract-plugin插件.参考plugin中的相关章节

## babel

主要用于将ES6语法编写的代码转换为向后兼容的js语法,以便能够运行在当前和旧版本的浏览器或其他环境中.新建babel.config.js文件

主要配置是预设presets,简单理解就是一组babel插件扩展babel的功能

```powershell
npm install babel-loader babel-core babel-preset-env -d
```

可以直接在webpack.config.js中进行配置

```js
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //排除node_modules中的文件不处理
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
```

也可以新建babel.config.js文件进行配置,方便以后的修改

```js
module.exports = {
  //智能预设 能够编译ES6的语法
  presets: ['@babel/preset-env']
}
```



# plugin

## 抽离和压缩css

使用mini-css-extract-plugin将css抽离成单独的文件并使用link标签引入.因为要引入并不需要用style-loader将style标签写在head中,所以需要将style-loader换成MiniCssExtractPlugin.loader

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module: {
    rules: [
      {
        test: /(\.css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },

plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'	//自定义打包后文件的位置和名称
    })
  ],
```

这个时候已经能够成功抽离css文件,但是打包后的css文件没有进行压缩,这时候要用到css-minimizer-webpack-plugin,这个plugin比较特殊,他不在plugin中进行配置,而是在optimization优化中进行配置,并且需要在生产模式下

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

mode: 'production',

optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
```



# 开发环境

## HtmlWebpackPlugin

作用:生成index.html自动引入打包好的资源

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),  //根据哪个模板
    })
  ],
```

## source map

作用:在开发环境中,代码报错时需要准确的定位到报错位置,但是默认生成的bundle中已经将代码进行压缩,并不能正确的进行定位,使用source map可以实现

```js
  devtool: 'inline-source-map',
```

## webpack-dev-server

即使有了上面的watch可以在保存时进行自动打包,但是用户每次还需要刷新一下浏览器才能显示更新后的内容,使用webpack-dev-server可以解决这个问题,它具有live reloading即实时加载页面的功能

其实他没有真正的输出任何物理文件,而是把输出的bundle文件放到了内存里

```js
  devServer: {
    host: 'localhost',
    port: '3000',
    open: true
  },
```

```powershell
npx webpack serve
```

# 生产环境

在生产环境中不需要devServer

## 压缩css

已经能够成功抽离css文件,但是打包后的css文件没有进行压缩,这时候要用到css-minimizer-webpack-plugin,这个plugin比较特殊,他不在plugin中进行配置,而是在optimization优化中进行配置,并且需要在生产模式下

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

mode: 'production',

optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
```

