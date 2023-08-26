"use strict";
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ Translate)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const Translate = ()=>{
    const { locale, locales, push, pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    function handleTranslate(lang) {
        push(pathname, undefined, {
            locale: lang
        });
    }
    return {
        locale,
        locales,
        handleTranslate,
        pathname
    };
};


/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeLanguage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(577);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8805);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);




function ChangeLanguage() {
    const { locale, locales, handleTranslate } = (0,_helpers_Translate__WEBPACK_IMPORTED_MODULE_2__/* .Translate */ .v)();
    function handelLanguage(language) {
        handleTranslate(language);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
            value: locale,
            onChange: (e)=>handelLanguage(e.target.value),
            className: " p-1 bg-bodyColor rounded-lg border border-gray-300 focus:outline-none focus:border-mainColor",
            children: locales.map((lang)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: lang,
                    onClick: ()=>handelLanguage(lang),
                    className: "rounded-full p-2 w-40 h-40 flex justify-center items-center bg-mainColor text-white",
                    children: lang
                }, lang);
            })
        })
    });
}


/***/ })

};
;