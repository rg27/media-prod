webpackHotUpdate_N_E("pages/index",{

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
      }, this), meta.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "article:published_time",
        content: meta.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
        lineNumber: 36,
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
            lineNumber: 54,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/blog",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "skip",
      className: "flex flex-col justify-center bg-white dark:bg-black px-8",
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iLCJjdXN0b21NZXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsS0FBRCxDQURDO0FBQUEsTUFDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFVBRHVCOztBQUFBLGtCQUVYQyw0REFBUSxFQUZHO0FBQUEsTUFFL0JDLEtBRitCLGFBRS9CQSxLQUYrQjtBQUFBLE1BRXhCQyxRQUZ3QixhQUV4QkEsUUFGd0IsRUFJdkM7OztBQUNBQyx5REFBUyxDQUFDO0FBQUEsV0FBTUosVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxHQUFELEVBQXlCLEVBQXpCLENBQVQ7O0FBTHVDLE1BTy9CSyxRQVArQixHQU9IUixLQVBHLENBTy9CUSxRQVArQjtBQUFBLE1BT2xCQyxVQVBrQixzR0FPSFQsS0FQRzs7QUFRdkMsTUFBTVUsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxJQUFJO0FBQ1JDLFNBQUssRUFBRSxpQkFEQztBQUVSQyxlQUFXLG1FQUZIO0FBR1JDLFFBQUksRUFBRTtBQUhFLEtBSUxOLFVBSkssQ0FBVjs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFB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QUFBO0FBQUEsVUFERjtBQXVFRDs7R0F2RnVCVCxTO1VBRU1LLG9ELEVBTWJPLHFEOzs7S0FST1osUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OThjMWVmYjI1YTE4ZDNkNGRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzKSB7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAvLyBBZnRlciBtb3VudGluZywgd2UgaGF2ZSBhY2Nlc3MgdG8gdGhlIHRoZW1lXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY3VzdG9tTWV0YSB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbWV0YSA9IHtcclxuICAgIHRpdGxlOiAnUmV5IE1hciBHdWFsdmV6JyxcclxuICAgIGRlc2NyaXB0aW9uOiBgRnJvbnQtZW5kIGRldmVsb3BlciwgSmF2YVNjcmlwdCBlbnRodXNpYXN0LCBhbmQgY291cnNlIGNyZWF0b3IuYCxcclxuICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgIC4uLmN1c3RvbU1ldGFcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWJsYWNrXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57bWV0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiZm9sbG93LCBpbmRleFwiIC8+XHJcbiAgICAgICAgPG1ldGEgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICB7bWV0YS5kYXRlICYmIChcclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e21ldGEuZGF0ZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwic3RpY2t5LW5hdiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWF4LXctNHhsIHctZnVsbCBwLTggbXktMCBtZDpteS04IG14LWF1dG8gYmctd2hpdGUgZGFyazpiZy1ibGFjayBiZy1vcGFjaXR5LTYwXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNza2lwXCIgY2xhc3NOYW1lPVwic3Itb25seSBmb2N1czpub3Qtc3Itb25seVwiPlxyXG4gICAgICAgICAgU2tpcCB0byBjb250ZW50XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgRGFyayBNb2RlXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkIHAtMyBoLTEwIHctMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb3VudGVkICYmIChcclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMSBzbTpwLTQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMSBzbTpwLTQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5BYm91dDwvYT5cclxuICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMSBzbTpwLTQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5CbG9nPC9hPlxyXG4gICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTEgc206cC00IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGlkPVwic2tpcFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIHB4LThcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9