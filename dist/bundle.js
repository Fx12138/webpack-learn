/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/helloWorld.js
function sayhi() {
  console.log('hello world');
}

/* harmony default export */ const helloWorld = (sayhi);
;// CONCATENATED MODULE: ./src/assets/orange.png
const orange_namespaceObject = __webpack_require__.p + "images/57842576a3a065789f38.png";
;// CONCATENATED MODULE: ./src/index.js



helloWorld();
var a = [1, 2, 3];

function testBabel(a, b, c) {
  console.log(a, b, c);
}

testBabel.apply(void 0, a);
var img = document.createElement('img');
img.src = orange_namespaceObject;
document.body.appendChild(img);
var block = document.createElement("div");
block.textContent = '哈哈哈哈';
block.classList.add('block-bg');
document.body.appendChild(block);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7OztBQ2ZBLFNBQVNBLEtBQVQsR0FBa0I7RUFDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDRDs7QUFDRCxpREFBZUYsS0FBZjs7OztBQ0hBO0FBQ0E7QUFDQTtBQUVBQSxVQUFLO0FBQ0wsSUFBSUksQ0FBQyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVI7O0FBQ0EsU0FBU0MsU0FBVCxDQUFvQkQsQ0FBcEIsRUFBdUJFLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtFQUMzQk4sT0FBTyxDQUFDQyxHQUFSLENBQVlFLENBQVosRUFBZUUsQ0FBZixFQUFrQkMsQ0FBbEI7QUFFRDs7QUFDREYsU0FBUyxNQUFULFNBQWFELENBQWI7QUFDQSxJQUFNSSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FGLEdBQUcsQ0FBQ0csR0FBSixHQUFVUixzQkFBVjtBQUNBTSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsR0FBMUI7QUFFQSxJQUFNTSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FJLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixNQUFwQjtBQUNBRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQXBCO0FBQ0FSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCQyxLQUExQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1sZWFybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWxlYXJuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1sZWFybi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWxlYXJuLy4vc3JjL2hlbGxvV29ybGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1sZWFybi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImZ1bmN0aW9uIHNheWhpICgpIHtcclxuICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzYXloaSIsImltcG9ydCBzYXloaSBmcm9tICcuL2hlbGxvV29ybGQnXHJcbmltcG9ydCBpbWdVcmwgZnJvbSAnLi9hc3NldHMvb3JhbmdlLnBuZydcclxuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvY29tbW9uLmNzcydcclxuXHJcbnNheWhpKClcclxubGV0IGEgPSBbMSwgMiwgM11cclxuZnVuY3Rpb24gdGVzdEJhYmVsIChhLCBiLCBjKSB7XHJcbiAgY29uc29sZS5sb2coYSwgYiwgYyk7XHJcblxyXG59XHJcbnRlc3RCYWJlbCguLi5hKVxyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5pbWcuc3JjID0gaW1nVXJsXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxyXG5cclxuY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmJsb2NrLnRleHRDb250ZW50ID0gJ+WTiOWTiOWTiOWTiCdcclxuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsb2NrKVxyXG5cclxuIl0sIm5hbWVzIjpbInNheWhpIiwiY29uc29sZSIsImxvZyIsImltZ1VybCIsImEiLCJ0ZXN0QmFiZWwiLCJiIiwiYyIsImltZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImJsb2NrIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9