"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 6979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpeningAnimation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_hs_low_resolution_logo_color_on_transparent_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4389);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





function OpeningAnimation() {
    const [onAnimationEnds, setOneAnimationEnds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const animation = {
        hidden: {
            scaleY: 1
        },
        show: {
            zIndex: 1000,
            y: 0,
            scaleY: 0,
            transition: {
                duration: 0.5,
                delay: 1,
                ease: "easeInOut"
            }
        }
    };
    const handleAnimationEnds = ()=>{
        setOneAnimationEnds(!onAnimationEnds);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !onAnimationEnds && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            onAnimationComplete: handleAnimationEnds,
            variants: animation,
            animate: "show",
            initial: "hidden",
            className: " fixed top-0 left-0 w-full h-screen bg-slate-800 flex items-center justify-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4 justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            y: 100,
                            opacity: 0
                        },
                        animate: {
                            rotate: 5,
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: "spring",
                                duration: 0.5,
                                bounce: 0.2
                            }
                        },
                        className: "max-w-xs  w-60",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: _assets_hs_low_resolution_logo_color_on_transparent_background_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                            alt: "Logo",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl title text-center text-white font-semibold",
                            children: "Keep It Simple."
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;