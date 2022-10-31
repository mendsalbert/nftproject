"use strict";
exports.id = 7698;
exports.ids = [7698];
exports.modules = {

/***/ 5094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Accordion = ({ data  })=>{
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleAccordion = (id)=>{
        if (selected === id) {
            setSelected(null);
        } else {
            setSelected(id);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-display text-jacarta-700 mb-10 text-center text-xl font-medium dark:text-white",
                children: "Frequently asked questions"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-jacarta-300 mx-auto mb-10 max-w-md text-center text-lg",
                children: [
                    "Join our community now to get free updates and also alot of freebies are waiting for you Or ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-accent",
                            children: "Contact Support"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "accordion mx-auto max-w-[35rem]",
                id: "accordionFAQ",
                children: data.map((item)=>{
                    const { id , title , text  } = item;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "accordion-item dark:border-jacarta-600 border-jacarta-100 mb-5 overflow-hidden rounded-lg border",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "accordion-header",
                                id: "faq-heading-1",
                                onClick: ()=>handleAccordion(id)
                                ,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: selected === id ? "accordion-button dark:bg-jacarta-700 font-display text-jacarta-700 relative flex w-full items-center justify-between bg-white px-4 py-3 text-left dark:text-white " : "accordion-button dark:bg-jacarta-700 font-display text-jacarta-700 collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left dark:text-white ",
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "accordion-arrow fill-jacarta-700 h-4 w-4 shrink-0 transition-transform dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "faq-1",
                                className: selected === id ? "accordion-collapse collapse show " : "accordion-collapse collapse",
                                "aria-labelledby": "faq-heading-1",
                                "data-bs-parent": "#accordionFAQ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "accordion-body dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 border-t bg-white p-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "dark:text-jacarta-200",
                                        children: text
                                    })
                                })
                            })
                        ]
                    }, id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ accordion_data),
/* harmony export */   "j": () => (/* binding */ help_center_data)
/* harmony export */ });
const help_center_data = [
    {
        id: "0Getting started",
        title: "Getting started",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    },
    {
        id: "1Buying",
        title: "Buying",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    },
    {
        id: "2Selling",
        title: "Selling",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    },
    {
        id: "3Creating",
        title: "Creating",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    },
    {
        id: "4User Safety",
        title: "User Safety",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    },
    {
        id: "5Partners",
        title: "Partners",
        text: "Learn how to create an account, set up your wallet, and what you can do."
    }, 
];
const accordion_data = [
    {
        id: "0How do I create an NFT?",
        title: "How do I create an NFT?",
        text: "Learn how to create your very first NFT and how to create your NFT collections. Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental."
    },
    {
        id: "1How can I stay safe and protect my NFTs ?",
        title: "How can I stay safe and protect my NFTs ?",
        text: "Learn how to create your very first NFT and how to create your NFT collections. Unique, fully 3D andbuilt to unite the design multiverse. Designed and styled by Digimental.\n                  "
    },
    {
        id: "2What are the key terms to know in NFTs and Web3 ?",
        title: "What are the key terms to know in NFTs and Web3 ?",
        text: "Learn how to create your very first NFT and how to create your NFT collections. Unique, fully 3D andbuilt to unite the design multiverse. Designed and styled by Digimental.\n                  "
    },
    {
        id: "3How do I sell an NFT ?",
        title: "How do I sell an NFT ?",
        text: "Learn how to create your very first NFT and how to create your NFT collections. Unique, fully 3D andbuilt to unite the design multiverse. Designed and styled by Digimental.\n                  "
    },
    {
        id: "4Smart Contract Upgrade: What You Need to Know",
        title: "Smart Contract Upgrade: What You Need to Know",
        text: "Learn how to create your very first NFT and how to create your NFT collections. Unique, fully 3D andbuilt to unite the design multiverse. Designed and styled by Digimental.\n                  "
    }, 
];



/***/ })

};
;