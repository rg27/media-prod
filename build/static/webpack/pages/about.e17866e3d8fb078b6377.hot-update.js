webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Footer */ "./components/Footer.js");




var _jsxFileName = "C:\\Users\\Rey Mar\\Desktop\\Running Projects\\portfolio\\components\\Container.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Container(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_6__["useTheme"])(),
      theme = _useTheme.theme,
      setTheme = _useTheme.setTheme; // After mounting, we have access to the theme


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    return setMounted(true);
  }, []);

  var children = props.children,
      customMeta = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children"]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var meta = _objectSpread({
    title: 'Rey Mar Gualvez',
    description: "Front-end developer, JavaScript enthusiast, and course creator.",
    type: 'website'
  }, customMeta);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-white dark:bg-black",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "follow, index"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        content: meta.description,
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://leerob.io".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: meta.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "Lee Robinson"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:site",
        content: "@leeerob"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), meta.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "article:published_time",
        content: meta.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#skip",
        className: "sr-only focus:not-sr-only",
        children: "Skip to content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10",
        onClick: function onClick() {
          return setTheme(theme === 'dark' ? 'light' : 'dark');
        },
        children: mounted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          stroke: "currentColor",
          className: "h-4 w-4 text-gray-800 dark:text-gray-200",
          children: theme === 'dark' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "skip",
      className: "flex flex-col justify-center bg-white dark:bg-black px-8",
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Container, "wgvx409c+6F8UDKhoFDlO/DYGqs=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_6__["useTheme"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Container;

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iLCJjdXN0b21NZXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiYXNQYXRoIiwiaW1hZ2UiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxLQUFELENBREM7QUFBQSxNQUNoQ0MsT0FEZ0M7QUFBQSxNQUN2QkMsVUFEdUI7O0FBQUEsa0JBRVhDLDREQUFRLEVBRkc7QUFBQSxNQUUvQkMsS0FGK0IsYUFFL0JBLEtBRitCO0FBQUEsTUFFeEJDLFFBRndCLGFBRXhCQSxRQUZ3QixFQUl2Qzs7O0FBQ0FDLHlEQUFTLENBQUM7QUFBQSxXQUFNSixVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQUQsRUFBeUIsRUFBekIsQ0FBVDs7QUFMdUMsTUFPL0JLLFFBUCtCLEdBT0hSLEtBUEcsQ0FPL0JRLFFBUCtCO0FBQUEsTUFPbEJDLFVBUGtCLHNHQU9IVCxLQVBHOztBQVF2QyxNQUFNVSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLElBQUk7QUFDUkMsU0FBSyxFQUFFLGlCQURDO0FBRVJDLGVBQVcsbUVBRkg7QUFHUkMsUUFBSSxFQUFFO0FBSEUsS0FJTE4sVUFKSyxDQUFWOztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFB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LGtCQURELGdCQVFDO0FBQ0UseUJBQWEsRUFBQyxPQURoQjtBQUVFLDBCQUFjLEVBQUMsT0FGakI7QUFHRSx1QkFBVyxFQUFFLENBSGY7QUFJRSxhQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQW9DRTtBQUFBLGdDQUNFLHFFQUFDLGdEQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsNkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsR0FBZjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyw2Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQWlFRTtBQUNFLFFBQUUsRUFBQyxNQURMO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBQUEsaUJBSUdHLFFBSkgsZUFLRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOztHQTNGdUJULFM7VUFFTUssb0QsRUFNYk8scUQ7OztLQVJPWixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmUxNzg2NmUzZDhmYjA3OGI2Mzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIocHJvcHMpIHtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIC8vIEFmdGVyIG1vdW50aW5nLCB3ZSBoYXZlIGFjY2VzcyB0byB0aGUgdGhlbWVcclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG5cclxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jdXN0b21NZXRhIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBtZXRhID0ge1xyXG4gICAgdGl0bGU6ICdSZXkgTWFyIEd1YWx2ZXonLFxyXG4gICAgZGVzY3JpcHRpb246IGBGcm9udC1lbmQgZGV2ZWxvcGVyLCBKYXZhU2NyaXB0IGVudGh1c2lhc3QsIGFuZCBjb3Vyc2UgY3JlYXRvci5gLFxyXG4gICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgLi4uY3VzdG9tTWV0YVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctYmxhY2tcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJmb2xsb3csIGluZGV4XCIgLz5cclxuICAgICAgICA8bWV0YSBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbGVlcm9iLmlvJHtyb3V0ZXIuYXNQYXRofWB9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17bWV0YS50eXBlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkxlZSBSb2JpbnNvblwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGEuaW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBsZWVlcm9iXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cclxuICAgICAgICB7bWV0YS5kYXRlICYmIChcclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e21ldGEuZGF0ZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwic3RpY2t5LW5hdiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWF4LXctNHhsIHctZnVsbCBwLTggbXktMCBtZDpteS04IG14LWF1dG8gYmctd2hpdGUgZGFyazpiZy1ibGFjayBiZy1vcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNza2lwXCIgY2xhc3NOYW1lPVwic3Itb25seSBmb2N1czpub3Qtc3Itb25seVwiPlxyXG4gICAgICAgICAgU2tpcCB0byBjb250ZW50XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgRGFyayBNb2RlXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkIHAtMyBoLTEwIHctMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb3VudGVkICYmIChcclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMSBzbTpwLTQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5BYm91dDwvYT5cclxuICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0xIHNtOnAtNCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiPkhvbWU8L2E+XHJcbiAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPG1haW5cclxuICAgICAgICBpZD1cInNraXBcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYmctd2hpdGUgZGFyazpiZy1ibGFjayBweC04XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==