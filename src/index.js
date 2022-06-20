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

