(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function  component() {
    const el = document.createElement('div');
    const btn = document.createElement('button');

    el.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Нажать';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

    el.appendChild(btn);
    return el;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    console.log('test3')
});

/***/ })

},[["./src/index.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNVOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFDO0FBQ3BCO0FBQ0Esa0JBQWtCLGlEQUFPOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoiYXBwLjFlMzM3NWE4YTAxODhkNDIwY2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludC5qcyc7XHJcblxyXG5mdW5jdGlvbiAgY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGVsLmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSAn0J3QsNC20LDRgtGMJztcclxuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuXHJcbiAgICBlbC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdDMnKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==