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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stylesDetail: function() { return /* binding */ stylesDetail; },\n/* harmony export */   stylesNavbar: function() { return /* binding */ stylesNavbar; },\n/* harmony export */   stylesPrice: function() { return /* binding */ stylesPrice; },\n/* harmony export */   stylesSection: function() { return /* binding */ stylesSection; },\n/* harmony export */   stylesSignature: function() { return /* binding */ stylesSignature; },\n/* harmony export */   stylesTyC: function() { return /* binding */ stylesTyC; }\n/* harmony export */ });\n/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-pdf/renderer */ \"(app-pages-browser)/./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js\");\n\nconst stylesNavbar = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    headerStructure: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        // width: 1100,\n        border: \"1px solid #000\",\n        paddingTop: 15,\n        paddingBottom: 15\n    },\n    header: {\n        display: \"flex\",\n        flexDirection: \"column\"\n    },\n    headerItem: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-end\",\n        fontSize: 5\n    },\n    headerItemCenter: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-end\",\n        fontSize: 10,\n        marginRight: 10\n    },\n    headerItemCenterMedia: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"flex-start\",\n        alignItems: \"center\",\n        fontSize: 10,\n        marginRight: 10\n    },\n    headerItemData: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        fontSize: 10,\n        marginTop: 18,\n        marginRight: 10\n    },\n    logo: {\n        width: 300,\n        height: 260,\n        marginBottom: 25\n    }\n});\nconst stylesSection = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    sectionStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingTop: 15,\n        paddingBottom: 15,\n        paddingLeft: 15,\n        fontSize: 12\n    }\n});\nconst stylesDetail = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    detailStructure: {\n        // width: 780,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"space-between\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingRight: 30,\n        paddingLeft: 15\n    },\n    detail: {\n        display: \"flex\",\n        flexDirection: \"column\"\n    },\n    detailItem: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        gap: 55,\n        paddingRight: 15,\n        paddingLeft: 15,\n        paddingTop: 15,\n        paddingBottom: 15,\n        fontSize: 10\n    },\n    date: {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        paddingTop: 20,\n        paddingBottom: 20,\n        fontSize: 12\n    }\n});\nconst stylesTyC = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    tycStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        border: \"1px solid #000\",\n        paddingTop: 20,\n        paddingBottom: 20,\n        paddingLeft: 15,\n        paddingRight: 15\n    },\n    tyc: {\n        marginTop: 5,\n        fontSize: 10\n    }\n});\nconst stylesPrice = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    priceStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"column\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        paddingTop: 25,\n        paddingBottom: 25,\n        paddingLeft: 15,\n        paddingRight: 15,\n        gap: 20\n    },\n    price: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        fontSize: 12\n    }\n});\nconst stylesSignature = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({\n    signatureStructure: {\n        // width: 1100,\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-between\",\n        borderLeft: \"1px solid #000\",\n        borderRight: \"1px solid #000\",\n        borderBottom: \"1px solid #000\",\n        paddingTop: 60,\n        paddingLeft: 15,\n        paddingRight: 15,\n        paddingBottom: 15\n    },\n    signature: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignContent: \"center\"\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGdlbmVyYWwpL3BkZi9jb21wb25lbnRzL2Fzc2V0cy9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUUxQyxNQUFNQyxlQUFlRCwyREFBVUEsQ0FBQ0UsTUFBTSxDQUFDO0lBQzVDQyxpQkFBaUI7UUFDZkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2ZDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxlQUFlO0lBQ2pCO0lBQ0FDLFFBQVE7UUFDTk4sU0FBUztRQUNUQyxlQUFlO0lBQ2pCO0lBQ0FNLFlBQVk7UUFDVlAsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQk0sVUFBVTtJQUNaO0lBQ0FDLGtCQUFrQjtRQUNoQlQsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQk0sVUFBVTtRQUNWRSxhQUFhO0lBQ2Y7SUFDQUMsdUJBQXVCO1FBQ3JCWCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCVSxZQUFZO1FBQ1pKLFVBQVU7UUFDVkUsYUFBYTtJQUNmO0lBQ0FHLGdCQUFnQjtRQUNkYixTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCVSxZQUFZO1FBQ1pKLFVBQVU7UUFDVk0sV0FBVztRQUNYSixhQUFhO0lBQ2Y7SUFDQUssTUFBTTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztJQUNoQjtBQUNGLEdBQUc7QUFFSSxNQUFNQyxnQkFBZ0J2QiwyREFBVUEsQ0FBQ0UsTUFBTSxDQUFDO0lBQzdDc0Isa0JBQWtCO1FBQ2hCLGVBQWU7UUFDZnBCLFNBQVM7UUFDVEMsZUFBZTtRQUNmb0IsWUFBWTtRQUNaQyxhQUFhO1FBQ2JsQixZQUFZO1FBQ1pDLGVBQWU7UUFDZmtCLGFBQWE7UUFDYmYsVUFBVTtJQUNaO0FBQ0YsR0FBRztBQUVJLE1BQU1nQixlQUFlNUIsMkRBQVVBLENBQUNFLE1BQU0sQ0FBQztJQUM1QzJCLGlCQUFpQjtRQUNmLGNBQWM7UUFDZHpCLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJtQixZQUFZO1FBQ1pDLGFBQWE7UUFDYkksY0FBYztRQUNkSCxhQUFhO0lBQ2Y7SUFDQUksUUFBUTtRQUNOM0IsU0FBUztRQUNUQyxlQUFlO0lBQ2pCO0lBQ0EyQixZQUFZO1FBQ1Y1QixTQUFTO1FBQ1RDLGVBQWU7UUFDZjRCLEtBQUs7UUFDTEgsY0FBYztRQUNkSCxhQUFhO1FBQ2JuQixZQUFZO1FBQ1pDLGVBQWU7UUFDZkcsVUFBVTtJQUNaO0lBQ0FzQixNQUFNO1FBQ0o5QixTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCRSxZQUFZO1FBQ1pDLGVBQWU7UUFDZkcsVUFBVTtJQUNaO0FBQ0YsR0FBRztBQUVJLE1BQU11QixZQUFZbkMsMkRBQVVBLENBQUNFLE1BQU0sQ0FBQztJQUN6Q2tDLGNBQWM7UUFDWixlQUFlO1FBQ2ZoQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkUsUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLGVBQWU7UUFDZmtCLGFBQWE7UUFDYkcsY0FBYztJQUNoQjtJQUNBTyxLQUFLO1FBQ0huQixXQUFXO1FBQ1hOLFVBQVU7SUFDWjtBQUNGLEdBQUc7QUFFSSxNQUFNMEIsY0FBY3RDLDJEQUFVQSxDQUFDRSxNQUFNLENBQUM7SUFDM0NxQyxnQkFBZ0I7UUFDZCxlQUFlO1FBQ2ZuQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZm9CLFlBQVk7UUFDWkMsYUFBYTtRQUNibEIsWUFBWTtRQUNaQyxlQUFlO1FBQ2ZrQixhQUFhO1FBQ2JHLGNBQWM7UUFDZEcsS0FBSztJQUNQO0lBQ0FPLE9BQU87UUFDTHBDLFNBQVM7UUFDVEMsZUFBZTtRQUNmTyxVQUFVO0lBQ1o7QUFDRixHQUFHO0FBRUksTUFBTTZCLGtCQUFrQnpDLDJEQUFVQSxDQUFDRSxNQUFNLENBQUM7SUFDL0N3QyxvQkFBb0I7UUFDbEIsZUFBZTtRQUNmdEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQm1CLFlBQVk7UUFDWkMsYUFBYTtRQUNiaUIsY0FBYztRQUNkbkMsWUFBWTtRQUNabUIsYUFBYTtRQUNiRyxjQUFjO1FBQ2RyQixlQUFlO0lBQ2pCO0lBQ0FtQyxXQUFXO1FBQ1R4QyxTQUFTO1FBQ1RDLGVBQWU7UUFDZndDLGNBQWM7SUFDaEI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGdlbmVyYWwpL3BkZi9jb21wb25lbnRzL2Fzc2V0cy9zdHlsZXMudHM/NGQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSBcIkByZWFjdC1wZGYvcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZXNOYXZiYXIgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgaGVhZGVyU3RydWN0dXJlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAvLyB3aWR0aDogMTEwMCxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgcGFkZGluZ1RvcDogMTUsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAxNSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIH0sXHJcbiAgaGVhZGVySXRlbToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIGZvbnRTaXplOiA1LFxyXG4gIH0sXHJcbiAgaGVhZGVySXRlbUNlbnRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICB9LFxyXG4gIGhlYWRlckl0ZW1DZW50ZXJNZWRpYToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICB9LFxyXG4gIGhlYWRlckl0ZW1EYXRhOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgICBtYXJnaW5Ub3A6IDE4LFxyXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGhlaWdodDogMjYwLFxyXG4gICAgbWFyZ2luQm90dG9tOiAyNSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZXNTZWN0aW9uID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHNlY3Rpb25TdHJ1Y3R1cmU6IHtcclxuICAgIC8vIHdpZHRoOiAxMTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIHBhZGRpbmdUb3A6IDE1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMTUsXHJcbiAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzRGV0YWlsID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIGRldGFpbFN0cnVjdHVyZToge1xyXG4gICAgLy8gd2lkdGg6IDc4MCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDMwLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDE1LFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICBkZXRhaWxJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBnYXA6IDU1LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxNSxcclxuICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgIHBhZGRpbmdUb3A6IDE1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMTUsXHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlc1R5QyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICB0eWNTdHJ1Y3R1cmU6IHtcclxuICAgIC8vIHdpZHRoOiAxMTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDE1LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxNSxcclxuICB9LFxyXG4gIHR5Yzoge1xyXG4gICAgbWFyZ2luVG9wOiA1LFxyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlc1ByaWNlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHByaWNlU3RydWN0dXJlOiB7XHJcbiAgICAvLyB3aWR0aDogMTEwMCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBwYWRkaW5nVG9wOiAyNSxcclxuICAgIHBhZGRpbmdCb3R0b206IDI1LFxyXG4gICAgcGFkZGluZ0xlZnQ6IDE1LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxNSxcclxuICAgIGdhcDogMjAsXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlc1NpZ25hdHVyZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBzaWduYXR1cmVTdHJ1Y3R1cmU6IHtcclxuICAgIC8vIHdpZHRoOiAxMTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgcGFkZGluZ1RvcDogNjAsXHJcbiAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDE1LFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMTUsXHJcbiAgfSxcclxuICBzaWduYXR1cmU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlN0eWxlU2hlZXQiLCJzdHlsZXNOYXZiYXIiLCJjcmVhdGUiLCJoZWFkZXJTdHJ1Y3R1cmUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJoZWFkZXIiLCJoZWFkZXJJdGVtIiwiZm9udFNpemUiLCJoZWFkZXJJdGVtQ2VudGVyIiwibWFyZ2luUmlnaHQiLCJoZWFkZXJJdGVtQ2VudGVyTWVkaWEiLCJhbGlnbkl0ZW1zIiwiaGVhZGVySXRlbURhdGEiLCJtYXJnaW5Ub3AiLCJsb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzdHlsZXNTZWN0aW9uIiwic2VjdGlvblN0cnVjdHVyZSIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsInBhZGRpbmdMZWZ0Iiwic3R5bGVzRGV0YWlsIiwiZGV0YWlsU3RydWN0dXJlIiwicGFkZGluZ1JpZ2h0IiwiZGV0YWlsIiwiZGV0YWlsSXRlbSIsImdhcCIsImRhdGUiLCJzdHlsZXNUeUMiLCJ0eWNTdHJ1Y3R1cmUiLCJ0eWMiLCJzdHlsZXNQcmljZSIsInByaWNlU3RydWN0dXJlIiwicHJpY2UiLCJzdHlsZXNTaWduYXR1cmUiLCJzaWduYXR1cmVTdHJ1Y3R1cmUiLCJib3JkZXJCb3R0b20iLCJzaWduYXR1cmUiLCJhbGlnbkNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(general)/pdf/components/assets/styles.ts\n"));

/***/ })

});