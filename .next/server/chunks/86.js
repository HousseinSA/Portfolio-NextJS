"use strict";
exports.id = 86;
exports.ids = [86];
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

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ windowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const windowSize = ()=>{
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const updatePageWidth = ()=>{
        setWidth(window.innerWidth);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        updatePageWidth();
        window.addEventListener("resize", updatePageWidth);
        return ()=>window.removeEventListener("resize", updatePageWidth);
    }, []);
    return width;
};


/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderAnimate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


function HeaderAnimate({ children }) {
    const animate = {
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2,
                duration: 0.5
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: animate,
        initial: "hidden",
        animate: "show",
        children: children
    });
}


/***/ })

};
;