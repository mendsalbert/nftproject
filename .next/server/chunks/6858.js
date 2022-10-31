"use strict";
exports.id = 6858;
exports.ids = [6858];
exports.modules = {

/***/ 6858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_collection_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2538);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





const Activity_item = ()=>{
    const { 0: filterVal , 1: setFilterVal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_collection_data__WEBPACK_IMPORTED_MODULE_2__/* .collection_activity_item_data */ .D_);
    const { 0: filterData , 1: setfilterData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_collection_data__WEBPACK_IMPORTED_MODULE_2__/* .collection_activity_item_data.map */ .D_.map((item)=>{
        const { category  } = item;
        return category;
    }));
    const { 0: inputText , 1: setInputText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleFilter = (category)=>{
        setData(_data_collection_data__WEBPACK_IMPORTED_MODULE_2__/* .collection_activity_item_data.filter */ .D_.filter((item)=>item.category === category
        ));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newArray = _data_collection_data__WEBPACK_IMPORTED_MODULE_2__/* .collection_activity_item_data.filter */ .D_.filter((item)=>{
            return item.title.toLowerCase().includes(inputText);
        });
        setData(newArray);
        setInputText("");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setfilterData(filterData.filter(onlyUnique));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "tab-pane fade",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10",
                        children: data.slice(0, 5).map((item)=>{
                            const { id , image , title , price , time , category  } = item;
                            const itemLink = image.split("/").slice(-1).toString().replace(".jpg", "").replace(".gif", "").replace("_sm", "").replace("avatar", "item");
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/item/${itemLink}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                            className: "mr-5 self-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                src: image,
                                                alt: title,
                                                height: 50,
                                                width: 50,
                                                objectFit: "cover",
                                                className: "rounded-2lg",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm",
                                                    children: price
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-jacarta-300 block text-xs",
                                                    children: time
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "icon fill-jacarta-700 dark:fill-white h-6 w-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                    xlinkHref: `/icons.svg#icon-${category}`
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                        className: "basis-4/12 lg:pl-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "search",
                                className: "relative mb-12 block",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "search",
                                        className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
                                        placeholder: "Search",
                                        value: inputText,
                                        onChange: (e)=>setInputText(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "font-display text-jacarta-500 mb-4 font-semibold dark:text-white",
                                children: "Filters"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap",
                                children: filterData.map((category, i)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: filterVal === i ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border px-4 py-3 border-transparent text-white dark:border-transparent" : "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                        onClick: ()=>{
                                            handleFilter(category);
                                            setFilterVal(i);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: filterVal === i ? "icon mr-2 h-4 w-4 fill-white" : "icon fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                    xlinkHref: `/icons.svg#icon-${category}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-2xs font-medium capitalize",
                                                children: category
                                            })
                                        ]
                                    }, i);
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activity_item);


/***/ })

};
;