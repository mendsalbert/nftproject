"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/home/home_1.jsx":
/*!*******************************!*\
  !*** ./pages/home/home_1.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mendsalbert_Documents_WEB_APPS_nftproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mendsalbert_Documents_WEB_APPS_nftproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mendsalbert_Documents_WEB_APPS_nftproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/component */ \"./components/component.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.jsx\");\n/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthProvider */ \"./utils/AuthProvider.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home_1 = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext), address = ref.address, signer = ref.signer, contract = ref.contract, provider = ref.provider, chainId = ref.chainId, connect = ref.connect;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref1[0], setnft = ref1[1];\n    function loadNFTS() {\n        return _loadNFTS.apply(this, arguments);\n    }\n    function _loadNFTS() {\n        _loadNFTS = _asyncToGenerator(_Users_mendsalbert_Documents_WEB_APPS_nftproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var _$nft;\n            return _Users_mendsalbert_Documents_WEB_APPS_nftproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return signer === null || signer === void 0 ? void 0 : signer.fetchMarketItems();\n                    case 2:\n                        _$nft = _ctx.sent;\n                        setnft(_$nft);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadNFTS.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadNFTS();\n    }, [\n        signer\n    ]);\n    console.log(nft);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Home 1 || Xhibiter | NFT Marketplace Next.js Template\"\n            }, void 0, false, {\n                fileName: \"/Users/mendsalbert/Documents/WEB APPS/nftproject/pages/home/home_1.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_component__WEBPACK_IMPORTED_MODULE_3__.Hero, {}, void 0, false, {\n                fileName: \"/Users/mendsalbert/Documents/WEB APPS/nftproject/pages/home/home_1.jsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_component__WEBPACK_IMPORTED_MODULE_3__.Bids, {}, void 0, false, {\n                fileName: \"/Users/mendsalbert/Documents/WEB APPS/nftproject/pages/home/home_1.jsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_component__WEBPACK_IMPORTED_MODULE_3__.Tranding_category, {}, void 0, false, {\n                fileName: \"/Users/mendsalbert/Documents/WEB APPS/nftproject/pages/home/home_1.jsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mendsalbert/Documents/WEB APPS/nftproject/pages/home/home_1.jsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, _this);\n};\n_s(Home_1, \"7MROE7wsxI6OS2PKBijDpxbKXhw=\");\n_c = Home_1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home_1);\nvar _c;\n$RefreshReg$(_c, \"Home_1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2hvbWVfMS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQU8zQjtBQUNKO0FBQ1M7QUFDYzs7QUFHdkQsSUFBTVksTUFBTSxHQUFHLFdBQU07O0lBRXBCLElBQ0NULEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDUSw0REFBVyxDQUFDLEVBRGhCRSxPQUFPLEdBQ2RWLEdBQXVCLENBRGhCVSxPQUFPLEVBQUVDLE1BQU0sR0FDdEJYLEdBQXVCLENBRFBXLE1BQU0sRUFBRUMsUUFBUSxHQUNoQ1osR0FBdUIsQ0FEQ1ksUUFBUSxFQUFFQyxRQUFRLEdBQzFDYixHQUF1QixDQURXYSxRQUFRLEVBQUVDLE9BQU8sR0FDbkRkLEdBQXVCLENBRHFCYyxPQUFPLEVBQUVDLE9BQU8sR0FDNURmLEdBQXVCLENBRDhCZSxPQUFPO0lBRzVELElBQXVCakIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWxCckMsSUFrQmEsR0FBWUEsSUFBWSxHQUF4QixFQWxCYixNQWtCcUIsR0FBSUEsSUFBWSxHQUFoQjthQUNKb0IsUUFBUTtlQUFSQSxTQUFROzthQUFSQSxTQUFRO1FBQVJBLFNBQVEsR0FBdkIsaU1BQTBCO2dCQUNsQkMsS0FBRzs7Ozs7K0JBQVNSLE1BQU0sYUFBTkEsTUFBTSxXQUFrQixHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLE1BQU0sQ0FBRVMsZ0JBQWdCLEVBQUU7O3dCQUF0Q0QsS0FBRyxZQUFtQzt3QkFDNUNGLE1BQU0sQ0FBQ0UsS0FBRyxDQUFDLENBQUM7Ozs7OztTQUNiO2VBSGNELFNBQVE7O0lBSXZCbkIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RtQixRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUU7UUFBQ1AsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUVkVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7SUFDakIscUJBQ0MsOERBQUNJLE1BQUk7OzBCQUNKLDhEQUFDaEIsd0RBQUk7Z0JBQUNpQixLQUFLLEVBQUMsdURBQXVEOzs7OztxQkFBRzswQkFDdEUsOERBQUN2Qix1REFBSTs7OztxQkFBRzswQkFDUiw4REFBQ0MsdURBQUk7Ozs7cUJBQUc7MEJBRVIsOERBQUNFLG9FQUFpQjs7OztxQkFBRzs7Ozs7O2FBRWYsQ0FDTjtDQUNGO0dBekJLSyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUEyQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2hvbWVfMS5qc3g/YzAxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdEhlcm8sXHJcblx0QmlkcyxcclxuXHRUb3BfY29sbGVjdGlvbixcclxuXHRUcmFuZGluZ19jYXRlZ29yeSxcclxuXHROZXdzZUxhdHRlcixcclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWV0YSc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL0F1dGhQcm92aWRlclwiO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVfMSA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgeyBhZGRyZXNzLCBzaWduZXIsIGNvbnRyYWN0LCBwcm92aWRlciwgY2hhaW5JZCwgY29ubmVjdCB9ID1cclxuXHRcdHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cdFxyXG5cdFx0Y29uc3QgW25mdHMsIHNldG5mdF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0XHRhc3luYyBmdW5jdGlvbiBsb2FkTkZUUygpIHtcclxuXHRcdCAgY29uc3QgbmZ0ID0gYXdhaXQgc2lnbmVyPy5mZXRjaE1hcmtldEl0ZW1zKCk7XHJcblx0XHQgIHNldG5mdChuZnQpO1xyXG5cdFx0fVxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdCAgbG9hZE5GVFMoKTtcclxuXHRcdH0sIFtzaWduZXJdKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhuZnQpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbj5cclxuXHRcdFx0PE1ldGEgdGl0bGU9XCJIb21lIDEgfHwgWGhpYml0ZXIgfCBORlQgTWFya2V0cGxhY2UgTmV4dC5qcyBUZW1wbGF0ZVwiIC8+XHJcblx0XHRcdDxIZXJvIC8+XHJcblx0XHRcdDxCaWRzIC8+XHJcblx0XHRcdHsvKiA8VG9wX2NvbGxlY3Rpb24gLz4gKi99XHJcblx0XHRcdDxUcmFuZGluZ19jYXRlZ29yeSAvPlxyXG5cdFx0XHR7LyogPE5ld3NlTGF0dGVyIC8+ICovfVxyXG5cdFx0PC9tYWluPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXzE7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkhlcm8iLCJCaWRzIiwiVG9wX2NvbGxlY3Rpb24iLCJUcmFuZGluZ19jYXRlZ29yeSIsIk5ld3NlTGF0dGVyIiwiZXRoZXJzIiwiTWV0YSIsIkF1dGhDb250ZXh0IiwiSG9tZV8xIiwiYWRkcmVzcyIsInNpZ25lciIsImNvbnRyYWN0IiwicHJvdmlkZXIiLCJjaGFpbklkIiwiY29ubmVjdCIsIm5mdHMiLCJzZXRuZnQiLCJsb2FkTkZUUyIsIm5mdCIsImZldGNoTWFya2V0SXRlbXMiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/home_1.jsx\n");

/***/ })

});