exports.id = 9929;
exports.ids = [9929];
exports.modules = {

/***/ 6367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6155);
/* harmony import */ var _dropdown_Auctions_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2913);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4954);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1800);












const CategoryItem = ({ nft: nft1 , itemActive  })=>{
    const { sortedtrendingCategoryItemData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.counter
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { address , signer , contract , provider , chainId , connect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_11__/* .AuthContext */ .V);
    async function buyNft(nft) {
        const price = ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.parseUnits(nft.price.toString(), "ether");
        console.log(price.toString());
        let transaction = await signer.createMarketSale(nft.tokenId, {
            value: nft.price.toString()
        });
        await transaction.wait();
        alert("Congratulation NFT purchased");
    }
    async function listNFTForSale(id, assetprice) {
        let listingPrice = await signer.getListingPrice();
        listingPrice = listingPrice.toString();
        const priceFormatted = ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.parseUnits(assetprice, "ether");
        let transaction = await signer.resellToken(id, priceFormatted, {
            value: listingPrice
        });
        await transaction.wait();
        setisloading(false);
        setisnftready(true);
        alert("NFT listed successfully");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4",
        children: nft1?.map((item)=>{
            const { tokenId , image , name , description , owner , price , seller  } = item;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/item/${tokenId?.toString()}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image?.toString(),
                                            alt: "item 5",
                                            className: "w-full h-[230px] rounded-[0.625rem] object-cover"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-3 -bottom-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex -space-x-2"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-7 flex items-center justify-between",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/item/${tokenId?.toString()}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                                        children: name
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-2 text-sm",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "dark:text-jacarta-200 text-jacarta-700 mr-1",
                                children: [
                                    parseFloat(Number(ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.formatEther(price?.toString() || 0)) || 0).toFixed(3) || 0,
                                    " ",
                                    "ETH"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-8 flex items-center justify-between",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "text-accent font-display text-sm font-semibold",
                                // onClick={() => dispatch(buyModalShow())}
                                onClick: ()=>{
                                    {
                                        itemActive === 1 ? "" : itemActive === 2 ? listNFTForSale(tokenId?.toString(), price?.toString()) : buyNft(item);
                                    }
                                },
                                children: itemActive === 1 ? "" : itemActive === 2 ? "Resell" : "Buy Now"
                            })
                        })
                    ]
                })
            }, tokenId?.toString());
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryItem);


/***/ }),

/***/ 2913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Auctions_dropdown = ({ classes  })=>{
    const { 0: dropdownShow , 1: setDropdownShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDropdown = ()=>{
        window.addEventListener("click", (w)=>{
            if (w.target.closest(".trending-dots")) {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleDropdown,
                    className: "dropdown-toggle trending-dots inline-flex h-10 w-10 items-center justify-center text-sm show",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "16",
                        height: "4",
                        viewBox: "0 0 16 4",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "dark:fill-jacarta-200 fill-jacarta-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "2",
                                cy: "2",
                                r: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "8",
                                cy: "2",
                                r: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "14",
                                cy: "2",
                                r: "2"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: dropdownShow ? "dropdown-menu-end dark:bg-jacarta-800 z-10 min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500 absolute top-full right-0" : "dropdown-menu-end dark:bg-jacarta-800 z-10 min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-500 absolute top-full right-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                            children: "New bid"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                            children: "Refresh Metadata"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                            children: "Share"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                            children: "Report"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auctions_dropdown);


/***/ }),

/***/ 6155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Likes = ({ like , classes ="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2" ,  })=>{
    const { 0: likeState , 1: setLikeState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(typeof like === "string" ? +like - 1 : like - 1);
    const { 0: likeNumber , 1: setlikeNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(likeState);
    const handleLike = ()=>{
        if (likeState >= likeNumber) {
            setlikeNumber((prev)=>prev + 1
            );
        } else {
            setlikeNumber((prev)=>prev - 1
            );
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes,
        onClick: handleLike,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_1___default()), {
                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Favorite"
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "js-likes relative cursor-pointer",
                    children: likeState === likeNumber ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                            xlinkHref: "/icons.svg#icon-hert-fill"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                            xlinkHref: "/icons.svg#icon-heart-fill"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "dark:text-jacarta-200 text-sm",
                children: likeNumber
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likes);


/***/ }),

/***/ 1801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ trendingCategoryData),
/* harmony export */   "q": () => (/* binding */ tranding_category_filter)
/* harmony export */ });
const tranding_category_filter = [
    {
        id: 0,
        text: "all"
    },
    {
        id: 1,
        svg: "art",
        text: "art"
    },
    {
        id: 2,
        svg: "collection",
        text: "Collectibles"
    },
    {
        id: 3,
        svg: "domain",
        text: "domain"
    },
    {
        id: 4,
        svg: "music",
        text: "music"
    },
    {
        id: 5,
        svg: "photography",
        text: "photography"
    },
    {
        id: 6,
        svg: "world",
        text: "virtual world"
    }, 
];
const trendingCategoryData = [
    {
        image: "/images/products/item_5.jpg",
        id: "Flourishing Cat #1800",
        category: "art",
        title: "Flourishing Cat #180",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 1,
        sortPrice: 8.49,
        price: "From 8.49 ETH",
        bidLimit: 8,
        bidCount: 2,
        likes: 15,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_1.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_1.png"
        }
    },
    {
        image: "/images/products/item_4.jpg",
        id: "Amazing NFT art1",
        category: "Collectibles",
        title: "Amazing NFT art",
        nfsw: true,
        lazyMinted: false,
        verified: false,
        addDate: 2,
        sortPrice: 5.9,
        price: "From 5.9 ETH",
        bidLimit: 7,
        bidCount: 1,
        likes: 188,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_2.png"
        }
    },
    {
        image: "/images/products/item_7.jpg",
        id: "SwagFox#1332",
        category: "domain",
        title: "SwagFox#133",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 3,
        sortPrice: 0.078,
        price: "0.078 ETH",
        bidLimit: 3,
        bidCount: 1,
        likes: 160,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_3.png"
        }
    },
    {
        image: "/images/products/item_6.jpg",
        id: "Splendid Girl3",
        category: "music",
        title: "Splendid Girl",
        nfsw: true,
        lazyMinted: true,
        verified: false,
        addDate: 4,
        sortPrice: 10,
        price: "10 ETH",
        bidLimit: 3,
        bidCount: 2,
        likes: 159,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_4.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_8.jpg",
        id: "Monkeyme#1554",
        category: "photography",
        title: "Monkeyme#155",
        nfsw: false,
        lazyMinted: false,
        verified: true,
        addDate: 5,
        sortPrice: 5,
        price: "From 5 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 32,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_9.jpg",
        id: "Jedidia#1495",
        category: "virtual world",
        title: "Jedidia#149",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 6,
        sortPrice: 0.16,
        price: "0.16 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 25,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_6.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_10.jpg",
        id: "Artof Eve6",
        category: "art",
        title: "Artof Eve",
        nfsw: true,
        lazyMinted: false,
        verified: false,
        addDate: 7,
        sortPrice: 0.13,
        price: "0.13 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 55,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_7.png"
        }
    },
    {
        image: "/images/products/item_11.jpg",
        id: "Asuna #16497",
        category: "collection",
        title: "Asuna#1649",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 8,
        sortPrice: 0.8,
        price: "0.8 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 70,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_8.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_11.jpg",
        id: "Asuna#164978",
        category: "collection",
        title: "Asuna#1649",
        nfsw: true,
        lazyMinted: false,
        verified: false,
        addDate: 9,
        sortPrice: 0.8,
        price: "0.8 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 70,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_8.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_12_lg.jpg",
        id: "Amazing NFT art9",
        category: "Collectibles",
        title: "Amazing NFT art",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 10,
        sortPrice: 5.9,
        price: "From 5.9 ETH",
        bidLimit: 7,
        bidCount: 1,
        likes: 188,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_2.png"
        }
    },
    {
        image: "/images/products/item_13_lg.jpg",
        id: "SwagFox#13310",
        category: "domain",
        title: "SwagFox#133",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 12,
        sortPrice: 0.078,
        price: "0.078 ETH",
        bidLimit: 3,
        bidCount: 1,
        likes: 160,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_3.png"
        }
    },
    {
        image: "/images/products/item_14_lg.jpg",
        id: "Splendid Girl311",
        category: "music",
        title: "Splendid Girl",
        nfsw: true,
        lazyMinted: false,
        verified: false,
        addDate: 13,
        sortPrice: 10,
        price: "10 ETH",
        bidLimit: 3,
        bidCount: 2,
        likes: 159,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_4.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_15_lg.jpg",
        id: "Monkeyme#15512",
        category: "photography",
        title: "Monkeyme#155",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 14,
        sortPrice: 5,
        price: "From 5 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 32,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_16_lg.jpg",
        id: "Jedidia#14913",
        category: "virtual world",
        title: "Jedidia#149",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 15,
        sortPrice: 0.16,
        price: "0.16 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 25,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_6.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_5.jpg",
        id: "FlourishingCat#18014",
        category: "art",
        title: "Flourishing Cat #180",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 16,
        sortPrice: 8.49,
        price: "From 8.49 ETH",
        bidLimit: 8,
        bidCount: 2,
        likes: 15,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_1.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_1.png"
        }
    },
    {
        image: "/images/products/item_4.jpg",
        id: "Amazing NFT art15",
        category: "Collectibles",
        title: "Amazing NFT art",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 16,
        sortPrice: 5.9,
        price: "From 5.9 ETH",
        bidLimit: 7,
        bidCount: 1,
        likes: 188,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_2.png"
        }
    },
    {
        image: "/images/products/item_7.jpg",
        id: "SwagFox#13316",
        category: "domain",
        title: "SwagFox#133",
        nfsw: false,
        lazyMinted: false,
        verified: false,
        addDate: 17,
        sortPrice: 0.078,
        price: "0.078 ETH",
        bidLimit: 3,
        bidCount: 1,
        likes: 160,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_3.png"
        }
    },
    {
        image: "/images/products/item_6.jpg",
        id: "Splendid Girl7",
        category: "music",
        title: "Splendid Girl",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 18,
        sortPrice: 10,
        price: "10 ETH",
        bidLimit: 3,
        bidCount: 2,
        likes: 159,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_4.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_8.jpg",
        id: "Monkeyme#15548",
        category: "photography",
        title: "Monkeyme#155",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 19,
        sortPrice: 5,
        price: "From 5 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 32,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_9.jpg",
        id: "Jedidia#14959",
        category: "virtual world",
        title: "Jedidia#149",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 20,
        sortPrice: 0.16,
        price: "0.16 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 25,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_6.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_10.jpg",
        id: "Artof Eve60",
        category: "art",
        title: "Artof Eve",
        nfsw: true,
        lazyMinted: false,
        verified: false,
        addDate: 21,
        sortPrice: 0.13,
        price: "0.13 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 55,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_7.png"
        }
    },
    {
        image: "/images/products/item_11.jpg",
        id: "Asuna #164971",
        category: "collection",
        title: "Asuna#1649",
        nfsw: false,
        lazyMinted: true,
        verified: true,
        addDate: 22,
        sortPrice: 0.8,
        price: "0.8 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 70,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_8.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_11.jpg",
        id: "Asuna#1649782",
        category: "collection",
        title: "Asuna#1649",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 23,
        sortPrice: 0.8,
        price: "0.8 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 70,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_8.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_12_lg.jpg",
        id: "Amazing NFT art93",
        category: "Collectibles",
        title: "Amazing NFT art",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 24,
        sortPrice: 5.9,
        price: "From 5.9 ETH",
        bidLimit: 7,
        bidCount: 1,
        likes: 188,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_2.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_2.png"
        }
    },
    {
        image: "/images/products/item_13_lg.jpg",
        id: "SwagFox#133104",
        category: "domain",
        title: "SwagFox#133",
        nfsw: false,
        lazyMinted: true,
        verified: false,
        addDate: 25,
        sortPrice: 0.078,
        price: "0.078 ETH",
        bidLimit: 3,
        bidCount: 1,
        likes: 160,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_3.png"
        }
    },
    {
        image: "/images/products/item_14_lg.jpg",
        id: "Splendid Girl3115",
        category: "music",
        title: "Splendid Girl",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 26,
        sortPrice: 10,
        price: "10 ETH",
        bidLimit: 3,
        bidCount: 2,
        likes: 159,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_4.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    },
    {
        image: "/images/products/item_15_lg.jpg",
        id: "Monkeyme#155126",
        category: "photography",
        title: "Monkeyme#155",
        nfsw: true,
        lazyMinted: false,
        verified: true,
        addDate: 27,
        sortPrice: 5,
        price: "From 5 FLOW",
        bidLimit: 1,
        bidCount: 1,
        likes: 32,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_3.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_5.png"
        }
    },
    {
        image: "/images/products/item_16_lg.jpg",
        id: "Jedidia#149137",
        category: "virtual world",
        title: "Jedidia#149",
        nfsw: false,
        lazyMinted: true,
        verified: false,
        addDate: 28,
        sortPrice: 0.16,
        price: "0.16 ETH",
        bidLimit: 1,
        bidCount: 1,
        likes: 25,
        creator: {
            name: "Sussygirl",
            image: "/images/avatars/creator_6.png"
        },
        owner: {
            name: "Sussygirl",
            image: "/images/avatars/owner_4.png"
        }
    }, 
];



/***/ }),

/***/ 8933:
/***/ (() => {



/***/ })

};
;