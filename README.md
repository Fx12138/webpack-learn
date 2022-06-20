# webpack-learn
学习webpack测试用项目

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





# 开发环境

## HtmlWebpackPlugin

作用:生成index.html自动引入打包好的资源

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  //根据哪个模板
      filename: 'app.html',   //生成文件的名称
      inject: 'body',  //定义生成的html在哪里引入资源,默认在head中
    })
  ]
```

## source map

作用:在开发环境中,代码报错时需要准确的定位到报错位置,但是默认生成的bundle中已经将代码进行压缩,并不能正确的进行定位,使用source map可以实现

```js
  devtool: 'inline-source-map',
```

## 使用watch mode

作用:在开发时需要每次都运行npx webpack命令进行打包,使用watch mode可以在保存文件的时候自动检测更改过的文件并进行打包

```powershell
npx webpack --watch
```

## webpack-dev-server

即使有了上面的watch可以在保存时进行自动打包,但是用户每次还需要刷新一下浏览器才能显示更新后的内容,使用webpack-dev-server可以解决这个问题,它具有live reloading即实时加载页面的功能

其实他没有真正的输出任何物理文件,而是把输出的bundle文件放到了内存里

```js
  devServer: {
    static: './dist'
  },
```

```powershell
npx webpack-dev-server
```

## 

