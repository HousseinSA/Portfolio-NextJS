"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_jsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_jsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/about.jsx
var about_namespaceObject = {};
__webpack_require__.r(about_namespaceObject);
__webpack_require__.d(about_namespaceObject, {
  "default": () => (About),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./Animate/Animate.jsx
var Animate = __webpack_require__(9478);
// EXTERNAL MODULE: ./Animate/HomeAnimate.js
var HomeAnimate = __webpack_require__(6574);
;// CONCATENATED MODULE: ./Animate/aboutAnimate.js
const userImageAnimate = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            delay: 1.8,
            duration: 0.8,
            type: "spring",
            ease: "easeOut",
            bounce: 0.3
        }
    }
};
const containerIcon = {
    hidden: {
        opacity: 0.8
    },
    show: {
        transition: {
            repeat: "Infinity",
            repeatDelay: 1.6,
            duration: 5,
            repeatType: "mirror",
            ease: "easeInOut",
            staggerChildren: 1
        }
    }
};
const iconsAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 0.8,
        transition: {
            repeat: "Infinity",
            repeatType: "mirror",
            duration: 2,
            ease: "linear"
        }
    }
};

// EXTERNAL MODULE: ./Animate/workAnimate.js
var workAnimate = __webpack_require__(3859);
;// CONCATENATED MODULE: ./Animate/index.js





// EXTERNAL MODULE: ./pages/Components/HeaderAnimate.jsx
var HeaderAnimate = __webpack_require__(744);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./assets/IMG_20230225_231859.jpg
/* harmony default export */ const IMG_20230225_231859 = ({"src":"/_next/static/media/IMG_20230225_231859.a4d40b77.jpg","height":955,"width":830,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoASf/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMEEgABBQYi/9oACAEBAAE/AOH63LgKFWpCWPSwiv6C1s//xAAZEQABBQAAAAAAAAAAAAAAAAAAAQMygrH/2gAIAQIBAT8AbjZdP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAiFx/9oACAEDAQE/AJu1iP/Z","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./pages/Components/SideNav.jsx
var SideNav = __webpack_require__(1086);
// EXTERNAL MODULE: ./pages/Components/Header.jsx
var Header = __webpack_require__(8020);
// EXTERNAL MODULE: ./helpers/windowSize.js
var windowSize = __webpack_require__(7899);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./helpers/Translate.js
var Translate = __webpack_require__(577);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/about.jsx















function About() {
    const { t: translate } = (0,external_react_i18next_.useTranslation)("about", "mobileNav");
    const width = (0,windowSize/* windowSize */.k)();
    const [client, setClient] = (0,external_react_.useState)(false);
    const { locale, pathname } = (0,Translate/* Translate */.v)();
    (0,external_react_.useEffect)(()=>{
        setClient(true);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(Animate/* Animate */.r, {
        children: client && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "About Me"
                    })
                }),
                width < 765 && /*#__PURE__*/ jsx_runtime.jsx(Header["default"], {}),
                pathname !== "/" && /*#__PURE__*/ jsx_runtime.jsx(SideNav["default"], {
                    path: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-2 justify-center flex-wrap lg:flex-nowrap min-h-H75 items-center ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-md max-w-md md:max-w-xl p-3 ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(HeaderAnimate["default"], {
                                            children: locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: "nav_link text-6xl md:text-7xl text-center md:text-right lg:text-8xl",
                                                children: translate("title")
                                            }) : /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: "nav_link text-6xl md:text-7xl text-center md:text-left lg:text-8xl",
                                                children: translate("title")
                                            })
                                        }),
                                        locale === "ar" ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "about-text text-right text-sm md:text-base",
                                            children: translate("about")
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "about-text text-sm md:text-base",
                                            children: translate("about")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: userImageAnimate,
                                    initial: "hidden",
                                    whileInView: "show",
                                    className: "relative lg:block hidden right-0 md:-right-5 lg:-right-36 rounded max-w-xs md:max-w-sm my-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: IMG_20230225_231859,
                                        className: "rounded shadow-xl",
                                        alt: "developer"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_framer_motion_.motion.div, {
                            variants: containerIcon,
                            initial: "hidden",
                            animate: "show",
                            className: "flex justify-center flex-wrap gap-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center justify-center rounded-full bg-yellow-200",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-javascript-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-red-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-html5-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: "  w-16 h-16 flex items-center  justify-center rounded-full bg-blue-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-css3-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: "  w-16 h-16 flex items-center justify-center rounded-full bg-green-200",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-react-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-purple-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-sass-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center   justify-center rounded-full bg-indigo-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-redux-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: "  w-16 h-16 flex items-center  justify-center rounded-full bg-pink-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-mongodb-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: "  w-16 h-16 flex items-center  justify-center rounded-full bg-yellow-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-express-original-wordmark text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-blue-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-python-plain colored text-white text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-green-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-tailwindcss-plain colored text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-orange-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-git-plain colored text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-yellow-200",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-firebase-plain-wordmark colored text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
                                    variants: iconsAnimation,
                                    className: " w-16 h-16 flex items-center  justify-center rounded-full bg-blue-200",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "devicon-nextjs-original-wordmark colored text-4xl"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticProps({ locale }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "about",
                "mobileNav"
            ])
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fabout&absolutePagePath=private-next-pages%2Fabout.jsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_jsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(about_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_jsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(about_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(about_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/about","pathname":"/about","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: about_namespaceObject })
        
        
    

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

/***/ 3859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ workProjectAnimation)
/* harmony export */ });
const workProjectAnimation = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.2
        }
    }
};


/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

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
var __webpack_exports__ = __webpack_require__.X(0, [722,893,664,44,675,389,464,20,100,86], () => (__webpack_exec__(1479)));
module.exports = __webpack_exports__;

})();