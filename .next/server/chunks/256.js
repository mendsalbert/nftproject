"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_categories_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1801);
/* harmony import */ var _categoryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6367);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dropdown_recently_added_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3429);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4954);









const Trending_categories_items = ({ nft , itemActive  })=>{
    console.log(nft);
    const { 0: itemdata , 1: setItemdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_categories_data__WEBPACK_IMPORTED_MODULE_2__/* .trendingCategoryData */ .c);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { trendingCategorySorText  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.counter
    );
    const { 0: filterVal , 1: setFilterVal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleFilter = (category)=>{
        if (category !== "all") {
            setItemdata(_data_categories_data__WEBPACK_IMPORTED_MODULE_2__/* .trendingCategoryData.filter */ .c.filter((item)=>item.category === category
            ));
        } else {
            setItemdata(_data_categories_data__WEBPACK_IMPORTED_MODULE_2__/* .trendingCategoryData */ .c);
        }
    };
    const sortText = [
        {
            id: 1,
            text: "Recently Added"
        },
        {
            id: 2,
            text: "Price: Low to High"
        },
        {
            id: 3,
            text: "Price: high to low"
        },
        {
            id: 4,
            text: "Auction Ending Soon"
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_counterSlice__WEBPACK_IMPORTED_MODULE_7__/* .updateTrendingCategoryItemData */ .Nf)(itemdata.slice(0, 8)));
    }, [
        itemdata,
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8 flex flex-wrap items-center justify-between",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-wrap items-center",
                    children: _data_categories_data__WEBPACK_IMPORTED_MODULE_2__/* .tranding_category_filter.map */ .q.map(({ id , svg , text  })=>{
                        if (text === "all") {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "my-1 mr-2.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: filterVal === id ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize" : "dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize",
                                    onClick: ()=>{
                                        handleFilter(text);
                                        setFilterVal(id);
                                    },
                                    children: text
                                })
                            }, id);
                        } else {}
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_categoryItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                nft: nft,
                itemActive: itemActive
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trending_categories_items);


/***/ })

};
;