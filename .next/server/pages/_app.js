"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);


/***/ }),

/***/ 6619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./redux/counterSlice.js
var counterSlice = __webpack_require__(4954);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/userId.jsx
var userId = __webpack_require__(5369);
// EXTERNAL MODULE: ./components/metamask/Metamask.jsx
var Metamask = __webpack_require__(7507);
// EXTERNAL MODULE: ./utils/AuthProvider.tsx + 4 modules
var AuthProvider = __webpack_require__(1800);
;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
;// CONCATENATED MODULE: ./components/mblNavbar.jsx










const MblNavbar = ({ theme  })=>{
    const { mblMenu  } = (0,external_react_redux_.useSelector)((state)=>state.counter
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: profileShow , 1: setProfileShow  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { 0: navItemValue , 1: setNavItemValue  } = (0,external_react_.useState)(1);
    const { 0: navText , 1: setnavText  } = (0,external_react_.useState)("");
    const { address , signer , contract , provider , chainId , connect , web3Provider ,  } = (0,external_react_.useContext)(AuthProvider/* AuthContext */.V);
    const handleItemDropdown = (e)=>{
        const target = e.target.closest("li");
        if (!target.classList.contains("show")) {
            target.classList.add("show");
        } else {
            target.classList.remove("show");
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", ()=>{
            if (window.innerWidth >= 1024) {
                dispatch((0,counterSlice/* closeMblMenu */.Tu)());
            }
        });
        if (router.asPath === "/") {
            localStorage.setItem("navItemValue", 1);
        }
        if (router.asPath === "/home/home_2") {
            localStorage.setItem("navItemValue", 2);
        }
        if (router.asPath === "/home/home_3") {
            localStorage.setItem("navItemValue", 3);
        }
        if (router.asPath === "/home/home_4") {
            localStorage.setItem("navItemValue", 4);
        }
        if (router.asPath === "/home/home_5") {
            localStorage.setItem("navItemValue", 5);
        }
        if (router.asPath === "/home/home_6") {
            localStorage.setItem("navItemValue", 6);
        }
        if (router.asPath.includes("item")) {
            localStorage.setItem("navItemValue", 7);
        }
        if (router.asPath.includes("collection/avatar")) {
            localStorage.setItem("navItemValue", 9);
        }
        if (router.asPath === "/collection/explore_collection") {
            localStorage.setItem("navItemValue", 8);
        }
        if (router.asPath.includes("activity")) {
            localStorage.setItem("navItemValue", 10);
        }
        if (router.asPath.includes("ranking")) {
            localStorage.setItem("navItemValue", 11);
        }
        if (router.asPath.includes("user")) {
            localStorage.setItem("navItemValue", 12);
        }
        if (router.asPath.includes("profile")) {
            localStorage.setItem("navItemValue", 13);
        }
        if (router.asPath.includes("about")) {
            localStorage.setItem("navItemValue", 14);
        }
        if (router.asPath.includes("contact")) {
            localStorage.setItem("navItemValue", 15);
        }
        if (router.asPath.includes("wallet")) {
            localStorage.setItem("navItemValue", 16);
        }
        if (router.asPath.includes("404")) {
            localStorage.setItem("navItemValue", 18);
        }
        if (router.asPath.includes("tarms")) {
            localStorage.setItem("navItemValue", 19);
        }
        if (router.asPath.includes("help_center")) {
            localStorage.setItem("navItemValue", 20);
        }
        if (router.asPath.includes("partners")) {
            localStorage.setItem("navItemValue", 23);
        }
        if (router.asPath.includes("blog")) {
            localStorage.setItem("navItemValue", 24);
        }
        if (router.asPath.includes("single_post")) {
            localStorage.setItem("navItemValue", 25);
        }
        if (router.asPath.includes("newsletter")) {
            localStorage.setItem("navItemValue", 26);
        }
        if (router.asPath.includes("create")) {
            localStorage.setItem("navItemValue", 28);
        }
        const value = localStorage.getItem("navItemValue");
        setNavItemValue(+value);
        if (navItemValue > 0 && navItemValue <= 6) {
            setnavText("home");
        } else if (navItemValue > 6 && navItemValue <= 19) {
            setnavText("pages");
        } else if (navItemValue > 19 && navItemValue <= 26) {
            setnavText("resources");
        } else if (navItemValue === 28) {
            setnavText("create");
        } else if (navItemValue === 27) {
            setnavText("collection");
        }
    }, [
        dispatch,
        navItemValue,
        router,
        web3Provider
    ]);
    const homenavData = [
        {
            id: 1,
            text: "home 1",
            url: "/"
        },
        {
            id: 2,
            text: "home 2",
            url: "/home/home_2"
        },
        {
            id: 3,
            text: "home 3",
            url: "/home/home_3"
        },
        {
            id: 4,
            text: "home 4",
            url: "/home/home_4"
        },
        {
            id: 5,
            text: "home 5",
            url: "/home/home_5"
        },
        {
            id: 6,
            text: "home 6",
            url: "/home/home_6"
        }, 
    ];
    const pageTextData = [
        {
            id: 7,
            text: "Item Details",
            href: "/item/item_20"
        },
        {
            id: 8,
            text: "Explore Collections",
            href: "/collection/explore_collection"
        },
        {
            id: 9,
            text: "Collection",
            href: "/collection/avatar_1"
        },
        {
            id: 10,
            text: "Activity",
            href: "/activity"
        },
        {
            id: 11,
            text: "Rankings",
            href: "/rankings"
        },
        {
            id: 12,
            text: "User",
            href: "/user/avatar_6"
        },
        {
            id: 13,
            text: "Edit Profile",
            href: "/profile/user_avatar"
        },
        {
            id: 14,
            text: "About",
            href: "/about"
        },
        {
            id: 15,
            text: "Contact",
            href: "/contact"
        },
        {
            id: 16,
            text: "Wallet",
            href: "/wallet"
        },
        {
            id: 17,
            text: "Login",
            href: "/login"
        },
        {
            id: 18,
            text: "Page 404",
            href: "/404"
        },
        {
            id: 19,
            text: "Terms Of Service",
            href: "/tarms"
        }, 
    ];
    const resourcesData = [
        {
            id: 20,
            text: "Help Center",
            href: "/help_center"
        },
        {
            id: 21,
            text: "Platform Status",
            href: "/platform_status"
        },
        {
            id: 23,
            text: "Partners",
            href: "/partners"
        },
        {
            id: 24,
            text: "Blog",
            href: "/blog"
        },
        {
            id: 25,
            text: "Single Post",
            href: "/single_post/post_1"
        },
        {
            id: 26,
            text: "Newsletter",
            href: "/newsletter"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: mblMenu ? "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent nav-menu--is-open" : "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/logo.png",
                                    className: "max-h-7 dark:hidden",
                                    alt: "Xhibiter | NFT Marketplace"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/logo_white.png",
                                    alt: "Xhibiter | NFT Marketplace",
                                    className: "max-h-7 dark:block hidden"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                        onClick: ()=>dispatch((0,counterSlice/* closeMblMenu */.Tu)())
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "search",
                className: "relative mt-24 mb-8 w-full lg:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "search",
                        className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
                        placeholder: "Search"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fill: "none",
                                    d: "M0 0h24v24H0z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "navbar w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "js-nav-dropdown group relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: router.asPath === "/home/home_3" ? "dropdown-toggle font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base text-jacarta-700 dark:lg:text-jacarta-700 lg:text-white lg:px-5 w-full" : "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: navText === "home" ? "text-accent" : "",
                                        children: "Home"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "js-nav-dropdown group relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: router.asPath === "/home/home_3" ? "dropdown-toggle font-display  hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5 w-full" : "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: navText === "pages" ? "text-accent" : "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/collection/explore_collection",
                                        children: "Explorer"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "group",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/create",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>{
                                        dispatch((0,counterSlice/* closeMblMenu */.Tu)());
                                        localStorage.setItem("navItemValue", 28);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: router.asPath === "/home/home_3" ? "font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5" : "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: navText === "create" ? "text-accent" : "",
                                            children: "Create"
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-10 w-full lg:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Metamask/* Metamask_comp_text */._, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center space-x-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "facebook",
                                    className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "twitter",
                                    className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "discord",
                                    className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 640 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "instagram",
                                    className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 448 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "tiktok",
                                    className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 448 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-8 hidden lg:flex xl:ml-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "js-nav-dropdown group-dropdown relative",
                        children: [
                            router.asPath === "/home/home_3" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "dropdown-toggle border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]",
                                onMouseEnter: ()=>setProfileShow(true)
                                ,
                                onMouseLeave: ()=>setProfileShow(false)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    className: " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                onMouseEnter: ()=>setProfileShow(true)
                                ,
                                onMouseLeave: ()=>setProfileShow(false)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: profileShow ? "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100" : "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0",
                                onMouseEnter: ()=>setProfileShow(true)
                                ,
                                onMouseLeave: ()=>setProfileShow(false)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(userId/* default */.Z, {
                                        classes: "js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white",
                                        userId: address,
                                        shortId: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/user/avatar_6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    width: "24",
                                                    height: "24",
                                                    className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            fill: "none",
                                                            d: "M0 0h24v24H0z"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                                                    children: "My Profile"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "dark:hover:bg-jacarta-600 cursor-pointer hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fill: "none",
                                                        d: "M0 0h24v24H0z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                                                    })
                                                ]
                                            }),
                                            web3Provider ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                onClick: ()=>{
                                                    connect();
                                                },
                                                className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                                                children: [
                                                    "connect",
                                                    " "
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                onClick: ()=>{
                                                    (0,external_process_namespaceObject.disconnect)();
                                                },
                                                className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                                                children: [
                                                    "Disconnect",
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        href: "#",
                        className: "border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent js-dark-mode-trigger ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                        "aria-label": "dark",
                        onClick: theme,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                width: "24",
                                height: "24",
                                className: "fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "none",
                                        d: "M0 0h24v24H0z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                width: "24",
                                height: "24",
                                className: "fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "none",
                                        d: "M0 0h24v24H0z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const mblNavbar = (MblNavbar);

;// CONCATENATED MODULE: ./components/navbar.jsx

/* eslint-disable @next/next/no-img-element */ 






const Navbar = ()=>{
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(false);
    const { 0: home3 , 1: setHome3  } = (0,external_react_.useState)(false);
    const { mblMenu  } = (0,external_react_redux_.useSelector)((state)=>state.counter
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleSticky = function() {
        if (window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    const handleTheme = ()=>{
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    const router = (0,router_.useRouter)();
    const pid = router.asPath;
    // const router = useRouter();
    (0,external_react_.useEffect)(()=>{
        if (pid === "/home/home_3") {
            setHome3(true);
        // console.log('home 3');
        } else {
            setHome3(false);
        // console.log('not home 3');
        }
    }, [
        pid
    ]);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleSticky);
    }, []);
    if (mblMenu) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: scroll ? "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky h-full" : "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors h-full",
                children: pid === "/platform_status" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center py-[1.5625rem] lg:py-[1.8125rem]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "shrink-0 lg:mr-14",
                                    children: "Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-display mt-1 hidden text-lg font-semibold lg:inline-block",
                                children: "Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hidden lg:block",
                                            children: "Subscribe to Updates"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "lg:hidden",
                                            children: "Subscribe"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center px-6 py-6 xl:px-24 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "shrink-0 block dark:hidden"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "shrink-0 hidden dark:block"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "search",
                            className: "relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "search",
                                    className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
                                    placeholder: "Search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(mblNavbar, {
                            theme: handleTheme
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-auto flex lg:hidden",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                        "aria-label": "profile",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                    onClick: handleTheme,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                    "aria-label": "open mobile menu",
                                    onClick: ()=>dispatch((0,counterSlice/* openMblMenu */.VS)())
                                    ,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: scroll && home3 ? "js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors js-page-header--is-sticky" : home3 ? "js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors" : scroll ? "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky" : "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors",
                children: pid === "/platform_status" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center py-[1.5625rem] lg:py-[1.8125rem]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "shrink-0 lg:mr-14",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/logo.png",
                                            className: "max-h-7 dark:hidden",
                                            alt: "Xhibiter | NFT Marketplace"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/logo_white.png",
                                            className: "hidden max-h-7 dark:block",
                                            alt: "Xhibiter | NFT Marketplace"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-display mt-1 hidden text-lg font-semibold lg:inline-block",
                                children: "Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hidden lg:block",
                                            children: "Subscribe to Updates"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "lg:hidden",
                                            children: "Subscribe"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center px-6 py-6 xl:px-24 ",
                    children: [
                        home3 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "shrink-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/logo_white.png",
                                    className: "max-h-7 h-auto",
                                    alt: "Xhibiter | NFT Marketplace"
                                })
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "shrink-0",
                                children: "Logo"
                            })
                        }),
                        home3 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "search",
                            className: "relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "search",
                                    className: " focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 border-transparent bg-white/[.15] text-white placeholder-white",
                                    placeholder: "Search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: " h-4 w-4 fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "search",
                            className: "relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "search",
                                    className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
                                    placeholder: "Search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(mblNavbar, {
                            theme: handleTheme
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-auto flex lg:hidden",
                            children: [
                                home3 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile/user_avatar",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]",
                                        "aria-label": "profile",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                                })
                                            ]
                                        })
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile/user_avatar",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                        "aria-label": "profile",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                    onClick: handleTheme,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            className: "fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                home3 ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "js-mobile-toggle border-jacarta-100 focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]",
                                    "aria-label": "open mobile menu",
                                    onClick: ()=>{
                                        dispatch((0,counterSlice/* openMblMenu */.VS)());
                                        console.log("open mbl nav");
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                                    "aria-label": "open mobile menu",
                                    onClick: ()=>{
                                        dispatch((0,counterSlice/* openMblMenu */.VS)());
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./data/footer_data.js
const footerMenuList = [
    {
        id: 1,
        title: "Marketplace",
        diffClass: "md:col-start-7",
        list: [
            {
                id: 1,
                href: "#",
                text: "All NFTs"
            },
            {
                id: 2,
                href: "#",
                text: "art"
            },
            {
                id: 3,
                href: "#",
                text: "music"
            },
            {
                id: 4,
                href: "#",
                text: "domain names"
            },
            {
                id: 5,
                href: "#",
                text: "collections"
            },
            {
                id: 6,
                href: "#",
                text: "virtual world"
            }, 
        ]
    },
    {
        id: 2,
        title: "Company",
        diffClass: "",
        list: [
            {
                id: 1,
                href: "#",
                text: "Explore"
            },
            {
                id: 2,
                href: "#",
                text: "About"
            },
            {
                id: 3,
                href: "#",
                text: "Contact Us"
            },
            {
                id: 4,
                href: "#",
                text: "Our Blog"
            },
            {
                id: 5,
                href: "#",
                text: "FAQ"
            }, 
        ]
    },
    {
        id: 3,
        title: "My Account",
        diffClass: "",
        list: [
            {
                id: 1,
                href: "#",
                text: "Authors"
            },
            {
                id: 2,
                href: "#",
                text: "Collection"
            },
            {
                id: 3,
                href: "#",
                text: "Author Profile"
            },
            {
                id: 4,
                href: "#",
                text: "Create Item"
            }, 
        ]
    }, 
];
const socialIcons = [
    {
        id: 1,
        href: "https://www.facebook.com",
        text: "facebook"
    },
    {
        id: 2,
        href: "https://www.twitter.com",
        text: "twitter"
    },
    {
        id: 3,
        href: "https://www.discord.com",
        text: "discord"
    },
    {
        id: 4,
        href: "https://www.instagram.com",
        text: "instagram"
    },
    {
        id: 5,
        href: "https://www.tiktok.com",
        text: "tiktok"
    }, 
];


;// CONCATENATED MODULE: ./components/footer.jsx




const footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "dark:bg-jacarta-900 page-footer bg-white",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-3 md:col-span-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "mb-6 inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/logo.png",
                                                className: "max-h-7 dark:hidden",
                                                alt: "Xhibiter | NFT Marketplace"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: " mb-6 inline-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/logo_white.png",
                                                className: "hidden max-h-7 dark:block mb-6",
                                                alt: "Xhibiter | NFT Marketplace"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "dark:text-jacarta-300 mb-12",
                                        children: "Create, sell and collect truly rare digital artworks. Powered by blockchain technology."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-5",
                                        children: socialIcons.map((item)=>{
                                            const { id , href , text  } = item;
                                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: href,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "group cursor-pointer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                            xlinkHref: `/icons.svg#icon-${text}`
                                                        })
                                                    })
                                                })
                                            }, id);
                                        })
                                    })
                                ]
                            }),
                            footerMenuList.map((single)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-display text-jacarta-700 mb-6 text-sm dark:text-white",
                                            children: single.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "dark:text-jacarta-300 flex flex-col space-y-1",
                                            children: single.list.map((item)=>{
                                                const { id , href , text  } = item;
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: href,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "hover:text-accent dark:hover:text-white",
                                                            children: text
                                                        })
                                                    })
                                                }, id);
                                            })
                                        })
                                    ]
                                }, single.id)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "dark:text-jacarta-400 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "\xa9 ",
                                            new Date().getFullYear(),
                                            " Xhibiter \u2014 Made by"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://themeforest.net/user/ib-themes",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "hover:text-accent dark:hover:text-white",
                                            children: [
                                                " ",
                                                "ib-themes"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/tarms",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-accent dark:hover:text-white",
                                                children: "Terms and conditions"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/tarms",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-accent dark:hover:text-white",
                                                children: "Privacy policy"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_footer = (footer);

;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
;// CONCATENATED MODULE: ./components/modal/wallet_modal.jsx





const Wallet_modal = ()=>{
    const walletModal = (0,external_react_redux_.useSelector)((state)=>state.counter.walletModal
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: walletModal ? "block modal fade show " : "modal fade hidden",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-dialog max-w-lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "modal-title",
                                    id: "walletModalLabel",
                                    children: "Connect your wallet"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "btn-close",
                                    onClick: ()=>dispatch((0,counterSlice/* walletModalhide */.J4)())
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-body p-6 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "icon icon-metamask mb-4 inline-block h-8 w-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                        xlinkHref: "/icons.svg#icon-metamask"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-center dark:text-white",
                                    children: [
                                        "You ",
                                        "don't",
                                        " have MetaMask in your browser, please download it from",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://metamask.io/",
                                            className: "text-accent",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: "MetaMask"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-footer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center space-x-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://metamask.io/",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                    children: "Get Metamask"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const wallet_modal = (Wallet_modal);

;// CONCATENATED MODULE: ./components/modal/bidsModal.jsx




const BidsModal = ()=>{
    const { bidsModal  } = (0,external_react_redux_.useSelector)((state)=>state.counter
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: ETHAmount , 1: setETHAmount  } = (0,external_react_.useState)(0.05);
    const handleEThAmount = (e)=>{
        e.preventDefault();
        setETHAmount(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: bidsModal ? "modal fade show block" : "modal fade",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-dialog max-w-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "modal-title",
                                    id: "placeBidLabel",
                                    children: "Place a bid"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "btn-close",
                                    onClick: ()=>dispatch((0,counterSlice/* bidsModalHide */.Ur)())
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-body p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                                        children: "Price"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "icon icon-ETH mr-1 h-5 w-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                            xlinkHref: "/icons.svg#icon-ETH"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-display text-jacarta-700 text-sm",
                                                    children: "ETH"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            className: "focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inse dark:text-jacarta-700",
                                            placeholder: "Amount",
                                            value: ETHAmount,
                                            onChange: (e)=>handleEThAmount(e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-jacarta-50 border-jacarta-100 flex flex-1 justify-end self-stretch border-l dark:text-jacarta-700",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "self-center px-2 text-sm",
                                                children: "$130.82"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "dark:text-jacarta-400 text-sm",
                                        children: "Balance: 0.0000 WETH"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4 flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            id: "terms",
                                            className: "checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "terms",
                                            className: "dark:text-jacarta-200 text-sm",
                                            children: [
                                                "By checking this box, I agree to ",
                                                "Xhibiter's",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-accent",
                                                    children: "Terms of Service"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-footer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center space-x-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                    children: "Place Bid"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const bidsModal = (BidsModal);

;// CONCATENATED MODULE: ./components/modal/buyModal.jsx






const BuyModal = ()=>{
    const { buyModal  } = (0,external_react_redux_.useSelector)((state)=>state.counter
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: buyModal ? "modal fade show block" : "modal fade",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-dialog max-w-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "modal-title",
                                    id: "buyNowModalLabel",
                                    children: "Complete checkout"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "btn-close",
                                    onClick: ()=>dispatch((0,counterSlice/* buyModalHide */.TO)())
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-body p-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                                            children: "Item"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                                            children: "Subtotal"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "mr-5 self-start",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/avatars/avatar_2.jpg",
                                                alt: "avatar 2",
                                                className: "rounded-2lg",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "collection.html",
                                                    className: "text-accent text-sm",
                                                    children: "Elon Musk #709"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white",
                                                    children: "Lazyone Panda"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm",
                                                            children: "Creator Earnings: 5%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            "data-tippy-content": "The creator of this collection will receive 5% of the sale total from future sales of this item.",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 24 24",
                                                                width: "24",
                                                                height: "24",
                                                                className: "dark:fill-jacarta-300 fill-jacarta-700 h-4 w-4",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        fill: "none",
                                                                        d: "M0 0h24v24H0z"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-auto",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "mb-1 flex items-center whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            "data-tippy-content": "ETH",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                className: "h-4 w-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                                    xlinkHref: "/icons.svg#icon-ETH"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "dark:text-jacarta-100 text-sm font-medium tracking-tight",
                                                            children: "1.55 ETH"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "dark:text-jacarta-300 text-right text-sm",
                                                    children: "$130.82"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between border-b py-2.5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white",
                                            children: "Total"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-auto",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "flex items-center whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            "data-tippy-content": "ETH",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                className: "h-4 w-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                                    xlinkHref: "/icons.svg#icon-ETH"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-green font-medium tracking-tight",
                                                            children: "1.55 ETH"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "dark:text-jacarta-300 text-right",
                                                    children: "$130.82"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4 flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            id: "buyNowTerms",
                                            className: "checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "buyNowTerms",
                                            className: "dark:text-jacarta-200 text-sm",
                                            children: [
                                                "By checking this box, I agree to ",
                                                "Xhibiter's",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/tarms",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-accent",
                                                        children: "Terms of Service"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-footer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center space-x-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Metamask/* Confirm_checkout */.gx, {})
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const buyModal = (BuyModal);

;// CONCATENATED MODULE: ./components/layout.js






function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(wallet_modal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(bidsModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(buyModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_footer, {})
        ]
    });
};

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./redux/store.js

// import counterReducer from '../features/counter/counterSlice';

const store = (0,toolkit_.configureStore)({
    reducer: {
        counter: counterSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "metamask-react"
var external_metamask_react_ = __webpack_require__(9409);
// EXTERNAL MODULE: ./components/Meta.jsx
var Meta = __webpack_require__(3554);
// EXTERNAL MODULE: ./components/UserContext.jsx
var UserContext = __webpack_require__(9351);
;// CONCATENATED MODULE: ./pages/_app.js












function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const pid = router.asPath;
    const scrollRef = (0,external_react_.useRef)({
        scrollPos: 0
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: "Home 1 || Xhibiter | NFT Marketplace Next.js Template"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                    store: store,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
                        enableSystem: true,
                        attribute: "class",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_metamask_react_.MetaMaskProvider, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(UserContext/* default.Provider */.Z.Provider, {
                                value: {
                                    scrollRef: scrollRef
                                },
                                children: pid === "/login" ? /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                        ...pageProps
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4787:
/***/ ((module) => {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ 4137:
/***/ ((module) => {

module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("metamask-react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4866:
/***/ ((module) => {

module.exports = require("walletlink");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,9505,1397,1664,5675,3554,4954,1800,7507,5369], () => (__webpack_exec__(6619)));
module.exports = __webpack_exports__;

})();