"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 1972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);




function Nav() {
    const { t: translate } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("mobileNav");
    const hoverAnimate = {
        fontStyle: "italic",
        x: 5,
        transition: {
            type: "spring",
            ease: "linear"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "md:block hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "nav_link color text-7xl lg:text-9xl flex items-center justify-center  flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: hoverAnimate,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/work",
                        children: translate("work")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: hoverAnimate,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/about",
                        children: translate("about")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: hoverAnimate,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/contact",
                        children: translate("connect")
                    })
                })
            ]
        })
    });
}


/***/ })

};
;