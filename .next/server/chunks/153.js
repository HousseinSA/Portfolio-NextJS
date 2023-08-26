"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 9478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Animate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


function Animate({ children }) {
    const animation = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 50,
                Bounce: 0.1,
                delay: 0.2
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: animation,
        initial: "initial",
        animate: "animate",
        children: children
    });
}


/***/ }),

/***/ 6574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ homeLogo),
/* harmony export */   hi: () => (/* binding */ hi),
/* harmony export */   o: () => (/* binding */ animation)
/* harmony export */ });
const hi = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.4,
            duration: 1,
            bounce: 0.4,
            type: "spring",
            ease: "linear"
        }
    }
};
const homeLogo = {
    hidden: {
        scale: 0,
        opacity: 0,
        rotate: 45
    },
    show: {
        opacity: 0.1,
        scale: 0.8,
        transition: {
            repeat: "Infinity",
            repeatType: "reverse",
            duration: 2,
            repeatDelay: 2,
            ease: "easeOut"
        }
    }
};
const animation = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1.2,
            type: "spring",
            ease: "linear"
        }
    }
};


/***/ }),

/***/ 6153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Animate_Animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9478);
/* harmony import */ var _Animate_HomeAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6574);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3468);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1972);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_hs_low_resolution_logo_color_on_transparent_background_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4389);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__);











function Home() {
    const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { t: translate } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("index", "mobileNav");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Animate_Animate__WEBPACK_IMPORTED_MODULE_1__/* .Animate */ .r, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center items-center gap-2 min-h-H75 md:justify-around ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " lg:place-self-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main-info",
                                children: [
                                    locale === "ar" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-5xl lg:text-6xl",
                                        children: [
                                            translate("name"),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {
                                                variants: _Animate_HomeAnimate__WEBPACK_IMPORTED_MODULE_2__.hi,
                                                animate: "show",
                                                initial: "hidden",
                                                className: "inline-block text-mainColor",
                                                children: [
                                                    ",",
                                                    translate("hi")
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            translate("Myname")
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-5xl lg:text-6xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {
                                                variants: _Animate_HomeAnimate__WEBPACK_IMPORTED_MODULE_2__.hi,
                                                animate: "show",
                                                initial: "hidden",
                                                className: "inline-block text-mainColor",
                                                children: translate("hi")
                                            }),
                                            ", ",
                                            translate("name"),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            translate("Myname")
                                        ]
                                    }),
                                    locale === "ar" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "my-2 block text-right",
                                        children: translate("web")
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "my-2",
                                        children: translate("web")
                                    }),
                                    locale === "ar" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-right",
                                        children: [
                                            " ",
                                            translate("disc")
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            " ",
                                            translate("disc")
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 items-center  justify-between",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center md:justify-start gap-2 my-4 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "https://github.com/housseinsa",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.Github, {
                                                    size: 20,
                                                    className: "cursor-pointer"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "https://github.com/housseinsa",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.Twitter, {
                                                    size: 20,
                                                    className: "cursor-pointer "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "https://www.linkedin.com/in/husseinsa/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.Linkedin, {
                                                    size: 20,
                                                    className: " cursor-pointer "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "https://www.instagram.com/houssein_11",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.Instagram, {
                                                    size: 20,
                                                    className: " cursor-pointer "
                                                })
                                            })
                                        ]
                                    }),
                                    locale === "fr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        target: "_blank",
                                        href: "https://drive.google.com/file/d/1YfADIJ8rD7XH2Xidm5JPQxNz7A4Z2rR1/view?usp=sharing",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-mainColor cursor-pointer px-4 py-3 hover:bg-hoverColor h-fit text-white  rounded",
                                            children: translate("resume")
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        target: "_black",
                                        href: "https://drive.google.com/file/d/1J6PxOrxvE_Q04kXgePFuOb1hY3sE2klm/view?usp=sharing",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-mainColor cursor-pointer px-4 py-3 hover:bg-hoverColor h-fit text-white  rounded",
                                            children: translate("resume")
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        variants: _Animate_HomeAnimate__WEBPACK_IMPORTED_MODULE_2__/* .homeLogo */ .K,
                        initial: "hidden",
                        animate: "show",
                        className: "absolute md:hidden max-w-xs visible -z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                            src: _assets_hs_low_resolution_logo_color_on_transparent_background_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            alt: "logo",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                ]
            })
        })
    });
}

async function getStaticProps({ locale }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__.serverSideTranslations)(locale, [
                "index",
                "mobileNav"
            ])
        }
    };
}


/***/ })

};
;