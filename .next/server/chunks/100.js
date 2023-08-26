"use strict";
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 1086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3468);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__);



function SideNav({ path }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `absolute invisible md:visible ${path ? "top-20 gap-14" : "top-7 gap-12 -left-1"}  w-20 h-screen text-sm flex-col items-center flex
  `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hover:scale-110 spacing",
                children: [
                    !path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "rounded-full",
                        href: "https://github.com/housseinsa",
                        target: "_blank",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.Github, {
                            size: 20,
                            color: "#729343"
                        })
                    }),
                    path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.House, {
                            size: 20,
                            color: "#729343"
                        })
                    })
                ]
            }),
            !path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hover:scale-110 spacing rounded-full ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "https://www.linkedin.com/in/husseinsa/",
                    target: "_blank",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.Linkedin, {
                        size: 20,
                        color: "#729343"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-0.5 h-1/2 bg-slate-800 rotate-180"
            })
        ]
    });
}


/***/ })

};
;