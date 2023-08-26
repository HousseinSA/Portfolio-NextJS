"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_jsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_jsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/contact.jsx
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (Contact),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./Animate/Animate.jsx
var Animate = __webpack_require__(9478);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/Components/HeaderAnimate.jsx
var HeaderAnimate = __webpack_require__(744);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./pages/Components/SideNav.jsx
var SideNav = __webpack_require__(1086);
// EXTERNAL MODULE: ./pages/Components/Header.jsx
var Header = __webpack_require__(8020);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./helpers/windowSize.js
var windowSize = __webpack_require__(7899);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/contact.jsx










function Contact() {
    const width = (0,windowSize/* windowSize */.k)();
    const route = (0,router_.useRouter)();
    const { locale } = (0,router_.useRouter)();
    const { t: translate } = (0,external_next_i18next_.useTranslation)("connect");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Animate/* Animate */.r, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: translate("connect")
                })
            }),
            route.pathname !== "/" && /*#__PURE__*/ jsx_runtime.jsx(SideNav["default"], {
                path: true
            }),
            " ",
            width < 765 && /*#__PURE__*/ jsx_runtime.jsx(Header["default"], {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "gap-2 mx-4 min-h-H75 justify-between flex  ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "place-self-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(HeaderAnimate["default"], {
                                children: locale == "ar" ? /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: " nav_link text-6xl text-right md:text-7xl lg:text-8xl",
                                    children: translate("connect")
                                }) : /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: " nav_link text-6xl md:text-7xl lg:text-8xl",
                                    children: translate("connect")
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "max-w-md my-2 text-sm md:text-base",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: translate("disc")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "underline hover:line-through text-mainColor inline-block my-2  mr-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "mailto:nejihoussein1@gmail.com",
                                            children: translate("mail")
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "underline hover:line-through text-mainColor inline-block my-2  mr-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://linkden.com/in/housseinsa",
                                            children: "LinkedIn"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

async function getStaticProps({ locale }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "connect"
            ])
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontact&absolutePagePath=private-next-pages%2Fcontact.jsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_jsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_jsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/contact","pathname":"/contact","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: contact_namespaceObject })
        
        
    

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8805:
/***/ ((module) => {

module.exports = require("i18next");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 3495:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [722,893,664,44,675,389,100,464,20,86], () => (__webpack_exec__(7061)));
module.exports = __webpack_exports__;

})();