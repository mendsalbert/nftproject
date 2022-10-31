"use strict";
exports.id = 7507;
exports.ids = [7507];
exports.modules = {

/***/ 7507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Metamask_comp_text),
/* harmony export */   "gx": () => (/* binding */ Confirm_checkout),
/* harmony export */   "tq": () => (/* binding */ Metamask_comp_login)
/* harmony export */ });
/* unused harmony export Metamask_comp_icon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var metamask_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9409);
/* harmony import */ var metamask_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(metamask_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4954);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






const Metamask_comp_text = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { status , connect , account , chainId , ethereum  } = (0,metamask_react__WEBPACK_IMPORTED_MODULE_2__.useMetaMask)();
    if (status === "initializing") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "Synchronisation with MetaMask ongoing..."
    });
    if (status === "unavailable") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "MetaMask not available :"
    });
    if (status === "notConnected") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        onClick: connect,
        children: "Connect Wallet"
    });
    if (status === "connecting") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "Connecting..."
    });
    if (status === "connected") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
            onClick: ()=>dispatch((0,_redux_counterSlice__WEBPACK_IMPORTED_MODULE_4__/* .walletModalShow */ .zI)())
            ,
            children: "Connect Wallet"
        })
    });
};
const Metamask_comp_login = ()=>{
    const { status , connect , account , chainId , ethereum  } = (0,metamask_react__WEBPACK_IMPORTED_MODULE_2__.useMetaMask)();
    if (status === "initializing") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/images/wallets/metamask_24.svg",
                className: "mr-2.5 inline-block h-6 w-6",
                alt: "",
                height: 24,
                width: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-2.5",
                children: "Metamask initializing"
            })
        ]
    });
    if (status === "unavailable") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/images/wallets/metamask_24.svg",
                className: "mr-2.5 inline-block h-6 w-6",
                alt: "",
                height: 24,
                width: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-2.5",
                children: "unavailable"
            })
        ]
    });
    if (status === "notConnected") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all",
        onClick: connect,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/images/wallets/metamask_24.svg",
                className: "inline-block h-6 w-6",
                alt: "",
                height: 24,
                width: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-2.5",
                children: "Sign in with Metamask"
            })
        ]
    });
    if (status === "connecting") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/images/wallets/metamask_24.svg",
                className: "mr-2.5 inline-block h-6 w-6",
                alt: "",
                height: 24,
                width: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-2.5",
                children: "Metamask connecting"
            })
        ]
    });
    if (status === "connected") return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/images/wallets/metamask_24.svg",
                className: " inline-block h-6 w-6",
                alt: "",
                height: 24,
                width: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-2.5",
                children: "Sign in with Metamask"
            })
        ]
    });
};
const Confirm_checkout = ()=>{
    const { status , connect , account , chainId , ethereum  } = (0,metamask_react__WEBPACK_IMPORTED_MODULE_2__.useMetaMask)();
    if (status === "initializing") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "initializing"
    });
    if (status === "unavailable") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "unavailable"
    });
    if (status === "notConnected") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        onClick: connect,
        children: "Confirm Checkout"
    });
    if (status === "connecting") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "connecting"
    });
    if (status === "connected") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
        children: "Confirm Checkout"
    });
};
const Metamask_comp_icon = ({ prop  })=>{
    const dispatch = useDispatch();
    const { status , connect , account , chainId , ethereum  } = useMetaMask();
    if (status === "initializing") return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("button", {
            className: prop.asPath === "/home/home_3" ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]" : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            children: /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: prop.asPath === "/home/home_3" ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white" : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                    })
                ]
            })
        })
    });
    if (status === "unavailable") return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("button", {
            className: prop.asPath === "/home/home_3" ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]" : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            children: /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: prop.asPath === "/home/home_3" ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white" : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                    })
                ]
            })
        })
    });
    if (status === "notConnected") return /*#__PURE__*/ _jsx("button", {
        className: prop.asPath === "/home/home_3" ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]" : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
        // onClick={() => dispatch(walletModalShow())}
        onClick: connect,
        children: /*#__PURE__*/ _jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            className: prop.asPath === "/home/home_3" ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white" : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                })
            ]
        })
    });
    if (status === "connecting") return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("button", {
            className: prop.asPath === "/home/home_3" ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]" : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            children: /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: prop.asPath === "/home/home_3" ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white" : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                    })
                ]
            })
        })
    });
    if (status === "connected") return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("button", {
            className: prop.asPath === "/home/home_3" ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]" : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            onClick: ()=>dispatch(walletModalShow())
            ,
            children: /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: prop.asPath === "/home/home_3" ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white" : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                    })
                ]
            })
        })
    });
};



/***/ })

};
;