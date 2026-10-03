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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService\r\nuserService.getUsers().then(data =>{\r\n  ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\r\n\r\n})\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)()\r\n;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/addUsers.js"
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n  const form = document.querySelector('form');\r\n  const nameInput = form.querySelector('#form-name');\r\n  const emailInput = form.querySelector('#form-email');\r\n  const childrenInput = form.querySelector('#form-children');\r\n\r\n  form.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n\r\n    const user = {\r\n      name: nameInput.value,\r\n      email: emailInput.value,\r\n      children: childrenInput.checked,\r\n      permissions: false,\r\n    };\r\n\r\n    try {\r\n      await userService.addUser(user);\r\n      const users = await userService.getUsers();\r\n\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.hideError)();\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n      form.reset();\r\n    } catch (error) {\r\n      console.error('Не удалось добавить пользователя:', error);\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.showError)();\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?\n}");

/***/ },

/***/ "./src/modules/removeUsers.js"
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst removeUsers = () => {\r\n  const tbody = document.getElementById('table-body');\r\n\r\n  tbody.addEventListener('click', async (event) => {\r\n    const removeButton = event.target.closest('.btn-remove');\r\n\r\n    if (!removeButton) {\r\n      return;\r\n    }\r\n\r\n    const tr = removeButton.closest('tr');\r\n    const id = tr.dataset.key;\r\n\r\n    try {\r\n      await userService.removeUser(id);\r\n      const users = await userService.getUsers();\r\n\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.hideError)();\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n    } catch (error) {\r\n      console.error('Не удалось удалить пользователя:', error);\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.showError)();\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?\n}");

/***/ },

/***/ "./src/modules/render.js"
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideError: () => (/* binding */ hideError),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   showError: () => (/* binding */ showError)\n/* harmony export */ });\nconst render = (users) => {\r\nconst tbody = document.getElementById('table-body');\r\ntbody.innerHTML = '';\r\n\r\nusers.forEach(user => {\r\n    tbody.insertAdjacentHTML('beforeend', `\r\n    <tr data-key=\"${user.id}\">\r\n        <th scope=\"row\">${user.id}</th>\r\n        <td>${user.name}</td>\r\n        <td>${user.email}</td>\r\n        <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n        <td>\r\n            <div class=\"form-check form-switch\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                    id=\"form-children-${user.id}\" ${user.permissions ? 'checked' : ''}>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-warning\">\r\n                    <i class=\"bi-pencil-square\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                    <i class=\"bi-person-x\"></i>\r\n                </button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n    `);\r\n});\r\n};\r\n\r\nconst showError = () => {\r\nlet errorElement = document.getElementById('data-error');\r\n\r\nif (!errorElement) {\r\n    errorElement = document.createElement('div');\r\n    errorElement.id = 'data-error';\r\n    errorElement.className = 'alert alert-danger mt-3';\r\n\r\n    const table = document.querySelector('.section-table .table-responsive');\r\n    table.after(errorElement);\r\n}\r\n\r\nerrorElement.textContent = 'Произошла ошибка, данных нет!';\r\nerrorElement.hidden = false;\r\n};\r\n\r\nconst hideError = () => {\r\nconst errorElement = document.getElementById('data-error');\r\n\r\nif (errorElement) {\r\n    errorElement.hidden = true;\r\n}\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?\n}");

/***/ },

/***/ "./src/modules/userService.js"
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n  async getData(url) {\r\n    try {\r\n      const response = await fetch(url);\r\n\r\n      if (!response.ok) {\r\n        throw new Error(`Ошибка HTTP: ${response.status}`);\r\n      }\r\n\r\n      return await response.json();\r\n    } catch (error) {\r\n      throw error;\r\n    }\r\n  }\r\n\r\n  async sendData(url, method, data = null) {\r\n    try {\r\n      const options = {\r\n        method,\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n      };\r\n\r\n      if (data !== null) {\r\n        options.body = JSON.stringify(data);\r\n      }\r\n\r\n      const response = await fetch(url, options);\r\n\r\n      if (!response.ok) {\r\n        throw new Error(`Ошибка HTTP: ${response.status}`);\r\n      }\r\n\r\n      const text = await response.text();\r\n      return text ? JSON.parse(text) : null;\r\n    } catch (error) {\r\n      throw error;\r\n    }\r\n  }\r\n\r\n  getUsers() {\r\n    return this.getData('http://localhost:4545/users');\r\n  }\r\n\r\n  addUser(user) {\r\n    return this.sendData('http://localhost:4545/users', 'POST', user);\r\n  }\r\n\r\n  removeUser(id) {\r\n    return this.sendData(`http://localhost:4545/users/${id}`, 'DELETE');\r\n  }\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;