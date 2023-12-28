"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(general)/pdf/page",{

/***/ "(app-pages-browser)/./src/app/(general)/pdf/components/assets/styles.ts":
/*!***********************************************************!*\
  !*** ./src/app/(general)/pdf/components/assets/styles.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stylesDetail: function() { return /* binding */ stylesDetail; },\n/* harmony export */   stylesNavbar: function() { return /* binding */ stylesNavbar; },\n/* harmony export */   stylesPrice: function() { return /* binding */ stylesPrice; },\n/* harmony export */   stylesSection: function() { return /* binding */ stylesSection; },\n/* harmony export */   stylesSignature: function() { return /* binding */ stylesSignature; },\n/* harmony export */   stylesTyC: function() { return /* binding */ stylesTyC; }\n/* harmony export */ });\n/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-pdf/renderer */ \"(app-pages-browser)/./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js\");\n\nconst stylesNavbar = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    headerStructure: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        // width: 1100,\n        border: \"1px solid #000\",\n        paddingTop: 15,\n        paddingBottom: 15\n    },\n    header: {\n        display: \"flex\",\n        flexDirection: \"column\"\n    },\n    headerItem: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-end\",\n        fontSize: 5\n    },\n    headerItemCenter: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-end\",\n        fontSize: 10,\n        marginRight: 10\n    },\n    headerItemCenterMedia: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-start\",\n        alignItems: \"center\",\n        fontSize: 10,\n        marginRight: 10\n    },\n    headerItemData: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        fontSize: 10,\n        marginTop: 18,\n        marginRight: 10\n    },\n    logo: {\n        width: 300,\n        height: 260,\n        marginBottom: 25\n    }\n});\nconst stylesSection = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    sectionStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingTop: 15,\n        paddingBottom: 15,\n        paddingLeft: 15,\n        fontSize: 12\n    }\n});\nconst stylesDetail = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    detailStructure: {\n        // width: 780,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"space-between\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingRight: 30,\n        paddingLeft: 15\n    },\n    detail: {\n        display: \"flex\",\n        flexDirection: \"column\"\n    },\n    hr: {\n        borderBottom: \"0.5px solid black\",\n        paddingBottom: 1,\n        width: 100\n    },\n    detailItem: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        width: \"100%\",\n        alignItems: \"center\",\n        paddingRight: 15,\n        paddingLeft: 15,\n        fontSize: 10,\n        borderBottom: \"0.1px solid black\",\n        paddingBottom: 1,\n        paddingTop: 1\n    },\n    detailTitle: {\n        borderBottom: \"0.1px solid black\",\n        paddingBottom: 1\n    },\n    detailSubTitle: {\n        borderBottom: \"0.5px solid black\",\n        paddingBottom: 1\n    },\n    date: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        paddingTop: 20,\n        paddingBottom: 20,\n        fontSize: 12\n    }\n});\nconst stylesTyC = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    tycStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        border: \"1px solid #000\",\n        paddingTop: 20,\n        paddingBottom: 20,\n        paddingLeft: 15,\n        paddingRight: 15\n    },\n    tyc: {\n        marginTop: 5,\n        fontSize: 10\n    }\n});\nconst stylesPrice = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    priceStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingTop: 25,\n        paddingBottom: 25,\n        paddingLeft: 15,\n        paddingRight: 15,\n        gap: 20\n    },\n    price: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        fontSize: 12\n    }\n});\nconst stylesSignature = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    signatureStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        borderBottom: \"1px solid #000\",\n        paddingTop: 60,\n        paddingLeft: 15,\n        paddingRight: 15,\n        paddingBottom: 15\n    },\n    signature: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignContent: \"center\"\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGdlbmVyYWwpL3BkZi9jb21wb25lbnRzL2Fzc2V0cy9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUUxQyxNQUFNQyxlQUFlRCwyREFBVUEsQ0FBQ0UsTUFBTSxDQUFDO0lBQzVDQyxpQkFBaUI7UUFDZkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2ZDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxlQUFlO0lBQ2pCO0lBQ0FDLFFBQVE7UUFDTk4sU0FBUztRQUNUQyxlQUFlO0lBQ2pCO0lBQ0FNLFlBQVk7UUFDVlAsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQk0sVUFBVTtJQUNaO0lBQ0FDLGtCQUFrQjtRQUNoQlQsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQk0sVUFBVTtRQUNWRSxhQUFhO0lBQ2Y7SUFDQUMsdUJBQXVCO1FBQ3JCWCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCVSxZQUFZO1FBQ1pKLFVBQVU7UUFDVkUsYUFBYTtJQUNmO0lBQ0FHLGdCQUFnQjtRQUNkYixTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCVSxZQUFZO1FBQ1pKLFVBQVU7UUFDVk0sV0FBVztRQUNYSixhQUFhO0lBQ2Y7SUFDQUssTUFBTTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztJQUNoQjtBQUNGLEdBQUc7QUFFSSxNQUFNQyxnQkFBZ0J2QiwyREFBVUEsQ0FBQ0UsTUFBTSxDQUFDO0lBQzdDc0Isa0JBQWtCO1FBQ2hCLGVBQWU7UUFDZnBCLFNBQVM7UUFDVEMsZUFBZTtRQUNmb0IsWUFBWTtRQUNaQyxhQUFhO1FBQ2JsQixZQUFZO1FBQ1pDLGVBQWU7UUFDZmtCLGFBQWE7UUFDYmYsVUFBVTtJQUNaO0FBQ0YsR0FBRztBQUVJLE1BQU1nQixlQUFlNUIsMkRBQVVBLENBQUNFLE1BQU0sQ0FBQztJQUM1QzJCLGlCQUFpQjtRQUNmLGNBQWM7UUFDZHpCLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJtQixZQUFZO1FBQ1pDLGFBQWE7UUFDYkksY0FBYztRQUNkSCxhQUFhO0lBQ2Y7SUFDQUksUUFBUTtRQUNOM0IsU0FBUztRQUNUQyxlQUFlO0lBQ2pCO0lBQ0EyQixJQUFJO1FBQ0ZDLGNBQWM7UUFDZHhCLGVBQWU7UUFDZlcsT0FBTztJQUNUO0lBQ0FjLFlBQVk7UUFDVjlCLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJjLE9BQU87UUFDUEosWUFBWTtRQUNaYyxjQUFjO1FBQ2RILGFBQWE7UUFDYmYsVUFBVTtRQUNWcUIsY0FBYztRQUNkeEIsZUFBZTtRQUNmRCxZQUFZO0lBQ2Q7SUFDQTJCLGFBQWE7UUFDWEYsY0FBYztRQUNkeEIsZUFBZTtJQUNqQjtJQUNBMkIsZ0JBQWdCO1FBQ2RILGNBQWM7UUFDZHhCLGVBQWU7SUFDakI7SUFDQTRCLE1BQU07UUFDSmpDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJFLFlBQVk7UUFDWkMsZUFBZTtRQUNmRyxVQUFVO0lBQ1o7QUFDRixHQUFHO0FBRUksTUFBTTBCLFlBQVl0QywyREFBVUEsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3pDcUMsY0FBYztRQUNaLGVBQWU7UUFDZm5DLFNBQVM7UUFDVEMsZUFBZTtRQUNmRSxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsZUFBZTtRQUNma0IsYUFBYTtRQUNiRyxjQUFjO0lBQ2hCO0lBQ0FVLEtBQUs7UUFDSHRCLFdBQVc7UUFDWE4sVUFBVTtJQUNaO0FBQ0YsR0FBRztBQUVJLE1BQU02QixjQUFjekMsMkRBQVVBLENBQUNFLE1BQU0sQ0FBQztJQUMzQ3dDLGdCQUFnQjtRQUNkLGVBQWU7UUFDZnRDLFNBQVM7UUFDVEMsZUFBZTtRQUNmb0IsWUFBWTtRQUNaQyxhQUFhO1FBQ2JsQixZQUFZO1FBQ1pDLGVBQWU7UUFDZmtCLGFBQWE7UUFDYkcsY0FBYztRQUNkYSxLQUFLO0lBQ1A7SUFDQUMsT0FBTztRQUNMeEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZPLFVBQVU7SUFDWjtBQUNGLEdBQUc7QUFFSSxNQUFNaUMsa0JBQWtCN0MsMkRBQVVBLENBQUNFLE1BQU0sQ0FBQztJQUMvQzRDLG9CQUFvQjtRQUNsQixlQUFlO1FBQ2YxQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCbUIsWUFBWTtRQUNaQyxhQUFhO1FBQ2JPLGNBQWM7UUFDZHpCLFlBQVk7UUFDWm1CLGFBQWE7UUFDYkcsY0FBYztRQUNkckIsZUFBZTtJQUNqQjtJQUNBc0MsV0FBVztRQUNUM0MsU0FBUztRQUNUQyxlQUFlO1FBQ2YyQyxjQUFjO0lBQ2hCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhnZW5lcmFsKS9wZGYvY29tcG9uZW50cy9hc3NldHMvc3R5bGVzLnRzPzRkNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzTmF2YmFyID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIGhlYWRlclN0cnVjdHVyZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgLy8gd2lkdGg6IDExMDAsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIHBhZGRpbmdUb3A6IDE1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMTUsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICB9LFxyXG4gIGhlYWRlckl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICBmb250U2l6ZTogNSxcclxuICB9LFxyXG4gIGhlYWRlckl0ZW1DZW50ZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgfSxcclxuICBoZWFkZXJJdGVtQ2VudGVyTWVkaWE6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgfSxcclxuICBoZWFkZXJJdGVtRGF0YToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gICAgbWFyZ2luVG9wOiAxOCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBoZWlnaHQ6IDI2MCxcclxuICAgIG1hcmdpbkJvdHRvbTogMjUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzU2VjdGlvbiA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBzZWN0aW9uU3RydWN0dXJlOiB7XHJcbiAgICAvLyB3aWR0aDogMTEwMCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBwYWRkaW5nVG9wOiAxNSxcclxuICAgIHBhZGRpbmdCb3R0b206IDE1LFxyXG4gICAgcGFkZGluZ0xlZnQ6IDE1LFxyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlc0RldGFpbCA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBkZXRhaWxTdHJ1Y3R1cmU6IHtcclxuICAgIC8vIHdpZHRoOiA3ODAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAzMCxcclxuICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICB9LFxyXG4gIGRldGFpbDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIH0sXHJcbiAgaHI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCBibGFja1wiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMSxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgfSxcclxuICBkZXRhaWxJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxNSxcclxuICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICAgIGJvcmRlckJvdHRvbTogXCIwLjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMSxcclxuICAgIHBhZGRpbmdUb3A6IDEsXHJcbiAgfSxcclxuICBkZXRhaWxUaXRsZToge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjAuMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAxLFxyXG4gIH0sXHJcbiAgZGV0YWlsU3ViVGl0bGU6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCBibGFja1wiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMSxcclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzVHlDID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHR5Y1N0cnVjdHVyZToge1xyXG4gICAgLy8gd2lkdGg6IDExMDAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDE1LFxyXG4gIH0sXHJcbiAgdHljOiB7XHJcbiAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzUHJpY2UgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgcHJpY2VTdHJ1Y3R1cmU6IHtcclxuICAgIC8vIHdpZHRoOiAxMTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIHBhZGRpbmdUb3A6IDI1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMjUsXHJcbiAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDE1LFxyXG4gICAgZ2FwOiAyMCxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzU2lnbmF0dXJlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHNpZ25hdHVyZVN0cnVjdHVyZToge1xyXG4gICAgLy8gd2lkdGg6IDExMDAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBwYWRkaW5nVG9wOiA2MCxcclxuICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgIHBhZGRpbmdSaWdodDogMTUsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAxNSxcclxuICB9LFxyXG4gIHNpZ25hdHVyZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiU3R5bGVTaGVldCIsInN0eWxlc05hdmJhciIsImNyZWF0ZSIsImhlYWRlclN0cnVjdHVyZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImhlYWRlciIsImhlYWRlckl0ZW0iLCJmb250U2l6ZSIsImhlYWRlckl0ZW1DZW50ZXIiLCJtYXJnaW5SaWdodCIsImhlYWRlckl0ZW1DZW50ZXJNZWRpYSIsImFsaWduSXRlbXMiLCJoZWFkZXJJdGVtRGF0YSIsIm1hcmdpblRvcCIsImxvZ28iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInN0eWxlc1NlY3Rpb24iLCJzZWN0aW9uU3RydWN0dXJlIiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwicGFkZGluZ0xlZnQiLCJzdHlsZXNEZXRhaWwiLCJkZXRhaWxTdHJ1Y3R1cmUiLCJwYWRkaW5nUmlnaHQiLCJkZXRhaWwiLCJociIsImJvcmRlckJvdHRvbSIsImRldGFpbEl0ZW0iLCJkZXRhaWxUaXRsZSIsImRldGFpbFN1YlRpdGxlIiwiZGF0ZSIsInN0eWxlc1R5QyIsInR5Y1N0cnVjdHVyZSIsInR5YyIsInN0eWxlc1ByaWNlIiwicHJpY2VTdHJ1Y3R1cmUiLCJnYXAiLCJwcmljZSIsInN0eWxlc1NpZ25hdHVyZSIsInNpZ25hdHVyZVN0cnVjdHVyZSIsInNpZ25hdHVyZSIsImFsaWduQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(general)/pdf/components/assets/styles.ts\n"));

/***/ })

});