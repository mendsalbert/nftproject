"use strict";
exports.id = 4996;
exports.ids = [4996];
exports.modules = {

/***/ 4996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3554);
/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_component__WEBPACK_IMPORTED_MODULE_2__]);
_components_component__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Home_1 = ()=>{
    const { address , signer , contract , provider , chainId , connect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const { 0: nfts , 1: setnft  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function loadNFTS() {
        const nft = await contract?.fetchMarketItems();
        setnft(nft);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadNFTS();
    }, [
        contract
    ]);
    //   console.log(nfts);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Home 1 || Xhibiter | NFT Marketplace Next.js Template"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_component__WEBPACK_IMPORTED_MODULE_2__/* .Hero */ .VM, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_component__WEBPACK_IMPORTED_MODULE_2__/* .Bids */ .T8, {
                nft: nfts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_component__WEBPACK_IMPORTED_MODULE_2__/* .Tranding_category */ .$9, {
                nft: nfts
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home_1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;