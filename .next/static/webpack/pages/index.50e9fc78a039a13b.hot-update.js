"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/dashboard/account-popover.js":
/*!**************************************************!*\
  !*** ./src/layouts/dashboard/account-popover.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountPopover: function() { return /* binding */ AccountPopover; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/MenuList/MenuList.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,MenuItem,MenuList,Popover,Typography!=!@mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify/auth */ \"./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/features/userSlice */ \"./src/features/userSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AccountPopover = (props)=>{\n    _s();\n    const { anchorEl, onClose, open } = props;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleSignOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)().then(()=>{\n            dispatch((0,_src_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.setUser)(null));\n            router.push(\"/auth/login\");\n        });\n    }, [\n        /* onClose, auth, */ router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        anchorEl: anchorEl,\n        anchorOrigin: {\n            horizontal: \"left\",\n            vertical: \"bottom\"\n        },\n        onClose: onClose,\n        open: open,\n        PaperProps: {\n            sx: {\n                width: 200\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    py: 1.5,\n                    px: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"overline\",\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        color: \"text.secondary\",\n                        variant: \"body2\",\n                        children: \"club?.Name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                disablePadding: true,\n                dense: true,\n                sx: {\n                    p: \"8px\",\n                    \"& > *\": {\n                        borderRadius: 1\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_MenuItem_MenuList_Popover_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    onClick: handleSignOut,\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\account-popover.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountPopover, \"RNGcDqSAhCUkPcKoO0wokmv7TAs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = AccountPopover;\nAccountPopover.propTypes = {\n    anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any),\n    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),\n    open: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"AccountPopover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvYWNjb3VudC1wb3BvdmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNUO0FBQ21EO0FBQzNDO0FBQ1k7QUFDSjtBQUU1QyxNQUFNYSxpQkFBaUIsQ0FBQ0M7O0lBQzdCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHSDtJQUVwQyxNQUFNSSxTQUFTakIsMERBQVNBO0lBQ3hCLE1BQU1rQixXQUFXVCx3REFBV0E7SUFJNUIsTUFBTVUsZ0JBQWdCcEIsa0RBQVdBLENBQy9CO1FBRUVTLHlEQUFPQSxHQUFHWSxJQUFJLENBQUM7WUFDYkYsU0FBU1AsZ0VBQU9BLENBQUM7WUFDakJNLE9BQU9JLElBQUksQ0FBQztRQUNkO0lBRUYsR0FDQTtRQUFDLGtCQUFrQixHQUFHSjtLQUFPO0lBRy9CLHFCQUNFLDhEQUFDWCw0SEFBT0E7UUFDTlEsVUFBVUE7UUFDVlEsY0FBYztZQUNaQyxZQUFZO1lBQ1pDLFVBQVU7UUFDWjtRQUNBVCxTQUFTQTtRQUNUQyxNQUFNQTtRQUNOUyxZQUFZO1lBQUVDLElBQUk7Z0JBQUVDLE9BQU87WUFBSTtRQUFFOzswQkFFakMsOERBQUN6Qiw0SEFBR0E7Z0JBQ0Z3QixJQUFJO29CQUNGRSxJQUFJO29CQUNKQyxJQUFJO2dCQUNOOztrQ0FFQSw4REFBQ3RCLDRIQUFVQTt3QkFBQ3VCLFNBQVE7a0NBQVc7Ozs7OztrQ0FHL0IsOERBQUN2Qiw0SEFBVUE7d0JBQ1R3QixPQUFNO3dCQUNORCxTQUFRO2tDQUVQOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUMzQiw0SEFBT0E7Ozs7OzBCQUNSLDhEQUFDRSw2SEFBUUE7Z0JBQ1AyQixjQUFjO2dCQUNkQyxLQUFLO2dCQUNMUCxJQUFJO29CQUNGUSxHQUFHO29CQUNILFNBQVM7d0JBQ1BDLGNBQWM7b0JBQ2hCO2dCQUNGOzBCQUVBLDRFQUFDL0IsNkhBQVFBO29CQUFDZ0MsU0FBU2pCOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQyxFQUFFO0dBaEVXUDs7UUFHSVosc0RBQVNBO1FBQ1BTLG9EQUFXQTs7O0tBSmpCRztBQWtFYkEsZUFBZXlCLFNBQVMsR0FBRztJQUN6QnZCLFVBQVViLHdEQUFhO0lBQ3ZCYyxTQUFTZCx5REFBYztJQUN2QmUsTUFBTWYseURBQWMsQ0FBQ3dDLFVBQVU7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvZGFzaGJvYXJkL2FjY291bnQtcG9wb3Zlci5qcz83MDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBCb3gsIERpdmlkZXIsIE1lbnVJdGVtLCBNZW51TGlzdCwgUG9wb3ZlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gJ0Avc3JjL2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudFBvcG92ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFuY2hvckVsLCBvbkNsb3NlLCBvcGVuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIFxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG5cclxuICAgICAgc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXIobnVsbCkpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9sb2dpbicpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgWy8qIG9uQ2xvc2UsIGF1dGgsICovIHJvdXRlcl1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIFBhcGVyUHJvcHM9e3sgc3g6IHsgd2lkdGg6IDIwMCB9IH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgcHk6IDEuNSxcclxuICAgICAgICAgIHB4OiAyXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiPlxyXG4gICAgICAgICAgQWNjb3VudFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcImNsdWI/Lk5hbWVcIn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8TWVudUxpc3RcclxuICAgICAgICBkaXNhYmxlUGFkZGluZ1xyXG4gICAgICAgIGRlbnNlXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHA6ICc4cHgnLFxyXG4gICAgICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9PlxyXG4gICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnVMaXN0PlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5BY2NvdW50UG9wb3Zlci5wcm9wVHlwZXMgPSB7XHJcbiAgYW5jaG9yRWw6IFByb3BUeXBlcy5hbnksXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJQcm9wVHlwZXMiLCJCb3giLCJEaXZpZGVyIiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIlBvcG92ZXIiLCJUeXBvZ3JhcGh5Iiwic2lnbk91dCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRVc2VyIiwiQWNjb3VudFBvcG92ZXIiLCJwcm9wcyIsImFuY2hvckVsIiwib25DbG9zZSIsIm9wZW4iLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZVNpZ25PdXQiLCJ0aGVuIiwicHVzaCIsImFuY2hvck9yaWdpbiIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsIlBhcGVyUHJvcHMiLCJzeCIsIndpZHRoIiwicHkiLCJweCIsInZhcmlhbnQiLCJjb2xvciIsImRpc2FibGVQYWRkaW5nIiwiZGVuc2UiLCJwIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsInByb3BUeXBlcyIsImFueSIsImZ1bmMiLCJib29sIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/account-popover.js\n"));

/***/ })

});