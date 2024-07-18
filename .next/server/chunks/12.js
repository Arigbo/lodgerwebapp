"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 5012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ front_layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/FooterComp.jsx
/* eslint-disable @next/next/no-img-element */ 



const navList = [
    {
        name: "Discover",
        link: "/houses",
        title: "Home",
        icon: "fas fa-earth"
    },
    {
        name: "Bookmark",
        link: "/",
        title: "Portfolio",
        icon: "fas fa-bookmark"
    },
    {
        name: "Profile",
        link: "/",
        title: "about",
        icon: "fas fa-person"
    }, 
];
const FooterComp = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "search_page_nav",
        children: navList.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search_page_nav_inner",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: router.pathname == `${item.link}` ? "active" : "",
                    href: item.link,
                    title: item.title,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: item.icon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: item.name
                        })
                    ]
                })
            }, item.name);
        })
    });
};
/* harmony default export */ const components_FooterComp = (FooterComp);

;// CONCATENATED MODULE: ./src/layouts/front.layout.tsx





const FrontLayout = ({ children  })=>{
    const { 0: background , 1: setBackground  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const darkMode = ()=>{
        setBackground(true);
    };
    const lightMode = ()=>{
        setBackground(false);
    };
    const { 0: switchhider , 1: setSwitchhider  } = (0,external_react_.useState)(true);
    const showSwitch = ()=>{
        setSwitchhider(false);
    };
    const hideSwitch = ()=>{
        setSwitchhider(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `app animate__animated animate__zoomInUp ${background ? "app" : "dark"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mode_switch",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${switchhider ? "mode_switch_inner" : "show"}`,
                        children: background ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-moon c-pointer",
                            onClick: lightMode,
                            children: " "
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-sun c-pointer",
                            onClick: darkMode,
                            children: " "
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mode_switch_hider",
                        children: switchhider ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-chevron-right c-pointer",
                            onClick: showSwitch,
                            children: " "
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-chevron-left c-pointer",
                            onClick: hideSwitch,
                            children: " "
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "app_inner",
                onClick: hideSwitch,
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_FooterComp, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const front_layout = (FrontLayout);


/***/ })

};
;