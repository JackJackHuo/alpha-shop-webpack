/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alphashop_webpack/./src/scss/main.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\r\nconsole.log('JS loaded!')\r\nconst stepper = document.querySelector('.stepper')\r\nconst steps = stepper.querySelectorAll('.step')\r\nconst form = document.querySelector('FORM')\r\nconst parts = form.querySelectorAll('.part')\r\nconst btnControl = document.querySelector('.form__btn--control')\r\nconst nextBtn = btnControl.querySelector('.form__btn--next')\r\nconst prevBtn = btnControl.querySelector('.form__btn--previous')\r\nconst cart = document.querySelector('.cart')\r\nconst cartItems = cart.querySelectorAll('.cart__item')\r\nconst quantity = cart.querySelector('.item__quantity--number')\r\nconst darkModeBtn = document.querySelector('.icon__darkMode--toggle')\r\n\r\nlet currentStep = 0\r\n\r\nfunction handleClickedBtn(e) {\r\n  e.preventDefault()\r\n  const target = e.target\r\n  const thisStep = steps[currentStep]\r\n  const nextStep = steps[currentStep + 1]\r\n  const prevStep = steps[currentStep - 1]\r\n  const thisPart = parts[currentStep]\r\n  const nextPart = parts[currentStep + 1]\r\n  const prevPart = parts[currentStep - 1]\r\n  if (target.classList.contains('form__btn--next')) {\r\n    if (currentStep === 2) return\r\n    thisStep.classList.toggle('active')\r\n    thisStep.classList.toggle('checked')\r\n    nextStep.classList.toggle('active')\r\n    thisPart.classList.toggle('d-none')\r\n    nextPart.classList.toggle('d-none')\r\n    currentStep += 1\r\n  } else if (target.classList.contains('form__btn--previous')) {\r\n    thisStep.classList.toggle('active')\r\n    prevStep.classList.toggle('checked')\r\n    prevStep.classList.toggle('active')\r\n    thisPart.classList.toggle('d-none')\r\n    prevPart.classList.toggle('d-none')\r\n    currentStep -= 1\r\n  }\r\n  resetBtn()\r\n}\r\n\r\nfunction resetBtn() {\r\n  if (currentStep !== 0) {\r\n    prevBtn.style.display = 'initial'\r\n  }\r\n  if (currentStep === 0) {\r\n    prevBtn.style.display = 'none'\r\n  }\r\n  if (currentStep === 2) {\r\n    nextBtn.innerHTML = '確認下單'\r\n  } else {\r\n    nextBtn.innerHTML = '下一步 &longrightarrow;'\r\n\r\n  }\r\n}\r\n\r\nfunction handleClickedQuantity({ target }) {\r\n  const cartItem = cartItems[+target.dataset.id - 1]\r\n  let quantity = cartItem.querySelector('.item__quantity--number')\r\n\r\n  if (target.classList.contains('item__quantity--minus') && +quantity.innerHTML > 0) {\r\n    quantity.innerHTML = Number(quantity.innerHTML) - 1\r\n  } else if (target.classList.contains('item__quantity--plus')) {\r\n    quantity.innerHTML = Number(quantity.innerHTML) + 1\r\n  }\r\n  calcTotal()\r\n}\r\n\r\nfunction calcTotal() {\r\n  let totalPrice = cart.querySelector('.cart__charge--total')\r\n  let total = 0\r\n  cartItems.forEach(item => {\r\n    const quantity = item.querySelector('.item__quantity--number')\r\n    const price = item.querySelector('.item__price')\r\n    total += +quantity.innerHTML * +price.innerHTML.split('$')[1].split(',').join('')\r\n  })\r\n  totalPrice.innerHTML = total\r\n}\r\n\r\nfunction handleClickeddarkMode({ target }) {\r\n  if (!target.classList.contains('clicked')) {\r\n    document.documentElement.setAttribute('data-theme', 'dark')\r\n  } else {\r\n    document.documentElement.setAttribute('data-theme', 'light')\r\n  }\r\n  target.classList.toggle('clicked')\r\n}\r\nbtnControl.addEventListener('click', handleClickedBtn)\r\ncart.addEventListener('click', handleClickedQuantity)\r\ndarkModeBtn.addEventListener('click', handleClickeddarkMode)\r\n\n\n//# sourceURL=webpack://alphashop_webpack/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;