import sayhi from './helloWorld'
import imgUrl from './assets/orange.png'
import './assets/css/common.css'

sayhi()
const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)