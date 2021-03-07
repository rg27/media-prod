webpackHotUpdate_N_E("pages/404",{

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
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website'
  }, customMeta);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-white dark:bg-black",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "follow, index"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        content: meta.description,
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://leerob.io".concat(router.asPath)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: meta.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "Lee Robinson"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:site",
        content: "@leeerob"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), meta.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "article:published_time",
        content: meta.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#skip",
        className: "sr-only focus:not-sr-only",
        children: "Skip to content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
            lineNumber: 66,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-1 sm:p-4 text-gray-900 dark:text-gray-100",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "skip",
      className: "flex flex-col justify-center bg-white dark:bg-black px-8",
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iLCJjdXN0b21NZXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInR5cGUiLCJhc1BhdGgiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxLQUFELENBREM7QUFBQSxNQUNoQ0MsT0FEZ0M7QUFBQSxNQUN2QkMsVUFEdUI7O0FBQUEsa0JBRVhDLDREQUFRLEVBRkc7QUFBQSxNQUUvQkMsS0FGK0IsYUFFL0JBLEtBRitCO0FBQUEsTUFFeEJDLFFBRndCLGFBRXhCQSxRQUZ3QixFQUl2Qzs7O0FBQ0FDLHlEQUFTLENBQUM7QUFBQSxXQUFNSixVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQUQsRUFBeUIsRUFBekIsQ0FBVDs7QUFMdUMsTUFPL0JLLFFBUCtCLEdBT0hSLEtBUEcsQ0FPL0JRLFFBUCtCO0FBQUEsTUFPbEJDLFVBUGtCLHNHQU9IVCxLQVBHOztBQVF2QyxNQUFNVSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLElBQUk7QUFDUkMsU0FBSyxFQUFFLGlCQURDO0FBRVJDLGVBQVcsbUVBRkg7QUFHUkMsU0FBSyxFQUFFLDRDQUhDO0FBSVJDLFFBQUksRUFBRTtBQUpFLEtBS0xQLFVBTEssQ0FBVjs7QUFRQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUcsSUFBSSxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZUFBTyxFQUFFRCxJQUFJLENBQUNFLFdBQXBCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixlQUFPLDZCQUFzQkosTUFBTSxDQUFDTyxNQUE3QjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUVMLElBQUksQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUVKLElBQUksQ0FBQ0U7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFRixJQUFJLENBQUNDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBRUQsSUFBSSxDQUFDRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFZRTtBQUFNLFlBQUksRUFBQyxlQUFYO0FBQTJCLGVBQU8sRUFBRUgsSUFBSSxDQUFDQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFhRTtBQUFNLFlBQUksRUFBQyxxQkFBWDtBQUFpQyxlQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBTSxZQUFJLEVBQUMsZUFBWDtBQUEyQixlQUFPLEVBQUVGLElBQUksQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLEVBZUdILElBQUksQ0FBQ00sSUFBTCxpQkFDQztBQUFNLGdCQUFRLEVBQUMsd0JBQWY7QUFBd0MsZUFBTyxFQUFFTixJQUFJLENBQUNNO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFvQkU7QUFBSyxlQUFTLEVBQUMsNkhBQWY7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxPQUFSO0FBQWdCLGlCQUFTLEVBQUMsMkJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUNFLHNCQUFXLGtCQURiO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxpQkFBUyxFQUFDLG9EQUhaO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1aLFFBQVEsQ0FBQ0QsS0FBSyxLQUFLLE1BQVYsR0FBbUIsT0FBbkIsR0FBNkIsTUFBOUIsQ0FBZDtBQUFBLFNBSlg7QUFBQSxrQkFNR0gsT0FBTyxpQkFDTjtBQUNFLGVBQUssRUFBQyw0QkFEUjtBQUVFLGlCQUFPLEVBQUMsV0FGVjtBQUdFLGNBQUksRUFBQyxjQUhQO0FBSUUsZ0JBQU0sRUFBQyxjQUpUO0FBS0UsbUJBQVMsRUFBQywwQ0FMWjtBQUFBLG9CQU9HRyxLQUFLLEtBQUssTUFBVixnQkFDQztBQUNFLHlCQUFhLEVBQUMsT0FEaEI7QUFFRSwwQkFBYyxFQUFDLE9BRmpCO0FBR0UsdUJBQVcsRUFBRSxDQUhmO0FBSUUsYUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxnQkFRQztBQUNFLHlCQUFhLEVBQUMsT0FEaEI7QUFFRSwwQkFBYyxFQUFDLE9BRmpCO0FBR0UsdUJBQVcsRUFBRSxDQUhmO0FBSUUsYUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFvQ0U7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFVLGNBQUksRUFBQyxRQUFmO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLDZDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLGdEQUFEO0FBQVUsY0FBSSxFQUFDLEdBQWY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsNkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUFpRUU7QUFDRSxRQUFFLEVBQUMsTUFETDtBQUVFLGVBQVMsRUFBQywwREFGWjtBQUFBLGlCQUlHRyxRQUpILGVBS0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0E1RnVCVCxTO1VBRU1LLG9ELEVBTWJPLHFEOzs7S0FST1osUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuNGJmZTMyZmVlNGQwMDA3MjAwNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcihwcm9wcykge1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgLy8gQWZ0ZXIgbW91bnRpbmcsIHdlIGhhdmUgYWNjZXNzIHRvIHRoZSB0aGVtZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmN1c3RvbU1ldGEgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG1ldGEgPSB7XHJcbiAgICB0aXRsZTogJ1JleSBNYXIgR3VhbHZleicsXHJcbiAgICBkZXNjcmlwdGlvbjogYEZyb250LWVuZCBkZXZlbG9wZXIsIEphdmFTY3JpcHQgZW50aHVzaWFzdCwgYW5kIGNvdXJzZSBjcmVhdG9yLmAsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vbGVlcm9iLmlvL3N0YXRpYy9pbWFnZXMvYmFubmVyLnBuZycsXHJcbiAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAuLi5jdXN0b21NZXRhXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ibGFja1wiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e21ldGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImZvbGxvdywgaW5kZXhcIiAvPlxyXG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9sZWVyb2IuaW8ke3JvdXRlci5hc1BhdGh9YH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXttZXRhLnR5cGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTGVlIFJvYmluc29uXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGxlZWVyb2JcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhLmltYWdlfSAvPlxyXG4gICAgICAgIHttZXRhLmRhdGUgJiYgKFxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIgY29udGVudD17bWV0YS5kYXRlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJzdGlja3ktbmF2IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYXgtdy00eGwgdy1mdWxsIHAtOCBteS0wIG1kOm15LTggbXgtYXV0byBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIGJnLW9wYWNpdHktNjBcIj5cclxuICAgICAgICA8YSBocmVmPVwiI3NraXBcIiBjbGFzc05hbWU9XCJzci1vbmx5IGZvY3VzOm5vdC1zci1vbmx5XCI+XHJcbiAgICAgICAgICBTa2lwIHRvIGNvbnRlbnRcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBEYXJrIE1vZGVcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQgcC0zIGgtMTAgdy0xMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21vdW50ZWQgJiYgKFxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMjAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGVtZSA9PT0gJ2RhcmsnID8gKFxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0xIHNtOnAtNCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTEgc206cC00IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGlkPVwic2tpcFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIHB4LThcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9