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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('注册成功', registration);
      })
      .catch(registrationError => {
        console.log('注册失败', registrationError);

      })
  })
}

if (module.hot) {
  //判断是否支持热模块替换功能
  module.accept("./helloWorld")
}

