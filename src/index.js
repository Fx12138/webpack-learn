import sayhi from './helloWorld'
import imgUrl from './assets/orange.png'

sayhi()
const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)