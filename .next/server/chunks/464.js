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



function ChangeLanguage() {
    const { locale, locales, handleTranslate } = (0,_helpers_Translate__WEBPACK_IMPORTED_MODULE_2__/* .Translate */ .v)();
    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en");
    function handelLanguage() {
        const language = locales.find((l)=>l !== lang);
        setLang(language);
        handleTranslate(language);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handelLanguage,
            className: "rounded-full w-40 h-40 flex justify-center items-center bg-mainColor mx-2 p-1.5 text-white",
            style: {
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: locale
        })
    });
}


/***/ })

};
;