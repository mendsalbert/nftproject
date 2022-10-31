"use strict";
exports.id = 8560;
exports.ids = [8560];
exports.modules = {

/***/ 8560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ filterCategoryItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./data/categories_data.js
var categories_data = __webpack_require__(1801);
// EXTERNAL MODULE: ./components/dropdown/recently_added_dropdown.jsx
var recently_added_dropdown = __webpack_require__(3429);
// EXTERNAL MODULE: external "react-accessible-accordion"
var external_react_accessible_accordion_ = __webpack_require__(3282);
;// CONCATENATED MODULE: ./components/collectrions/collection_category_filter.jsx




const Collection_category_filter = ()=>{
    const { 0: propertiesModal , 1: setPropertiesModal  } = (0,external_react_.useState)(false);
    const { 0: propetiesAccordionValue , 1: setPropetiesAccordionValue  } = (0,external_react_.useState)(null);
    const handlePropartiesAccordion = (parentId, e)=>{
        setPropetiesAccordionValue(parentId);
        const target = e.target.closest(".accordion-item");
        target.classList.toggle("show-accordion");
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
    const blockchainText = [
        {
            id: 1,
            text: "Ethereum"
        },
        {
            id: 2,
            text: "Polygon"
        },
        {
            id: 3,
            text: "Flow"
        },
        {
            id: 4,
            text: "Tezos"
        }, 
    ];
    const categoryText = [
        {
            id: 1,
            text: "All"
        },
        {
            id: 2,
            text: "Art"
        },
        {
            id: 3,
            text: "Collectibles"
        },
        {
            id: 4,
            text: "Domain"
        },
        {
            id: 5,
            text: "Music"
        },
        {
            id: 6,
            text: "Photography"
        },
        {
            id: 7,
            text: "Virtual World"
        }, 
    ];
    const saleTypeText = [
        {
            id: 1,
            text: "Timed auction"
        },
        {
            id: 2,
            text: "Fixed price"
        },
        {
            id: 3,
            text: "Not for sale"
        },
        {
            id: 4,
            text: "Open for offers"
        }, 
    ];
    const propertiesText = [
        {
            parentId: 1,
            titleText: "Background",
            properties: [
                {
                    id: 1,
                    color: "red",
                    point: "14"
                },
                {
                    id: 2,
                    color: "green",
                    point: "56"
                },
                {
                    id: 3,
                    color: "blue",
                    point: "11"
                },
                {
                    id: 4,
                    color: "white",
                    point: "25"
                }, 
            ]
        },
        {
            parentId: 2,
            titleText: "Eyes",
            properties: [
                {
                    id: 1,
                    color: "red",
                    point: "14"
                },
                {
                    id: 2,
                    color: "green",
                    point: "56"
                },
                {
                    id: 3,
                    color: "blue",
                    point: "11"
                },
                {
                    id: 4,
                    color: "white",
                    point: "25"
                }, 
            ]
        },
        {
            parentId: 3,
            titleText: "face",
            properties: [
                {
                    id: 1,
                    color: "red",
                    point: "14"
                },
                {
                    id: 2,
                    color: "green",
                    point: "56"
                },
                {
                    id: 3,
                    color: "blue",
                    point: "11"
                },
                {
                    id: 4,
                    color: "white",
                    point: "25"
                }, 
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-8 flex flex-wrap items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(recently_added_dropdown/* default */.Z, {
                            data: blockchainText,
                            dropdownFor: "blockchain"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(recently_added_dropdown/* default */.Z, {
                            data: categoryText,
                            dropdownFor: "category"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-1 mr-2.5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
                                    onClick: ()=>setPropertiesModal(true)
                                    ,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Properties"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: propertiesModal ? "modal fade show block" : "modal fade",
                                    id: "propertiesModal",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "modal-dialog max-w-md",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "modal-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "modal-header",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "modal-title",
                                                            id: "propertiesModalLabel",
                                                            children: "Properties"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "btn-close",
                                                            onClick: ()=>setPropertiesModal(false)
                                                            ,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 24 24",
                                                                width: "24",
                                                                height: "24",
                                                                className: "fill-jacarta-700 h-6 w-6 dark:fill-white",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        fill: "none",
                                                                        d: "M0 0h24v24H0z"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "modal-body",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "accordion",
                                                        id: "accordionProps",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-item dark:border-jacarta-600 border-jacarta-100 border-b",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_accessible_accordion_.Accordion, {
                                                                children: propertiesText.map((item)=>{
                                                                    const { parentId , titleText , properties  } = item;
                                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemHeading, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemButton, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                        className: "accordion-header",
                                                                                        id: "prop-heading-1",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                                            className: "accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 relative flex w-full items-center justify-between bg-white px-6 py-5 dark:text-white",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                    children: titleText
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    width: "24",
                                                                                                    height: "24",
                                                                                                    className: "accordion-arrow fill-jacarta-700 h-4 w-4 transition-transform dark:fill-white",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                                            fill: "none",
                                                                                                            d: "M0 0h24v24H0z"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                                            d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemPanel, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    id: "prop-background",
                                                                                    className: "accordion-collapse",
                                                                                    children: properties.map((proparty)=>{
                                                                                        const { id , color , point  } = proparty;
                                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "accordion-body px-2 pb-4",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                className: "flex flex-col",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                                                    className: "dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 flex items-center justify-between rounded-xl px-4 py-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: color
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: point
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        }, id);
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }, parentId);
                                                                })
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "modal-footer",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center justify-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "button",
                                                                className: "text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white",
                                                                children: "Clear All"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "button",
                                                                className: "bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                                                children: "Apply"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl",
                                    "aria-labelledby": "propertiesFilter",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "flex flex-col flex-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-jacarta-700 dark:text-white",
                                                            children: "All"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            width: "24",
                                                            height: "24",
                                                            className: "fill-accent mb-[3px] h-4 w-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    fill: "none",
                                                                    d: "M0 0h24v24H0z"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Art"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Collectibles"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Domain"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Music"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Photography"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                                                    children: "Virtual World"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(recently_added_dropdown/* default */.Z, {
                            data: saleTypeText,
                            dropdownFor: "sale-type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(recently_added_dropdown/* default */.Z, {
                            data: saleTypeText,
                            dropdownFor: "price-range"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(recently_added_dropdown/* default */.Z, {
                    data: sortText,
                    dropdownFor: "recently_added"
                })
            ]
        })
    });
};
/* harmony default export */ const collection_category_filter = (Collection_category_filter);

// EXTERNAL MODULE: ./components/categories/categoryItem.jsx
var categoryItem = __webpack_require__(6367);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/counterSlice.js
var counterSlice = __webpack_require__(4954);
;// CONCATENATED MODULE: ./components/categories/filterCategoryItem.jsx







const FilterCategoryItem = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch((0,counterSlice/* updateTrendingCategoryItemData */.Nf)(categories_data/* trendingCategoryData.slice */.c.slice(0, 8)));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(collection_category_filter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(categoryItem/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const filterCategoryItem = (FilterCategoryItem);


/***/ })

};
;