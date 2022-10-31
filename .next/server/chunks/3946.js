"use strict";
exports.id = 3946;
exports.ids = [3946];
exports.modules = {

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const News_item = ({ data , classes ="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3" ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes,
            children: data.map((item)=>{
                const { id , image , title , text , date , time  } = item;
                const link = image.split("/").slice(3).toString().replace(".jpg", "");
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-2xl overflow-hidden transition-shadow hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: "group overflow-hidden ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/single_post/${link}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image,
                                            alt: title,
                                            className: "h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-3 flex flex-wrap items-center space-x-1 text-xs",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent",
                                                children: "Deothemes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "dark:text-jacarta-400",
                                                children: "in"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-accent inline-flex flex-wrap items-center space-x-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        children: "NFT's"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        children: "DIGITAL ART"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: `single_post/${link}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    " ",
                                                    title,
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "dark:text-jacarta-200 mb-8",
                                        children: text
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                    children: date
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "\u2022"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: time
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }, id);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News_item);


/***/ }),

/***/ 1525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ news_data),
/* harmony export */   "s": () => (/* binding */ single_news_data)
/* harmony export */ });
const news_data = [
    {
        id: "5Mint your own Tezos collections",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_1.jpg",
        date: "5 Feb",
        time: "3 min read"
    },
    {
        id: "0Mint your own Tezos collections",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_2.jpg",
        date: "5 Feb",
        time: "3 min read"
    },
    {
        id: "1List your collection for secondary sales",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "List your collection for secondary sales",
        image: "/images/blog/post_3.jpg",
        date: "22 Feb",
        time: "3 min read"
    },
    {
        id: "2The biggest moves in NFTs, Bitcoin, crypto rules",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "The biggest moves in NFTs, Bitcoin, crypto rules",
        image: "/images/blog/post_4.jpg",
        date: "18 Jan",
        time: "3 min read"
    },
    {
        id: "3Incredible Amount of Developer Energy' in Web3",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Incredible Amount of Developer Energy' in Web3",
        image: "/images/blog/post_5.jpg",
        date: "15 Jan",
        time: "3 min read"
    },
    {
        id: "4Inflation is up, it matters: High prices plague Biden's",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Inflation is up, it matters: High prices plague Biden's",
        image: "/images/blog/post_6.jpg",
        date: "23 Dec",
        time: "3 min read"
    },
    {
        id: "6Mint your own Tezos collections",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_1.jpg",
        date: "5 Feb",
        time: "3 min read"
    },
    {
        id: "7Mint your own Tezos collections",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_2.jpg",
        date: "5 Feb",
        time: "3 min read"
    },
    {
        id: "8List your collection for secondary sales",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "List your collection for secondary sales",
        image: "/images/blog/post_3.jpg",
        date: "22 Feb",
        time: "3 min read"
    },
    {
        id: "9The biggest moves in NFTs, Bitcoin, crypto rules",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "The biggest moves in NFTs, Bitcoin, crypto rules",
        image: "/images/blog/post_4.jpg",
        date: "18 Jan",
        time: "3 min read"
    },
    {
        id: "10Incredible Amount of Developer Energy' in Web3",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Incredible Amount of Developer Energy' in Web3",
        image: "/images/blog/post_5.jpg",
        date: "15 Jan",
        time: "3 min read"
    },
    {
        id: "11Inflation is up, it matters: High prices plague Biden's",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Inflation is up, it matters: High prices plague Biden's",
        image: "/images/blog/post_6.jpg",
        date: "23 Dec",
        time: "3 min read"
    }, 
];
const single_news_data = [
    {
        id: "post_1",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_1.jpg",
        date: "5 Feb",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    },
    {
        id: "post_2",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Mint your own Tezos collections",
        image: "/images/blog/post_2.jpg",
        date: "5 Feb",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    },
    {
        id: "post_3",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "List your collection for secondary sales",
        image: "/images/blog/post_3.jpg",
        date: "22 Feb",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    },
    {
        id: "post_4",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "The biggest moves in NFTs, Bitcoin, crypto rules",
        image: "/images/blog/post_4.jpg",
        date: "18 Jan",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    },
    {
        id: "post_5",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Incredible Amount of Developer Energy' in Web3",
        image: "/images/blog/post_5.jpg",
        date: "15 Jan",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    },
    {
        id: "post_6",
        text: "Since we launched Tezos at the end of 2021, many awesome creators...",
        title: "Inflation is up, it matters: High prices plague Biden's",
        image: "/images/blog/post_6.jpg",
        date: "23 Dec",
        time: "3 min read",
        subImages: [
            "/images/blog/gallery_1.jpg",
            "/images/blog/gallery_2.jpg"
        ],
        authorImage: "/images/blog/author_large.jpg",
        authorName: "Deothemes"
    }, 
];



/***/ })

};
;