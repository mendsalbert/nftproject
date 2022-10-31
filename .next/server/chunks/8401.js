exports.id = 8401;
exports.ids = [8401];
exports.modules = {

/***/ 4144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__]);
([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Bids = ({ classes ="pt-10 pb-24" , bgWhite , nft  })=>{
    // console.log(nft);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classes,
        children: [
            bgWhite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/gradient_light.jpg",
                    alt: "gradient",
                    className: "h-full w-full"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_2__/* .HeadLine */ .Sn, {
                        text: "Hot Bids",
                        image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png",
                        classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            nft: nft
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bids);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ newseLatter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/headLine.jsx
var headLine = __webpack_require__(422);
;// CONCATENATED MODULE: ./data/newseLatterData.js
const newseLatterData = [
    {
        id: "1",
        icon: {
            parentBg: "#beaaf7",
            childBg: "rgb(131 88 255) ",
            svg: "icon-wallet"
        },
        title: [
            "Set",
            "up",
            "your",
            "wallet"
        ],
        text: "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the topright corner."
    },
    {
        id: "2",
        icon: {
            parentBg: "#c4f2e3",
            childBg: "rgb(16 185 129)",
            svg: "icon-wallet"
        },
        title: [
            "Create",
            "Your",
            "Collection"
        ],
        text: "Click Create and set up your collection. Add social links, a description, profile & banner images, andset a secondary sales fee."
    },
    {
        id: "3",
        icon: {
            parentBg: "#cddffb",
            childBg: "rgb(66 138 248)",
            svg: "icon-gallery"
        },
        title: [
            "Add",
            "Your",
            "NFTs"
        ],
        text: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTswith properties, stats."
    },
    {
        id: "4",
        icon: {
            parentBg: "#ffd0d0",
            childBg: "rgb(239 68 68)",
            svg: "icon-list"
        },
        title: [
            "List",
            "Them",
            "For",
            "Sale"
        ],
        text: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want tosell your NFTs!"
    }, 
];


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/blog/newseLatter.jsx





const NewseLatter = ({ bgWhite =true  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "dark:bg-jacarta-800 relative py-24",
        children: [
            bgWhite && /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/gradient_light.jpg",
                    alt: "gradient",
                    className: "h-full",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(headLine/* default */.Z, {
                        text: "Create and sell your NFTs",
                        classes: "font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4",
                        children: newseLatterData.map((item)=>{
                            const { id , icon , title , text  } = item;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center newseLatter-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `mb-6 inline-flex rounded-full p-3`,
                                        style: {
                                            backgroundColor: icon.parentBg
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `inline-flex h-12 w-12 items-center justify-center rounded-full`,
                                            style: {
                                                backgroundColor: icon.childBg
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "icon icon-wallet h-5 w-5 fill-white",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                    xlinkHref: `/icons.svg#${icon.svg}`
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "font-display text-jacarta-700 mb-4 text-lg dark:text-white",
                                        children: [
                                            id,
                                            ". ",
                                            title
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "dark:text-jacarta-300",
                                        children: text
                                    })
                                ]
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white",
                        children: "Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Xhibiter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto mt-7 max-w-md text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "relative",
                            onSubmit: (e)=>e.preventDefault()
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    placeholder: "Email address",
                                    className: "dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white",
                                    children: "Subscribe"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const newseLatter = (NewseLatter);


/***/ }),

/***/ 3692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_Browse_category_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2594);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Browse_category_carousel = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                // when window width is >= 640px
                100: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 768px
                700: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                900: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 7,
                    spaceBetween: 30
                }
            },
            className: " card-slider-4-columns !py-5",
            style: {
                transform: "scaleX(1.2)"
            },
            children: _data_Browse_category_data__WEBPACK_IMPORTED_MODULE_4__/* ["default"].map */ .Z.map((item)=>{
                const { id , image , title , bgColor  } = item;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/collection/explore_collection",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        style: {
                                            backgroundColor: bgColor
                                        },
                                        className: ` rounded-t-[0.625rem] w-full rounded-[0.625rem`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image,
                                            alt: "item 1",
                                            className: "w-full"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-display text-jacarta-700 text-lg dark:text-white",
                                            children: title
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }, id);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browse_category_carousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_bids_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2531);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4954);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6155);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const BidsCarousel = ({ nft  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    const handleclick = ()=>{
        console.log("clicked on ");
    };
    console.log(nft?.length);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar
                ],
                spaceBetween: 30,
                slidesPerView: "auto",
                loop: true,
                breakpoints: {
                    240: {
                        slidesPerView: 1
                    },
                    565: {
                        slidesPerView: 2
                    },
                    1000: {
                        slidesPerView: 3
                    },
                    1100: {
                        slidesPerView: 4
                    }
                },
                navigation: {
                    nextEl: ".bids-swiper-button-next",
                    prevEl: ".bids-swiper-button-prev"
                },
                className: " card-slider-4-columns !py-5",
                children: nft?.map((item)=>{
                    const { tokenId , image , name , description , owner , price , seller  } = item;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        className: "text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: "/item/" + tokenId?.toString(),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: image?.toString(),
                                                        alt: name,
                                                        height: 230,
                                                        width: 230,
                                                        layout: "responsive",
                                                        objectFit: "cover",
                                                        className: "rounded-[0.625rem] w-full",
                                                        loading: "lazy"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-4 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "/item/" + tokenId?.toString(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                                                        children: name
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "ETH"
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/eth-icon.svg",
                                                            alt: "",
                                                            className: "w-3 h-3 mr-1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-green text-sm font-medium tracking-tight",
                                                        children: [
                                                            parseFloat(Number(ethers__WEBPACK_IMPORTED_MODULE_13__.ethers.utils.formatEther(price?.toString() || 0)) || 0).toFixed(3) || 0,
                                                            " ",
                                                            " ETH"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-8 flex items-center justify-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "text-accent font-display text-sm font-semibold",
                                            onClick: ()=>dispatch((0,_redux_counterSlice__WEBPACK_IMPORTED_MODULE_10__/* .bidsModalShow */ .$f)())
                                            ,
                                            children: "Place bid"
                                        })
                                    })
                                ]
                            })
                        })
                    }, tokenId?.toString());
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowLeft, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowRight, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BidsCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ categories_Auctions_categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/headLine.jsx
var headLine = __webpack_require__(422);
;// CONCATENATED MODULE: ./data/auctions_category_data.js
const auctions_category_data = [
    {
        id: "0Monkeyme#155",
        bigImage: "/images/products/item_8.jpg",
        creatorImage: "/images/avatars/creator_1.png",
        ownerImage: "/images/avatars/owner_1.png",
        price: "1.3 ETH",
        title: "Monkeyme#155",
        likes: "25",
        auction_timer: "000"
    },
    {
        id: "1Splendid Girl",
        bigImage: "/images/products/item_6.jpg",
        creatorImage: "/images/avatars/creator_4.png",
        ownerImage: "/images/avatars/owner_4.png",
        price: "10 ETH",
        title: "Splendid Girl",
        likes: "60",
        auction_timer: "000"
    },
    {
        id: "2Asuna #1649",
        bigImage: "/images/products/item_11.jpg",
        creatorImage: "/images/avatars/creator_8.png",
        ownerImage: "/images/avatars/owner_5.png",
        price: "0.8 ETH",
        title: "Asuna #1649",
        likes: "34",
        auction_timer: "000"
    },
    {
        id: "3Artof Eve",
        bigImage: "/images/products/item_10.jpg",
        creatorImage: "/images/avatars/creator_2.png",
        ownerImage: "/images/avatars/owner_7.png",
        price: "1.75 ETH",
        title: "Artof Eve",
        likes: "15",
        auction_timer: "550000000"
    },
    {
        id: "4Azuki #4017",
        bigImage: "/images/products/item_17.jpg",
        creatorImage: "/images/avatars/creator_2.png",
        ownerImage: "/images/avatars/owner_2.png",
        price: "9.3712 ETH",
        title: "Azuki #4017",
        likes: "334",
        auction_timer: "000"
    },
    {
        id: "5Block #2788",
        bigImage: "/images/products/item_18.jpg",
        creatorImage: "/images/avatars/creator_9.png",
        ownerImage: "/images/avatars/owner_8.png",
        price: "7.3 ETH",
        title: "Block #2788",
        likes: "52",
        auction_timer: "560000000"
    },
    {
        id: "6Crypto bull #6195",
        bigImage: "/images/products/item_19.jpg",
        creatorImage: "/images/avatars/creator_6.png",
        ownerImage: "/images/avatars/owner_4.png",
        price: "0.32 ETH",
        title: "Crypto bull #6195",
        likes: "90",
        auction_timer: "500000000"
    },
    {
        id: "7TSAR\xc9VNA",
        bigImage: "/images/products/item_20.jpg",
        creatorImage: "/images/avatars/creator_3.png",
        ownerImage: "/images/avatars/owner_3.png",
        price: "4.7 ETH",
        title: "TSAR\xc9VNA",
        likes: "260",
        auction_timer: "000"
    },
    {
        id: "8Monkeyme#155",
        bigImage: "/images/products/item_8.jpg",
        creatorImage: "/images/avatars/creator_1.png",
        ownerImage: "/images/avatars/owner_1.png",
        price: "1.3 ETH",
        title: "Monkeyme#155",
        likes: "25",
        auction_timer: "000"
    },
    {
        id: "9Splendid Girl",
        bigImage: "/images/products/item_6.jpg",
        creatorImage: "/images/avatars/creator_4.png",
        ownerImage: "/images/avatars/owner_4.png",
        price: "10 ETH",
        title: "Splendid Girl",
        likes: "60",
        auction_timer: "000"
    },
    {
        id: "10Asuna #1649",
        bigImage: "/images/products/item_11.jpg",
        creatorImage: "/images/avatars/creator_8.png",
        ownerImage: "/images/avatars/owner_5.png",
        price: "0.8 ETH",
        title: "Asuna #1649",
        likes: "34",
        auction_timer: "000"
    },
    {
        id: "11Artof Eve",
        bigImage: "/images/products/item_10.jpg",
        creatorImage: "/images/avatars/creator_2.png",
        ownerImage: "/images/avatars/owner_7.png",
        price: "1.75 ETH",
        title: "Artof Eve",
        likes: "15",
        auction_timer: "550000000"
    },
    {
        id: "12Azuki #4017",
        bigImage: "/images/products/item_17.jpg",
        creatorImage: "/images/avatars/creator_2.png",
        ownerImage: "/images/avatars/owner_2.png",
        price: "9.3712 ETH",
        title: "Azuki #4017",
        likes: "334",
        auction_timer: "000"
    },
    {
        id: "13Block #2788",
        bigImage: "/images/products/item_18.jpg",
        creatorImage: "/images/avatars/creator_9.png",
        ownerImage: "/images/avatars/owner_8.png",
        price: "7.3 ETH",
        title: "Block #2788",
        likes: "52",
        auction_timer: "560000000"
    },
    {
        id: "14Crypto bull #6195",
        bigImage: "/images/products/item_19.jpg",
        creatorImage: "/images/avatars/creator_6.png",
        ownerImage: "/images/avatars/owner_4.png",
        price: "0.32 ETH",
        title: "Crypto bull #6195",
        likes: "90",
        auction_timer: "500000000"
    },
    {
        id: "15TSAR\xc9VNA",
        bigImage: "/images/products/item_20.jpg",
        creatorImage: "/images/avatars/creator_3.png",
        ownerImage: "/images/avatars/owner_3.png",
        price: "4.7 ETH",
        title: "TSAR\xc9VNA",
        likes: "260",
        auction_timer: "000"
    }, 
];
/* harmony default export */ const data_auctions_category_data = (auctions_category_data);

// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(4787);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);
;// CONCATENATED MODULE: ./components/Countdown_timer.jsx



const Completionist = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap",
            "data-countdown": "2022-05-14T10:45:30",
            "data-expired": "This auction has ended",
            children: "This auction has ended"
        })
    });
};
const renderer = ({ days , hours , minutes , seconds , completed  })=>{
    if (completed) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Completionist, {});
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png",
                        alt: "",
                        className: "h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap",
                        children: [
                            days,
                            " : ",
                            hours,
                            " : ",
                            minutes,
                            " : ",
                            seconds
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "js-countdown-left text-jacarta-700",
                        "data-countdownleft": "left",
                        children: "left"
                    })
                ]
            })
        });
    }
};
const Countdown_timer = ({ time  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_countdown_default()), {
        date: Date.now() + time,
        renderer: renderer
    });
};
/* harmony default export */ const components_Countdown_timer = (Countdown_timer);

// EXTERNAL MODULE: ./components/dropdown/Auctions_dropdown.jsx
var Auctions_dropdown = __webpack_require__(2913);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./redux/counterSlice.js
var counterSlice = __webpack_require__(4954);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/tippy.js/themes/light.css
var light = __webpack_require__(1912);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/likes.jsx
var components_likes = __webpack_require__(6155);
;// CONCATENATED MODULE: ./components/categories/Auctions_categories.jsx














const Auctions_categories = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: data , 1: setData  } = (0,external_react_.useState)(data_auctions_category_data.slice(0, 8));
    const { 0: loadMoreBtn , 1: setLoadMoreBtn  } = (0,external_react_.useState)(true);
    const handleloadMore = ()=>{
        setData(data_auctions_category_data);
        setLoadMoreBtn(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "py-24",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(headLine/* default */.Z, {
                        image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png",
                        text: "Live Auctions",
                        classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4",
                        children: data.map((item)=>{
                            const { id , bigImage , creatorImage , ownerImage , title , price , likes , auction_timer  } = item;
                            const itemLink = bigImage.split("/").slice(-1).toString().replace(".jpg", "").replace(".gif", "");
                            return /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-4 flex items-center justify-between relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex -space-x-2 ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                                                            theme: "tomato",
                                                            content: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "py-1 px-2 block",
                                                                children: "Creator: Sussygirl"
                                                            }),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: /item/ + itemLink,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: creatorImage,
                                                                        alt: "creator",
                                                                        className: "h-6 w-6 rounded-full",
                                                                        height: 24,
                                                                        width: 24
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                                                            content: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "py-1 px-2 block",
                                                                children: "Owner: Sussygirl"
                                                            }),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: /item/ + itemLink,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: ownerImage,
                                                                        alt: "creator",
                                                                        className: "h-6 w-6 rounded-full",
                                                                        height: 24,
                                                                        width: 24
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Auctions_dropdown/* default */.Z, {
                                                    classes: "dark:hover:bg-jacarta-600 dropdown hover:bg-jacarta-100 rounded-full "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: /item/ + itemLink,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: bigImage,
                                                            alt: "item 8",
                                                            className: "w-full rounded-[0.625rem]",
                                                            loading: "lazy",
                                                            height: "100%",
                                                            width: "100%",
                                                            layout: "responsive",
                                                            objectFit: "cover"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_Countdown_timer, {
                                                    time: +auction_timer
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-7 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: /item/ + itemLink,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                                                            children: title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                                                            content: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "py-1 px-2 block",
                                                                children: "ETH"
                                                            }),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                className: "h-4 w-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                                    xlinkHref: "/icons.svg#icon-ETH"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "dark:text-jacarta-300",
                                                    children: "Highest Bid"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "dark:text-jacarta-100 text-jacarta-700",
                                                    children: price
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-8 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "text-accent font-display text-sm font-semibold",
                                                    onClick: ()=>dispatch((0,counterSlice/* bidsModalShow */.$f)())
                                                    ,
                                                    children: "Place bid"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_likes/* default */.Z, {
                                                    like: likes,
                                                    classes: "flex items-center space-x-1"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, id);
                        })
                    }),
                    loadMoreBtn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-10 text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleloadMore,
                            className: "bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                            children: "Load More"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const categories_Auctions_categories = (Auctions_categories);


/***/ }),

/***/ 2579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3692);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_3__]);
([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Browse_category = ({ bgWhite  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: bgWhite ? "pt-24 pb-16 relative" : "py-24 relative",
            children: [
                bgWhite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                    className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/images/gradient_light.jpg",
                        alt: "gradient",
                        className: "h-full",
                        layout: "fill"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_2__/* .HeadLine */ .Sn, {
                    text: "Browse by category",
                    classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browse_category);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_categories_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1801);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8401);
/* harmony import */ var _trending_categories_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_3__]);
_component__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 



const Tranding_category = ({ nft  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "py-24",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component__WEBPACK_IMPORTED_MODULE_3__/* .HeadLine */ .Sn, {
                    text: "NFTs",
                    image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png",
                    classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_trending_categories_items__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    nft: nft
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tranding_category);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(422);
/* harmony import */ var _carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7996);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_3__]);
_carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Feature_collections = ({ bgWhite =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "py-24 relative",
            children: [
                bgWhite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                    className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/images/gradient_light.jpg",
                        alt: "gradient",
                        className: "h-full",
                        layout: "fill"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png",
                            text: "Featured collections",
                            classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature_collections);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_collection_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2538);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(422);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable @next/next/no-img-element */ 




const Top_collection = ()=>{
    const { 0: timeActiveText , 1: setTimeActiveText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("last 7 days");
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_collection_data__WEBPACK_IMPORTED_MODULE_3__/* .collection_data */ .A3);
    const { 0: dropdownShow , 1: setDropdownShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timeText = [
        {
            id: 1,
            text: "Last 24 Hours"
        },
        {
            id: 2,
            text: "Last 7 days"
        },
        {
            id: 3,
            text: "Last 30 days"
        }, 
    ];
    const handleFilter = (text)=>{
        setTimeActiveText(text);
        const newCollectionData = _data_collection_data__WEBPACK_IMPORTED_MODULE_3__/* .collection_data.filter */ .A3.filter((item)=>{
            if (text === "Last 30 days") {
                return item;
            }
            return item.postDate === text;
        });
        setData(newCollectionData);
    };
    const handleDropdown = (e)=>{
        window.addEventListener("click", (w)=>{
            if (w.target.closest(".dropdown-toggle")) {
                if (dropdownShow) {
                    setDropdownShow(false);
                } else {
                    setDropdownShow(true);
                }
            } else {
                setDropdownShow(false);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "dark:bg-jacarta-800 relative py-24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                    className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/gradient_light.jpg",
                        alt: "gradient",
                        className: "h-full w-full"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "font-display text-jacarta-700 mb-12 text-center text-lg sm:text-3xl dark:text-white flex justify-center items-center gap-x-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headLine__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    text: "Top collections over",
                                    classes: "inline"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dropdown cursor-pointer relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "dropdown-toggle text-accent inline-flex items-center",
                                            type: "button",
                                            onClick: (e)=>handleDropdown(e)
                                            ,
                                            children: [
                                                timeActiveText,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    width: "24",
                                                    height: "24",
                                                    className: "fill-accent h-8 w-8",
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
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: dropdownShow ? "dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-700 dark:text-white absolute m-0 top-full" : "dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-700 dark:text-white absolute m-0 top-full",
                                            children: timeText.map(({ id , text  })=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        handleFilter(text);
                                                    },
                                                    className: "block dropdown-text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "dropdown-item font-normal text-base dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block rounded-xl px-5 py-2 transition-colors",
                                                        children: text
                                                    })
                                                }, id);
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4",
                            children: data.map((item)=>{
                                const { id , image , title , icon , amount , postTime  } = item;
                                const itemLink = image.split("/").slice(-1).toString().replace(".jpg", "");
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border-jacarta-100 dark:bg-jacarta-700 rounded-2xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                            className: "mr-4 shrink-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/collection/" + itemLink,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "relative block",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: image,
                                                            alt: title,
                                                            className: "rounded-2lg",
                                                            height: 48,
                                                            width: 48,
                                                            objectFit: "cover"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white",
                                                            children: id
                                                        }),
                                                        icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white",
                                                            "data-tippy-content": "Verified Collection",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 24 24",
                                                                width: "24",
                                                                height: "24",
                                                                className: "h-[.875rem] w-[.875rem] fill-white",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fill: "none",
                                                                        d: "M0 0h24v24H0z"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/collection/" + itemLink,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "block",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white",
                                                            children: title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "dark:text-jacarta-300 text-sm",
                                                    children: [
                                                        amount,
                                                        " ETH"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, id);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-10 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/rankings",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                    children: "Go to Rankings"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Top_collection);


/***/ }),

/***/ 8401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* reexport safe */ _categories_tranding_categories_jsx__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "AV": () => (/* reexport safe */ _hero_hero_3_jsx__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "Ax": () => (/* reexport safe */ _collectrions_top_collection_jsx__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Iv": () => (/* reexport safe */ _categories_Auctions_categories_jsx__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Sn": () => (/* reexport safe */ _headLine_jsx__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "T8": () => (/* reexport safe */ _bids_bids_jsx__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "V2": () => (/* reexport safe */ _collectrions_Feature_collections_jsx__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _hero_hero_jsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "cU": () => (/* reexport safe */ _blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "fW": () => (/* reexport safe */ _tabs_Tabs_jsx__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "gc": () => (/* reexport safe */ _categories_Browse_category_jsx__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "wV": () => (/* reexport safe */ _partners_Partners_jsx__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _hero_hero_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4838);
/* harmony import */ var _bids_bids_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4144);
/* harmony import */ var _collectrions_top_collection_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3668);
/* harmony import */ var _categories_tranding_categories_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9393);
/* harmony import */ var _headLine_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(422);
/* harmony import */ var _blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7642);
/* harmony import */ var _categories_Auctions_categories_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4605);
/* harmony import */ var _collectrions_Feature_collections_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4828);
/* harmony import */ var _partners_Partners_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(846);
/* harmony import */ var _categories_Browse_category_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2579);
/* harmony import */ var _hero_hero_3_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3980);
/* harmony import */ var _tabs_Tabs_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bids_bids_jsx__WEBPACK_IMPORTED_MODULE_1__, _categories_tranding_categories_jsx__WEBPACK_IMPORTED_MODULE_3__, _collectrions_Feature_collections_jsx__WEBPACK_IMPORTED_MODULE_7__, _categories_Browse_category_jsx__WEBPACK_IMPORTED_MODULE_9__, _hero_hero_3_jsx__WEBPACK_IMPORTED_MODULE_10__]);
([_bids_bids_jsx__WEBPACK_IMPORTED_MODULE_1__, _categories_tranding_categories_jsx__WEBPACK_IMPORTED_MODULE_3__, _collectrions_Feature_collections_jsx__WEBPACK_IMPORTED_MODULE_7__, _categories_Browse_category_jsx__WEBPACK_IMPORTED_MODULE_9__, _hero_hero_3_jsx__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const hero = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative pb-10 pt-20 md:pt-32 h-1527",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                className: "pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/gradient.jpg",
                    alt: "gradient",
                    className: "h-full w-full"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                className: "pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/gradient_dark.jpg",
                    alt: "gradient dark",
                    className: "h-full w-full"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container h-full mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid h-full items-center gap-4 md:grid-cols-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl",
                                    children: "Buy, sell and collect NFTs."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "dark:text-jacarta-200 mb-8 text-center text-lg md:text-left",
                                    children: "The worlds largest digital marketplace for crypto collectibles and non-fungible tokens"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/create",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                                children: "Upload"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/collection/explore_collection",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white",
                                                children: "Explore"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-6 xl:col-span-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative text-center md:pl-8 md:text-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/land.jpeg",
                                    alt: "",
                                    className: "hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);


/***/ }),

/***/ 3980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_hero_3_swiper_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// Import Swiper styles




const Hero_3 = ()=>{
    const { 0: activeThumb , 1: setActiveThumb  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "relative h-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_4__.FreeMode,
                        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_4__.Thumbs,
                        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                    ],
                    loop: true,
                    spaceBetween: 10,
                    navigation: true,
                    thumbs: {
                        swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    className: "full-slider h-screen",
                    children: _data_hero_3_swiper_data__WEBPACK_IMPORTED_MODULE_6__/* .hero_3_swiper_data.map */ .a.map((item)=>{
                        const { image , id , title , name , titleLink , userLink  } = item;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "swiper-slide after:bg-jacarta-900/60 after:absolute after:inset-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "container relative z-10 h-full pt-40",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "font-display text-2xl font-semibold text-white",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: titleLink,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: userLink,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-2xs font-medium text-white",
                                                    children: name
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: image,
                                        className: "absolute inset-0 h-full w-full object-cover",
                                        alt: title,
                                        layout: "fill"
                                    })
                                ]
                            })
                        }, id);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-x-0 bottom-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_4__.FreeMode,
                                swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_4__.Thumbs
                            ],
                            onSwiper: setActiveThumb,
                            loop: true,
                            spaceBetween: 10,
                            slidesPerView: "auto",
                            breakpoints: {
                                100: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 3
                                }
                            },
                            className: " full-slider-thumbs swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs",
                            children: _data_hero_3_swiper_data__WEBPACK_IMPORTED_MODULE_6__/* .hero_3_swiper_thumbs_data.map */ .Z.map((item)=>{
                                const { image , id  } = item;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                    className: "swiper-slide cursor-pointer rounded p-5 swiper-slide-duplicate swiper-slide-duplicate-next ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image,
                                            className: "w-full rounded-lg",
                                            alt: "thumb 1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "progress bg-accent absolute h-0.5 w-0"
                                            })
                                        })
                                    ]
                                }, id);
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero_3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(5973);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./data/items_tabs_data.js
const items_offer_data = [
    {
        id: "1ViviGiallo",
        ethPrice: "30",
        usdPrice: "$90,136.10",
        difference: "70%",
        Expiration: "5",
        user: "ViviGiallo"
    },
    {
        id: "2DB96DB",
        ethPrice: "15.5",
        usdPrice: "$45,458.10",
        difference: "70%",
        Expiration: "5",
        user: "DB96DB"
    },
    {
        id: "3myc_nc",
        ethPrice: "0.9",
        usdPrice: "$2,347.90",
        difference: "98%",
        Expiration: "5",
        user: "myc_nc"
    },
    {
        id: "4MetaRDnA",
        ethPrice: "1.2",
        usdPrice: "$4,568.40",
        difference: "100%",
        Expiration: "6",
        user: "MetaRDnA"
    },
    {
        id: "5Karafuru",
        ethPrice: "0.5",
        usdPrice: "$1,699.10",
        difference: "100%",
        Expiration: "6",
        user: "Karafuru"
    },
    {
        id: "6seekortelur",
        ethPrice: "4.7",
        usdPrice: "$13,966.64",
        difference: "40%",
        Expiration: "2",
        user: "seekortelur"
    }, 
];
const items_Properties_data = [
    {
        id: 0,
        category: "ACCESSORY",
        product: "Metal headband",
        trait: "3% have this trait"
    },
    {
        id: 1,
        category: "SKIN",
        product: "Dark Brown",
        trait: "8% have this trait"
    },
    {
        id: 2,
        category: "EYES",
        product: "Cyborg",
        trait: "2% have this trait"
    },
    {
        id: 3,
        category: "CLOTH",
        product: "Adidas",
        trait: "7% have this trait"
    },
    {
        id: 4,
        category: "HAIR",
        product: "White Ash",
        trait: "7% have this trait"
    },
    {
        id: 5,
        category: "CHARACTER",
        product: "TSAREVNA",
        trait: "1% have this trait"
    },
    {
        id: 6,
        category: "BACKGROUND",
        product: "CyberPunk",
        trait: "9% have this trait"
    },
    {
        id: 7,
        category: "MOUTH",
        product: "Flower",
        trait: "4% have this trait"
    }, 
];
const items_activity_data = [
    {
        id: "1ViviGiallo",
        price: "30",
        from: "AD496A",
        to: "Polymorph: MORPH Token",
        date: "19 days ago",
        text: "bid"
    },
    {
        id: "2DB96DB",
        price: ".00510",
        from: "The_vikk",
        to: "Polymorph: MORPH Token",
        date: "16 days ago",
        text: "transfer"
    },
    {
        id: "3myc_nc",
        price: "1.50",
        from: "CryptoGuysNFT",
        to: "Polymorph: MORPH Token",
        date: "19 days ago",
        text: "sale"
    }, 
];


;// CONCATENATED MODULE: ./components/tabs/OfferTab.jsx




const OfferTab = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "tab-pane fade show active",
            id: "offers",
            role: "tabpanel",
            "aria-labelledby": "offers-tab",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                role: "table",
                className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contents",
                        role: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Price"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "USD Price"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Floor Difference"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Expiration"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "From"
                                })
                            })
                        ]
                    }),
                    items_offer_data.map((item)=>{
                        const { ethPrice , id , usdPrice , difference , Expiration , user  } = item;
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contents",
                            role: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "-ml-1",
                                            "data-tippy-content": "ETH",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "icon mr-1 h-4 w-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                    xlinkHref: "/icons.svg#icon-ETH"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-green text-sm font-medium tracking-tight",
                                            children: [
                                                ethPrice,
                                                " ETH"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: usdPrice
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        difference,
                                        " below"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        "in ",
                                        Expiration,
                                        " months"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-accent",
                                            children: user
                                        })
                                    })
                                })
                            ]
                        }, id);
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabs_OfferTab = (OfferTab);

;// CONCATENATED MODULE: ./components/tabs/Properties.jsx




const Properties = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "tab-pane fade",
            id: "properties",
            role: "tabpanel",
            "aria-labelledby": "properties-tab",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4",
                    children: items_Properties_data.map((item)=>{
                        const { id , category , product , trait  } = item;
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 flex flex-col space-y-2 border p-5 text-center transition-shadow hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-accent text-sm uppercase",
                                        children: category
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 text-base dark:text-white",
                                        children: product
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-400 text-sm",
                                        children: trait
                                    })
                                ]
                            })
                        }, id);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const tabs_Properties = (Properties);

;// CONCATENATED MODULE: ./components/tabs/Activity_tab.jsx




const Activity_tab = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "tab-pane fade",
            id: "activity",
            role: "tabpanel",
            "aria-labelledby": "activity-tab",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Listing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "dark:hover:bg-accent-dark hover:bg-accent-dark bg-accent mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "mr-2 h-4 w-4 fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-2xs font-medium text-white",
                                        children: "Bids"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Transfers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Sales"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    role: "table",
                    className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 flex",
                            role: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[17%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Event"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[17%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Price"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "From"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "To"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Date"
                                    })
                                })
                            ]
                        }),
                        items_activity_data.map((item)=>{
                            const { id , price , from , to , text , date  } = item;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                role: "row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fill: "none",
                                                        d: "M0 0h24v24H0z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                                    })
                                                ]
                                            }),
                                            text
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4",
                                        role: "cell",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "-ml-1",
                                                "data-tippy-content": "ETH",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "icon mr-1 h-4 w-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                        xlinkHref: "icons.svg#icon-ETH"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "text-green text-sm font-medium tracking-tight",
                                                children: [
                                                    price,
                                                    " ETH"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-accent",
                                                children: from
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-accent",
                                                children: to
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "text-accent flex flex-wrap items-center",
                                                target: "_blank",
                                                rel: "nofollow noopener",
                                                title: "Opens in a new window",
                                                "data-tippy-content": "March 13 2022, 2:32 pm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mr-1",
                                                        children: date
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        width: "24",
                                                        height: "24",
                                                        className: "h-4 w-4 fill-current",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                fill: "none",
                                                                d: "M0 0h24v24H0z"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }, id);
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const tabs_Activity_tab = (Activity_tab);

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(7051);
// EXTERNAL MODULE: external "chart.js/auto"
var auto_ = __webpack_require__(5732);
;// CONCATENATED MODULE: ./components/tabs/Price_history.jsx




const Price_history = ({ classes  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative mb-24 w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "tab-pane fade",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-10 flex flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        defaultValue: "7-days",
                                        children: "Last 7 Days"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        defaultValue: "14-days",
                                        children: "Last 14 Days"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        defaultValue: "30-days",
                                        children: "Last 30 Days"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        defaultValue: "60-days",
                                        children: "Last 60 Days"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        defaultValue: "90-days",
                                        children: "Last 90 Days"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "last-year",
                                        children: "Last Year"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "all-time",
                                        children: "All Time"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "mr-4 inline-block align-middle",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block text-sm font-bold dark:text-white",
                                                children: "90 Day Avg. Price:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-green block text-sm font-bold",
                                                children: "\u039E7.0633"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "inline-block align-middle",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block text-sm font-bold dark:text-white",
                                                children: "90 Day Volume:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-green block text-sm font-bold",
                                                children: "\u039E24,085.6957"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "chart-container relative h-80 w-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_.Bar, {
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June"
                                ],
                                datasets: [
                                    {
                                        type: "line",
                                        label: "Avg. price",
                                        backgroundColor: "#10B981",
                                        borderColor: "#10B981",
                                        data: [
                                            54.73,
                                            64,
                                            53,
                                            96,
                                            130,
                                            100,
                                            102.88
                                        ]
                                    },
                                    {
                                        type: "bar",
                                        label: "Sales",
                                        backgroundColor: "#E7E8EC",
                                        data: [
                                            25,
                                            20,
                                            40,
                                            130,
                                            75,
                                            48,
                                            12
                                        ]
                                    }, 
                                ]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                interaction: {
                                    intersect: false,
                                    mode: "index"
                                },
                                scales: {
                                    x: {
                                        grid: {
                                            display: false
                                        }
                                    },
                                    y: {
                                        ticks: {
                                            stepSize: 50
                                        }
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                    decimation: {
                                        enabled: true
                                    },
                                    tooltip: {
                                        usePointStyle: true,
                                        position: "nearest",
                                        backgroundColor: "#131740",
                                        titleAlign: "center",
                                        bodyAlign: "center",
                                        footerAlign: "center",
                                        padding: 12,
                                        displayColors: false,
                                        yAlign: "bottom"
                                    }
                                },
                                animation: false
                            }
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabs_Price_history = (Price_history);

;// CONCATENATED MODULE: ./components/tabs/Tabs.jsx








const ItemsTabs = ()=>{
    const { 0: tabsActive , 1: setTabsActive  } = (0,external_react_.useState)(1);
    const tabsHeadText = [
        {
            id: 1,
            text: "Offers",
            icon: "offers"
        },
        {
            id: 2,
            text: "properties",
            icon: "properties"
        },
        {
            id: 3,
            text: "details",
            icon: "details"
        },
        {
            id: 4,
            text: "activities",
            icon: "activity"
        },
        {
            id: 5,
            text: "price history",
            icon: "price"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "scrollbar-custom mt-14 overflow-x-auto rounded-lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_.Tabs, {
                className: "min-w-fit tabs",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabList, {
                        className: "nav nav-tabs flex items-center",
                        children: tabsHeadText.map(({ id , text , icon  })=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                className: "nav-item bg-transparent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: tabsActive === id ? "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active" : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white",
                                    onClick: ()=>setTabsActive(id)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "icon mr-1 h-5 w-5 fill-current",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                xlinkHref: `/icons.svg#icon-${icon}`
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-display text-base font-medium",
                                            children: text
                                        })
                                    ]
                                })
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        className: "tab-content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabs_OfferTab, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabs_Properties, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tab-pane fade",
                            id: "details",
                            role: "tabpanel",
                            "aria-labelledby": "details-tab",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Contract Address:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-accent",
                                                children: "0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Token ID:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "js-copy-clipboard text-jacarta-700 cursor-pointer select-none dark:text-white",
                                                "data-tippy-content": "Copy",
                                                children: "7714"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Token Standard:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-jacarta-700 dark:text-white",
                                                children: "ERC-721"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Blockchain:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-jacarta-700 dark:text-white",
                                                children: "Ethereum"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabs_Activity_tab, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabs_Price_history, {
                            classes: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Tabs = (ItemsTabs);


/***/ }),

/***/ 2594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Browse_category_data = [
    {
        id: "0Virtual Worlds",
        image: "/images/categories/category_4.png",
        title: "Virtual Worlds",
        href: "#",
        bgColor: "rgb(70 199 227)"
    },
    {
        id: "1Sport",
        image: "/images/categories/category_5.png",
        title: "Sport",
        href: "#",
        bgColor: "rgb(115 126 242)"
    },
    {
        id: "2Photography",
        image: "/images/categories/category_6.png",
        title: "Photography",
        href: "#",
        bgColor: "rgb(66 138 248)"
    },
    {
        id: "3Music",
        image: "/images/categories/category_7.png",
        title: "Music",
        href: "#",
        bgColor: "rgb(243 91 199)"
    },
    {
        id: "4Art",
        image: "/images/categories/category_1.png",
        title: "Art",
        href: "#",
        bgColor: "rgb(16 185 129)"
    },
    {
        id: "5Collectibles",
        image: "/images/categories/category_2.png",
        title: "Collectibles",
        href: "#",
        bgColor: "rgb(254 178 64)"
    },
    {
        id: "6Domain Names",
        image: "/images/categories/category_3.png",
        title: "Domain Names",
        href: "#",
        bgColor: "rgb(131 88 255)"
    },
    {
        id: "7Virtual Worlds",
        image: "/images/categories/category_4.png",
        title: "Virtual Worlds",
        href: "#",
        bgColor: "rgb(70 199 227)"
    },
    {
        id: "8Sport",
        image: "/images/categories/category_5.png",
        title: "Sport",
        href: "#",
        bgColor: "#737EF2"
    },
    {
        id: "9Photography",
        image: "/images/categories/category_6.png",
        title: "Photography",
        href: "#",
        bgColor: "rgb(66 138 248)"
    },
    {
        id: "10Music",
        image: "/images/categories/category_7.png",
        title: "Music",
        href: "#",
        bgColor: "#F35BC7"
    },
    {
        id: "11Art",
        image: "/images/categories/category_1.png",
        title: "Art",
        href: "#",
        bgColor: "rgb(16 185 129)"
    },
    {
        id: "12Virtual Worlds",
        image: "/images/categories/category_4.png",
        title: "Virtual Worlds",
        href: "#",
        bgColor: "#46C7E3"
    },
    {
        id: "13Domain Names",
        image: "/images/categories/category_3.png",
        title: "Domain Names",
        href: "#",
        bgColor: "rgb(131 88 255)"
    },
    {
        id: "14Collectibles",
        image: "/images/categories/category_2.png",
        title: "Collectibles",
        href: "#",
        bgColor: "rgb(254 178 64)"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browse_category_data);


/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export bidsData */
// import '/images/item_1.jpg' from '/images/item_1.jpg';
const bidsData = [
    {
        id: 1,
        image: "/images/products/item_1.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 2,
        image: "/images/products/item_2.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 3,
        image: "/images/products/item_3.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 4,
        image: "/images/products/item_4.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 5,
        image: "/images/products/item_5.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 6,
        image: "/images/products/item_6.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    }, 
];



/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ hero_3_swiper_thumbs_data),
/* harmony export */   "a": () => (/* binding */ hero_3_swiper_data)
/* harmony export */ });
const hero_3_swiper_data = [
    {
        id: "0Palettes of Aotearoa - The Place of greenstone #01",
        image: "/images/hero/hero_slide_1.jpg",
        title: "Palettes of Aotearoa - The Place of greenstone #01",
        name: "LeeCookNZ",
        titleLink: "#",
        userLink: "#"
    },
    {
        id: "1Portrait Gallery",
        image: "/images/hero/hero_slide_2.jpg",
        title: "Portrait Gallery",
        name: "By 051_Hart",
        titleLink: "#",
        userLink: "#"
    },
    {
        id: "2Oceania \\\\ OVERSEER 017",
        image: "/images/hero/hero_slide_3.jpg",
        title: "Oceania \\\\ OVERSEER 017",
        name: "By THE OVERSEERS",
        titleLink: "#",
        userLink: "#"
    },
    {
        id: "3Shiba #368",
        image: "/images/hero/hero_slide_4.jpg",
        title: "Shiba #368",
        name: "Generous Shiba Club",
        titleLink: "#",
        userLink: "#"
    },
    {
        id: "4Palettes of Aotearoa - The Place of greenstone #01",
        image: "/images/hero/hero_slide_1.jpg",
        title: "Palettes of Aotearoa - The Place of greenstone #01",
        name: "LeeCookNZ",
        titleLink: "#",
        userLink: "#"
    },
    {
        id: "5Portrait Gallery",
        image: "/images/hero/hero_slide_2.jpg",
        title: "Portrait Gallery",
        name: "By 051_Hart",
        titleLink: "#",
        userLink: "#"
    }, 
];
const hero_3_swiper_thumbs_data = [
    {
        id: "0/images/hero/hero_slide_1_thumb.jpg",
        image: "/images/hero/hero_slide_1_thumb.jpg"
    },
    {
        id: "1/images/hero/hero_slide_2_thumb.jpg",
        image: "/images/hero/hero_slide_2_thumb.jpg"
    },
    {
        id: "2/images/hero/hero_slide_3_thumb.jpg",
        image: "/images/hero/hero_slide_3_thumb.jpg"
    },
    {
        id: "3/images/hero/hero_slide_4_thumb.jpg",
        image: "/images/hero/hero_slide_4_thumb.jpg"
    },
    {
        id: "4/images/hero/hero_slide_1_thumb.jpg",
        image: "/images/hero/hero_slide_1_thumb.jpg"
    },
    {
        id: "5/images/hero/hero_slide_4_thumb.jpg",
        image: "/images/hero/hero_slide_4_thumb.jpg"
    }, 
];



/***/ }),

/***/ 1912:
/***/ (() => {



/***/ })

};
;