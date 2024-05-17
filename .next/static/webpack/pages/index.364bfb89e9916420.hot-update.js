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

/***/ "./src/layouts/dashboard/side-nav-item.js":
/*!************************************************!*\
  !*** ./src/layouts/dashboard/side-nav-item.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideNavItem: function() { return /* binding */ SideNavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _barrel_optimize_names_Box_ButtonBase_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,ButtonBase!=!@mui/material */ \"./node_modules/@mui/material/ButtonBase/ButtonBase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_ButtonBase_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,ButtonBase!=!@mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hooks/use-auth */ \"./src/hooks/use-auth.js\");\n/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify/auth */ \"./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_features_userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/features/userSlice */ \"./src/features/userSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SideNavItem = (props)=>{\n    _s();\n    const { active = false, disabled, external, icon, path, title } = props;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const linkProps = path ? external ? {\n        component: \"a\",\n        href: path,\n        target: \"_blank\"\n    } : {\n        component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n        href: path\n    } : {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_ButtonBase_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            onClick: ()=>{\n                if (title == \"Logout\") {\n                    (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.signOut)().then(()=>{\n                        dispatch((0,_src_features_userSlice__WEBPACK_IMPORTED_MODULE_5__.setUser)(null));\n                        router.push(\"/auth/login\");\n                    });\n                }\n            },\n            sx: {\n                alignItems: \"center\",\n                borderRadius: 1,\n                display: \"flex\",\n                justifyContent: \"flex-start\",\n                pl: \"16px\",\n                pr: \"16px\",\n                py: \"6px\",\n                textAlign: \"left\",\n                width: \"100%\",\n                ...active && {\n                    backgroundColor: \"rgba(255, 255, 255, 0.04)\"\n                },\n                \"&:hover\": {\n                    backgroundColor: \"rgba(255, 255, 255, 0.04)\"\n                }\n            },\n            ...linkProps,\n            children: [\n                icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_ButtonBase_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    component: \"span\",\n                    sx: {\n                        alignItems: \"center\",\n                        color: \"grey\",\n                        display: \"inline-flex\",\n                        justifyContent: \"center\",\n                        mr: 2,\n                        ...active && {\n                            color: \"white\"\n                        }\n                    },\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\side-nav-item.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_ButtonBase_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    component: \"span\",\n                    sx: {\n                        color: \"neutral.400\",\n                        flexGrow: 1,\n                        fontFamily: (theme)=>theme.typography.fontFamily,\n                        fontSize: 14,\n                        fontWeight: 600,\n                        lineHeight: \"24px\",\n                        whiteSpace: \"nowrap\",\n                        ...active && {\n                            color: \"common.white\"\n                        },\n                        ...disabled && {\n                            color: \"neutral.500\"\n                        }\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\side-nav-item.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\side-nav-item.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\prodwest\\\\src\\\\layouts\\\\dashboard\\\\side-nav-item.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideNavItem, \"zXnflAqd4rnyBpogtdAc6I4Vk2A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = SideNavItem;\nSideNavItem.propTypes = {\n    active: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),\n    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),\n    external: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),\n    icon: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),\n    path: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),\n    title: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"SideNavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvc2lkZS1uYXYtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0U7QUFDYTtBQUNKO0FBQ0M7QUFDRjtBQUNZO0FBQ0o7QUFHNUMsTUFBTVUsY0FBYyxDQUFDQzs7SUFDMUIsTUFBTSxFQUFFQyxTQUFTLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR047SUFFbEUsTUFBTU8sU0FBU2QsMERBQVNBO0lBQ3hCLE1BQU1lLFdBQVdaLHdEQUFXQTtJQUU1QixNQUFNYSxZQUFZSixPQUNkRixXQUNFO1FBQ0FPLFdBQVc7UUFDWEMsTUFBTU47UUFDTk8sUUFBUTtJQUNWLElBQ0U7UUFDQUYsV0FBV3JCLGtEQUFRQTtRQUNuQnNCLE1BQU1OO0lBQ1IsSUFDQSxDQUFDO0lBRUwscUJBQ0UsOERBQUNRO2tCQUNDLDRFQUFDckIsMEZBQVVBO1lBQ1RzQixTQUFTO2dCQUNQLElBQUlSLFNBQVMsVUFBVTtvQkFDckJYLHlEQUFPQSxHQUFHb0IsSUFBSSxDQUFDO3dCQUNiUCxTQUFTVixnRUFBT0EsQ0FBQzt3QkFDakJTLE9BQU9TLElBQUksQ0FBQztvQkFDZDtnQkFDRjtZQUNGO1lBQ0FDLElBQUk7Z0JBQ0ZDLFlBQVk7Z0JBQ1pDLGNBQWM7Z0JBQ2RDLFNBQVM7Z0JBQ1RDLGdCQUFnQjtnQkFDaEJDLElBQUk7Z0JBQ0pDLElBQUk7Z0JBQ0pDLElBQUk7Z0JBQ0pDLFdBQVc7Z0JBQ1hDLE9BQU87Z0JBQ1AsR0FBSXpCLFVBQVU7b0JBQ1owQixpQkFBaUI7Z0JBQ25CLENBQUM7Z0JBQ0QsV0FBVztvQkFDVEEsaUJBQWlCO2dCQUNuQjtZQUNGO1lBQ0MsR0FBR2xCLFNBQVM7O2dCQUVaTCxzQkFDQyw4REFBQ2IsMEZBQUdBO29CQUNGbUIsV0FBVTtvQkFDVk8sSUFBSTt3QkFDRkMsWUFBWTt3QkFDWlUsT0FBTzt3QkFDUFIsU0FBUzt3QkFDVEMsZ0JBQWdCO3dCQUNoQlEsSUFBSTt3QkFDSixHQUFJNUIsVUFBVTs0QkFDWjJCLE9BQU87d0JBQ1QsQ0FBQztvQkFDSDs4QkFFQ3hCOzs7Ozs7OEJBR0wsOERBQUNiLDBGQUFHQTtvQkFDRm1CLFdBQVU7b0JBQ1ZPLElBQUk7d0JBQ0ZXLE9BQU87d0JBQ1BFLFVBQVU7d0JBQ1ZDLFlBQVksQ0FBQ0MsUUFBVUEsTUFBTUMsVUFBVSxDQUFDRixVQUFVO3dCQUNsREcsVUFBVTt3QkFDVkMsWUFBWTt3QkFDWkMsWUFBWTt3QkFDWkMsWUFBWTt3QkFDWixHQUFJcEMsVUFBVTs0QkFDWjJCLE9BQU87d0JBQ1QsQ0FBQzt3QkFDRCxHQUFJMUIsWUFBWTs0QkFDZDBCLE9BQU87d0JBQ1QsQ0FBQztvQkFDSDs4QkFFQ3RCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLEVBQUU7R0F6RldQOztRQUdJTixzREFBU0E7UUFDUEcsb0RBQVdBOzs7S0FKakJHO0FBMkZiQSxZQUFZdUMsU0FBUyxHQUFHO0lBQ3RCckMsUUFBUVgsd0RBQWM7SUFDdEJZLFVBQVVaLHdEQUFjO0lBQ3hCYSxVQUFVYix3REFBYztJQUN4QmMsTUFBTWQsd0RBQWM7SUFDcEJlLE1BQU1mLDBEQUFnQjtJQUN0QmdCLE9BQU9oQiwwREFBZ0IsQ0FBQ29ELFVBQVU7QUFDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvZGFzaGJvYXJkL3NpZGUtbmF2LWl0ZW0uanM/NjRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQm94LCBCdXR0b25CYXNlIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdzcmMvaG9va3MvdXNlLWF1dGgnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gJ0Avc3JjL2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVOYXZJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhY3RpdmUgPSBmYWxzZSwgZGlzYWJsZWQsIGV4dGVybmFsLCBpY29uLCBwYXRoLCB0aXRsZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBcclxuICBjb25zdCBsaW5rUHJvcHMgPSBwYXRoXHJcbiAgICA/IGV4dGVybmFsXHJcbiAgICAgID8ge1xyXG4gICAgICAgIGNvbXBvbmVudDogJ2EnLFxyXG4gICAgICAgIGhyZWY6IHBhdGgsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgIGNvbXBvbmVudDogTmV4dExpbmssXHJcbiAgICAgICAgaHJlZjogcGF0aFxyXG4gICAgICB9XHJcbiAgICA6IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmICh0aXRsZSA9PSBcIkxvZ291dFwiKSB7XHJcbiAgICAgICAgICAgIHNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgcGw6ICcxNnB4JyxcclxuICAgICAgICAgIHByOiAnMTZweCcsXHJcbiAgICAgICAgICBweTogJzZweCcsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAuLi4oYWN0aXZlICYmIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSdcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ubGlua1Byb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ljb24gJiYgKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBjb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgbXI6IDIsXHJcbiAgICAgICAgICAgICAgLi4uKGFjdGl2ZSAmJiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnbmV1dHJhbC40MDAnLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogKHRoZW1lKSA9PiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAuLi4oYWN0aXZlICYmIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJ2NvbW1vbi53aGl0ZSdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC4uLihkaXNhYmxlZCAmJiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICduZXV0cmFsLjUwMCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5TaWRlTmF2SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXh0ZXJuYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxyXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dExpbmsiLCJQcm9wVHlwZXMiLCJCb3giLCJCdXR0b25CYXNlIiwidXNlUm91dGVyIiwidXNlQXV0aCIsInNpZ25PdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0VXNlciIsIlNpZGVOYXZJdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJkaXNhYmxlZCIsImV4dGVybmFsIiwiaWNvbiIsInBhdGgiLCJ0aXRsZSIsInJvdXRlciIsImRpc3BhdGNoIiwibGlua1Byb3BzIiwiY29tcG9uZW50IiwiaHJlZiIsInRhcmdldCIsImxpIiwib25DbGljayIsInRoZW4iLCJwdXNoIiwic3giLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGwiLCJwciIsInB5IiwidGV4dEFsaWduIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1yIiwiZmxleEdyb3ciLCJmb250RmFtaWx5IiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIndoaXRlU3BhY2UiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/side-nav-item.js\n"));

/***/ })

});