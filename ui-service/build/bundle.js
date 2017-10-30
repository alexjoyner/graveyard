/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(2);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _Chart = __webpack_require__(13);

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            currentAnalogTemp: 20,
            tempHistoryData: [['x'], ['Analog Temp']]
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setInterval(function () {
                axios.get('http://192.168.0.46:3000/ai1').then(function (res) {
                    var data = JSON.parse(res.request.response).data[2] / 10;
                    var newStateInfo = _this2.state;
                    // newStateInfo.GuageChartData.data.columns[0][1] = data;
                    var date = new Date();
                    // newStateInfo.LineChartData.data.columns[0].push(date);
                    // newStateInfo.LineChartData.data.columns[1].push(
                    //   Math.round(data * 10) / 10,
                    // );
                    newStateInfo.currentAnalogTemp = data;
                    newStateInfo.tempHistoryData[0].push(date);
                    newStateInfo.tempHistoryData[1].push(data);
                    _this2.setState(newStateInfo);
                });
            }, 1500);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _2.default.root },
                _react2.default.createElement(
                    'div',
                    { className: _2.default.container },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Ambient Temperature'
                    ),
                    _react2.default.createElement(_Chart2.default, {
                        chartID: 'chart1',
                        chartOpts: {
                            data: {
                                columns: [['Data', this.state.currentAnalogTemp]],
                                type: 'gauge'
                            },
                            gauge: {
                                label: {
                                    format: function format(value) {
                                        return value + '\xB0F';
                                    }
                                }
                            },
                            color: {
                                pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
                                threshold: {
                                    values: [30, 70, 78, 100]
                                }
                            }
                        }
                    })
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = (0, _withStyles2.default)(_2.default)(Home);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
   res.send((0, _renderer2.default)());
});

app.listen(3000, function () {
   console.log('Listening on port 3000');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _Home = __webpack_require__(1);

var _Home2 = _interopRequireDefault(_Home);

var _ContextProvider = __webpack_require__(17);

var _ContextProvider2 = _interopRequireDefault(_ContextProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
    var css = new Set(); // CSS for all rendered React components
    var context = { insertCss: function insertCss() {
            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                styles[_key] = arguments[_key];
            }

            return styles.forEach(function (style) {
                return css.add(style._getCss());
            });
        } };
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _ContextProvider2.default,
        { context: context },
        _react2.default.createElement(_Home2.default, null)
    ));

    return '\n        <html>\n            <head>\n                <style type="text/css">' + [].concat(_toConsumableArray(css)).join('') + '</style>\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(8);
    var insertCss = __webpack_require__(10);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./_.pcss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./_.pcss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, "/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n.root {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  max-width: var(--max-content-width);\r\n}\r\n\r\n.analogGauge {\r\n  float: left;\r\n}\r\n\r\n.lineChart {\r\n  float: right;\r\n}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(11);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(2);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _c = __webpack_require__(14);

var _c2 = _interopRequireDefault(_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var c3 = void 0;
if (typeof window !== 'undefined') {
  __webpack_require__(15);
  c3 = __webpack_require__(16);
}

var Chart = function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));

    _this.chart = {};
    return _this;
  }

  _createClass(Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      this.chart.load({
        columns: nextProps.chartOpts.data.columns
      });
      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateChart();
    }
  }, {
    key: 'updateChart',
    value: function updateChart() {
      this.chart = c3.generate(_extends({
        bindto: '#' + this.props.chartID
      }, this.props.chartOpts));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: _c2.default, id: this.props.chartID });
    }
  }]);

  return Chart;
}(_react.Component);

exports.default = Chart;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("c3/c3.css");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("c3");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Home = __webpack_require__(1);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextProvider = function (_React$Component) {
    _inherits(ContextProvider, _React$Component);

    function ContextProvider() {
        _classCallCheck(this, ContextProvider);

        return _possibleConstructorReturn(this, (ContextProvider.__proto__ || Object.getPrototypeOf(ContextProvider)).apply(this, arguments));
    }

    _createClass(ContextProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return _extends({}, this.props.context);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Home2.default, this.props);
        }
    }]);

    return ContextProvider;
}(_react2.default.Component);

ContextProvider.childContextTypes = {
    insertCss: _propTypes2.default.func
};
exports.default = ContextProvider;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);