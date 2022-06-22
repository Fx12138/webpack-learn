import sayhi from './helloWorld'
import imgUrl from './assets/orange.png'
import './assets/css/common.css'

sayhi()
let a = [1, 2, 3]
function testBabel (a, b, c) {
  console.log(a, b, c);

}
testBabel(...a)
const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)

const block = document.createElement("div")
block.textContent = '哈哈哈哈'
block.classList.add('block-bg')
document.body.appendChild(block)
img.onclick = function () {
  import(/*webpackChunkName:'math'*/"./other.js")
    .then(res => {
      console.log('模块加载成功', res)
    })
    .catch(err => {
      console.log("模块加载失败", err)
    })
}

if (module.hot) {
  //判断是否支持热模块替换功能
  module.accept("./helloWorld")
}

