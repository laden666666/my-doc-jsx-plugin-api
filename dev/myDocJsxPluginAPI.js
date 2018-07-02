(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("my-doc-jsx"));
	else if(typeof define === 'function' && define.amd)
		define("myDocJsxPluginAPI", [], factory);
	else if(typeof exports === 'object')
		exports["myDocJsxPluginAPI"] = factory(require("my-doc-jsx"));
	else
		root["myDocJsxPluginAPI"] = factory(root["myDocJsx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var my_doc_jsx_1 = __webpack_require__(0);
var API_1 = __webpack_require__(3);
var API_2 = __webpack_require__(5);
var HTMLExample_1 = __webpack_require__(4);

var Plugin = function (_my_doc_jsx_1$BasePlu) {
    _inherits(Plugin, _my_doc_jsx_1$BasePlu);

    function Plugin() {
        _classCallCheck(this, Plugin);

        var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this));

        _this.registerBlockNode('HTML', 'api', API_1.default);
        _this.registerBlockNode('HTML', 'html-example', HTMLExample_1.default);
        _this.registerBlockNode('MARKDOWN', 'api', API_2.default);
        _this.registerBlockNode('MARKDOWN', 'html-example', HTMLExample_1.default);
        return _this;
    }

    return Plugin;
}(my_doc_jsx_1.BasePlugin);

module.exports = Plugin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var my_doc_jsx_1 = __webpack_require__(0);
var style = __webpack_require__(8);
//查找参数的正则
var paramRegex = /@param\s+({.*})?(\s+\S+)?(\s+.*)?$/;
//查找返回值的正则
var returnRegex = /@return\s+({.*})?(\s+.*)?$/;

var API = function (_my_doc_jsx_1$BlockNo) {
    _inherits(API, _my_doc_jsx_1$BlockNo);

    function API(node) {
        _classCallCheck(this, API);

        var _this = _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(API, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('api', style);
            var str = _render.renderInlineNodes(this.childPseudoNodes);
            //将注释代码以“*”分割，因为每个个“*”是一行
            var rows = str.split("*").map(function (str) {
                return str.trim();
            }).filter(function (str) {
                return str != '<br/>';
            });
            //获取全部描述文本，描述文本是不以@开头的所有文本
            var describeText = rows.filter(function (str) {
                return str[0] != '@';
            }).join('\n');
            //参数
            var paramsText = rows.filter(function (str) {
                return paramRegex.test(str);
            }).map(function (str) {
                var paramInfo = paramRegex.exec(str).slice(1, 4).map(function (str) {
                    return str && str.trim();
                });
                return {
                    name: paramInfo[1],
                    type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                    describe: paramInfo[2]
                };
            });
            //返回值
            var returnText = rows.filter(function (str) {
                return returnRegex.test(str);
            }).map(function (str) {
                var paramInfo = returnRegex.exec(str).slice(1, 3).map(function (str) {
                    return str && str.trim();
                });
                return {
                    type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                    describe: paramInfo[1]
                };
            })[0];
            var html = "<div class=\"mydoc_api\">\n                <div class=\"mydoc_api_describe\">" + describeText + "</div>\n                <div class=\"mydoc_api_content\">\n                    \n                    " + (paramsText.length ? "\n                    <p>\u53C2\u6570</p>\n                    <table class=\"mydoc_api_table\">\n                        <tr>\n                            <th>\u53C2\u6570\u540D</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u53C2\u6570\u8BF4\u660E</th>\n                        </tr>\n                        " + paramsText.map(function (param) {
                return "<tr>\n                            <td>" + (param.name || '') + "</td><td>" + (param.type || '') + "</td><td>" + (param.describe || '') + "</td>\n                        </tr>";
            }).join('') + "\n                    </table>\n                    " : '') + "\n                    \n                    " + (returnText ? "\n                    <p>\u8FD4\u56DE\u503C</p>\n                    <table class=\"mydoc_api_table\">\n                        <tr>\n                            <th>\u53C2\u6570\u7C7B\u578B</th><th>\u53C2\u6570\u8BF4\u660E</th>\n                        </tr>\n                        <tr>\n                            <td>" + (returnText.type || '') + "</td><td>" + (returnText.describe || '') + "</td>\n                        </tr>\n                    </table>\n                    " : '') + "\n                </div>\n            </div>";
            return html;
        }
    }]);

    return API;
}(my_doc_jsx_1.BlockNode);

exports.default = API;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var my_doc_jsx_1 = __webpack_require__(0);
var style = __webpack_require__(9);

var HtmlExample = function (_my_doc_jsx_1$BlockNo) {
    _inherits(HtmlExample, _my_doc_jsx_1$BlockNo);

    function HtmlExample(node) {
        _classCallCheck(this, HtmlExample);

        var _this = _possibleConstructorReturn(this, (HtmlExample.__proto__ || Object.getPrototypeOf(HtmlExample)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(HtmlExample, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('html-example', style);
            var srcdoc = '<!DOCTYPE html>\n' + this.childPseudoNodes[0].getText() || '';
            return "\n<div class=\"mydoc_api_html-example\">\n    <iframe class=\"mydoc_api_html-example_iframe\" " + (this.props.height != null ? "height=\"" + this.props.height + "\"" : '') + " \n        " + (this.props.width != null ? "width=\"" + this.props.width + "\"" : '') + "    \n        srcdoc=\"" + srcdoc.replace(/\"/g, '&#34;') + "\"></iframe>\n    <div class=\"mydoc_api_html-example_tip\">Your browser does not support the srcdoc attribute in the iframe. Or CSP prohibits the use of iframes.</div>\n    <details>\n        <summary class=\"mydoc_api_html-example_summary\">view code</summary>\n        <p>\n" + _render.renderBlockNodes(my_doc_jsx_1.jsxStr2Nodes("<code>{`" + srcdoc + "`}</code>", _render, {})) + "</p>\n        </details>\n    </div>\n";
        }
    }]);

    return HtmlExample;
}(my_doc_jsx_1.BlockNode);

exports.default = HtmlExample;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var my_doc_jsx_1 = __webpack_require__(0);
//查找参数的正则
var paramRegex = /@param\s+({.*})?(\s+\S+)?(\s+.*)?$/;
//查找返回值的正则
var returnRegex = /@return\s+({.*})?(\s+.*)?$/;

var API = function (_my_doc_jsx_1$BlockNo) {
    _inherits(API, _my_doc_jsx_1$BlockNo);

    function API(node) {
        _classCallCheck(this, API);

        var _this = _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(API, [{
        key: "render",
        value: function render(_render) {
            var str = _render.renderInlineNodes(this.childPseudoNodes);
            //将注释代码以“*”分割，因为每个个“*”是一行
            var rows = str.split("*").map(function (str) {
                return str.trim();
            }).filter(function (str) {
                return str != '<br/>';
            });
            //获取全部描述文本，描述文本是不以@开头的所有文本
            var describeText = rows.filter(function (str) {
                return str[0] != '@';
            }).join('\n');
            //参数
            var paramsText = rows.filter(function (str) {
                return paramRegex.test(str);
            }).map(function (str) {
                var paramInfo = paramRegex.exec(str).slice(1, 4).map(function (str) {
                    return str && str.trim();
                });
                return {
                    name: paramInfo[1],
                    type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                    describe: paramInfo[2]
                };
            });
            //返回值
            var returnText = rows.filter(function (str) {
                return returnRegex.test(str);
            }).map(function (str) {
                var paramInfo = returnRegex.exec(str).slice(1, 3).map(function (str) {
                    return str && str.trim();
                });
                return {
                    type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                    describe: paramInfo[1]
                };
            })[0];
            var mdText = "\n>" + describeText + "\n\n" + (paramsText.length ? "\n##### \u53C2\u6570\n|\u53C2\u6570\u540D|\u53C2\u6570\u7C7B\u578B|\u53C2\u6570\u8BF4\u660E|\n|-|-|-|\n" + paramsText.map(function (param) {
                return "|" + (param.name || '') + "|" + (param.type || '') + "|" + (param.describe || '') + "|";
            }).join('') + "\n" : '') + "\n\n" + (returnText ? "\n##### \u8FD4\u56DE\u503C\n|\u53C2\u6570\u7C7B\u578B|\u53C2\u6570\u8BF4\u660E|\n|-|-|-|\n|" + (returnText.type || '') + "|" + (returnText.describe || '') + "|\n" : '') + "\n";
            return mdText;
        }
    }]);

    return API;
}(my_doc_jsx_1.BlockNode);

exports.default = API;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mydoc_api{\r\n    line-height: 16px;\r\n    position: relative;\r\n    z-index: 1;\r\n    color: #333;\r\n    margin-top: 10px;\r\n}\r\n.mydoc_api_describe {\r\n    -webkit-box-sizing : border-box ;\r\n            box-sizing : border-box ;\r\n    position : relative ;\r\n    padding : 24px 15px ;\r\n    margin : 0px 0px 15px ;\r\n    border-color : rgb(221, 221, 221) ;\r\n    border-style : solid ;\r\n    border-width : 1px ;\r\n    -webkit-box-shadow : none ;\r\n            box-shadow : none ;\r\n    background-color : rgb(255, 255, 255) ;\r\n    border-radius : 4px 4px 0px 0px ;\r\n    color : rgb(51, 51, 51) ;\r\n}\r\n.mydoc_api_content {\r\n    -webkit-box-sizing : border-box ;\r\n            box-sizing : border-box ;\r\n    margin : -16px 0px 15px ;\r\n    padding : 9px 14px ;\r\n    background-color : rgb(247, 247, 249) ;\r\n    border : 1px solid rgb(225, 225, 232) ;\r\n    border-radius : 0px 0px 4px 4px ;\r\n    color : rgb(51, 51, 51) ;\r\n}\r\n\r\n.mydoc_api_table{\r\n    margin : 15px 0px 0px ;\r\n    padding : 0px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    border-collapse : collapse ;\r\n    width : 100% ;\r\n    color : rgb(0, 0, 0) ;\r\n    font-size : 14px ;\r\n    background-color : rgb(253, 252, 248) ;\r\n}\r\n\r\n.mydoc_api_table tr{\r\n    margin : 0px ;\r\n    padding : 0px ;\r\n    border : 0px ;\r\n    background-color : rgb(255, 255, 255) ;\r\n}\r\n.mydoc_api_table tr:nth-child(odd){\r\n    background-color : rgb(245, 245, 245) ;\r\n}\r\n.mydoc_api_table tr:nth-child(1){\r\n    background-color : rgb(63, 63, 63);\r\n}\r\n\r\n.mydoc_api_table th{\r\n    margin : 0px ;\r\n    padding : 5px 15px 5px 6px ;\r\n    border : 1px solid rgb(63, 63, 63) ;\r\n    vertical-align : baseline ;\r\n    background-color : rgb(63, 63, 63) ;\r\n    text-align : left ;\r\n    color : rgb(255, 255, 255) ;\r\n    width : 123px ;\r\n    word-break: break-all;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydoc_api_table td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n    word-break: break-all;\r\n}\r\n.mydoc_api_table td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mydoc_api_html-example{\r\n    border: none;\r\n    position: relative;\r\n}\r\n.mydoc_api_html-example_iframe{\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    background-color: rgb(247, 247, 249);\r\n    border: 1px solid rgb(225, 225, 232);\r\n    border-radius: 0px 0px 4px 4px;\r\n    background: white;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.mydoc_api_html-example_tip{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    z-index: 0;\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n.mydoc_api_html-example_summary{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(6);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(7);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});