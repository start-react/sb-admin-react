require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(3);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(4);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(6);
  
  var _path = __webpack_require__(7);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(8);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(9);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(10);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(11);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(12);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(13);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(15);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(16);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(17);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _Html = __webpack_require__(18);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(20);
  
  var _ErrorPage2 = __webpack_require__(22);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(30);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(33);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(40);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(54);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(152);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(19);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  // eslint-disable-line import/no-unresolved
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("production") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var css, statusCode, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        css = new _set2.default();
                        statusCode = 200;
                        data = { title: '', description: '', style: '', script: _assets2.default.main.js, children: '' };
                        _context.next = 5;
                        return _universalRouter2.default.resolve(_routes2.default, {
                          path: req.path,
                          query: req.query,
                          context: {
                            insertCss: function insertCss() {
                              for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                                styles[_key] = arguments[_key];
                              }
  
                              styles.forEach(function (style) {
                                return css.add(style._getCss());
                              }); // eslint-disable-line no-underscore-dangle, max-len
                            },
                            setTitle: function setTitle(value) {
                              return data.title = value;
                            },
                            setMeta: function setMeta(key, value) {
                              return data[key] = value;
                            }
                          },
                          render: function render(component) {
                            var status = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  
                            css = new _set2.default();
                            statusCode = status;
                            data.children = _server2.default.renderToString(component);
                            data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                            return true;
                          }
                        });
  
                      case 5:
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
                        res.status(statusCode);
                        res.send('<!doctype html>' + html);
  
                      case 8:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _context2.next = 7;
              break;
  
            case 4:
              _context2.prev = 4;
              _context2.t1 = _context2['catch'](0);
  
              next(_context2.t1);
  
            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 4]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(_Html2.default, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss()
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_ErrorPage.ErrorPageWithoutStyle, {
      error: err
    }))));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(19);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  });
  
  var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref5 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/css/bootstrap.min.css'
  });
  
  var _ref6 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    href: 'apple-touch-icon.png'
  });
  
  var _ref7 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/css/bootstrap-social.css'
  });
  
  var _ref8 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/css/font-awesome.min.css'
  });
  
  var _ref9 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/css/sb-admin.css'
  });
  
  var _ref10 = (0, _jsx3.default)('script', {
    src: 'https://www.google-analytics.com/analytics.js',
    async: true,
    defer: true
  });
  
  function Html(_ref) {
    var title = _ref.title;
    var description = _ref.description;
    var style = _ref.style;
    var script = _ref.script;
    var children = _ref.children;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: 'en'
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref2, _ref3, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      dangerouslySetInnerHTML: { __html: children }
    }), script && (0, _jsx3.default)('script', {
      src: script
    }), _config.analytics.google.trackingId && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
    }), _config.analytics.google.trackingId && _ref10));
  }
  
  exports.default = Html;

/***/ },
/* 19 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(22);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (false) {
      errorMessage = (0, _jsx3.default)('pre', {}, void 0, error.stack);
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('p', {}, void 0, content), errorMessage);
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(23);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;margin:2em auto}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 24 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
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


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(26);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(27);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(28);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(29);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
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
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
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

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(31);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(32);
  
  var _models = __webpack_require__(33);
  
  var _config = __webpack_require__(19);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailVerified: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(36);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(37);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(38);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(39);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(35);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(19);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(35);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(34);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(35);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(34);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(35);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(34);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.STRING
    }
  
  });
  
  exports.default = UserClaim;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(35);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(34);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(41);
  
  var _me = __webpack_require__(42);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(44);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(50);
  
  var _news2 = _interopRequireDefault(_news);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default
      }
    })
  });
  
  exports.default = schema;

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(43);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(41);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(29);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(26);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(45);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(7);
  
  var _bluebird = __webpack_require__(46);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(47);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(48);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(41);
  
  var _ContentType = __webpack_require__(49);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("markdown-it");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(41);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(41);
  
  var _fetch = __webpack_require__(51);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(53);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(46);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(52);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(19);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(41);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(55);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(84);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _contact = __webpack_require__(89);
  
  var _contact2 = _interopRequireDefault(_contact);
  
  var _login = __webpack_require__(93);
  
  var _login2 = _interopRequireDefault(_login);
  
  var _Tables = __webpack_require__(100);
  
  var _Tables2 = _interopRequireDefault(_Tables);
  
  var _Buttons = __webpack_require__(106);
  
  var _Buttons2 = _interopRequireDefault(_Buttons);
  
  var _FlotCharts = __webpack_require__(109);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  var _Forms = __webpack_require__(112);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  var _Grid = __webpack_require__(118);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  var _Icons = __webpack_require__(121);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  var _MorrisjsCharts = __webpack_require__(124);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  var _Notification = __webpack_require__(127);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  var _PanelWells = __webpack_require__(135);
  
  var _PanelWells2 = _interopRequireDefault(_PanelWells);
  
  var _Typography = __webpack_require__(138);
  
  var _Typography2 = _interopRequireDefault(_Typography);
  
  var _Blank = __webpack_require__(141);
  
  var _Blank2 = _interopRequireDefault(_Blank);
  
  var _register = __webpack_require__(143);
  
  var _register2 = _interopRequireDefault(_register);
  
  var _content = __webpack_require__(147);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _error = __webpack_require__(151);
  
  var _error2 = _interopRequireDefault(_error);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default, _contact2.default, _login2.default, _Tables2.default, _Buttons2.default, _FlotCharts2.default, _Forms2.default, _Grid2.default, _Icons2.default, _MorrisjsCharts2.default, _Notification2.default, _PanelWells2.default, _Typography2.default, _register2.default, _Blank2.default,
  
    // place new routes before...
    _content2.default, _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      var render = _ref.render;
      var context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render((0, _jsx3.default)(_App2.default, {
                  context: context
                }, void 0, component)));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(61);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(62);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(64);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(78);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(81);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Header2.default, {});
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
  
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('props -->\n', this.props, '\n*******123\n');
        return !this.props.error ? !this.props.login ? (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('div', {
          id: 'page-wrapper',
          className: 'page-wrapper'
        }, void 0, this.props.children)) : this.props.children : this.props.children;
      }
    }]);
    return App;
  }(_react.Component);
  
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(63);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:' (' attr(href) ')'}abbr[title]:after{content:' (' attr(title) ')'}a[href^='#']:after,a[href^='javascript:']:after{content:''}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);
  
  // exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(65);
  
  var _Link = __webpack_require__(66);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navbar = __webpack_require__(73);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _history = __webpack_require__(69);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _jquery = __webpack_require__(74);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _Sidebar = __webpack_require__(75);
  
  var _Sidebar2 = _interopRequireDefault(_Sidebar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import s from './Header.css';
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var logo = __webpack_require__(77);
  
  var _ref = (0, _jsx3.default)('img', {
    src: logo,
    alt: 'Start React',
    title: 'Start React'
  });
  
  var _ref2 = (0, _jsx3.default)('span', {}, void 0, ' SB Admin React - ');
  
  var _ref3 = (0, _jsx3.default)('a', {
    href: 'http://startreact.com/',
    title: 'Start React',
    rel: 'home'
  }, void 0, 'StartReact.com');
  
  var _ref4 = (0, _jsx3.default)('span', {
    className: 'sr-only'
  }, void 0, 'Toggle navigation');
  
  var _ref5 = (0, _jsx3.default)('span', {
    className: 'icon-bar'
  });
  
  var _ref6 = (0, _jsx3.default)('span', {
    className: 'icon-bar'
  });
  
  var _ref7 = (0, _jsx3.default)('span', {
    className: 'icon-bar'
  });
  
  var _ref8 = (0, _jsx3.default)(_reactBootstrap.NavDropdown, {
    title: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-envelope fa-fw'
    })),
    id: 'navDropdown1'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '1'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'John Smith'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, ' ', (0, _jsx3.default)('em', {}, void 0, 'Yesterday'), ' '), ' '), (0, _jsx3.default)('div', {}, void 0, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...')), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  }), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '2'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'John Smith'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, ' ', (0, _jsx3.default)('em', {}, void 0, 'Yesterday'), ' '), ' '), (0, _jsx3.default)('div', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...')), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  }), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '3'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'John Smith'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, ' ', (0, _jsx3.default)('em', {}, void 0, 'Yesterday'), ' '), ' '), (0, _jsx3.default)('div', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...')), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  }), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '4'
  }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Read All Messages'), ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-angle-right'
  })));
  
  var _ref9 = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-tasks fa-fw'
  }), ' ');
  
  var _ref10 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'Task 1'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, '40% Complete'), ' '), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactBootstrap.ProgressBar, {
    bsStyle: 'success',
    now: 40
  })));
  
  var _ref11 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref12 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '2'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'Task 2'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, '20% Complete'), ' '), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactBootstrap.ProgressBar, {
    bsStyle: 'info',
    now: 20
  }))));
  
  var _ref13 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref14 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '3'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'Task 3'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, '60% Complete'), ' '), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactBootstrap.ProgressBar, {
    bsStyle: 'warning',
    now: 60
  }))));
  
  var _ref15 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref16 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '4'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, ' ', (0, _jsx3.default)('strong', {}, void 0, 'Task 4'), ' ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted'
  }, void 0, '80% Complete'), ' '), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactBootstrap.ProgressBar, {
    bsStyle: 'danger',
    now: 80
  }))));
  
  var _ref17 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref18 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '5'
  }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'See All Tasks'), ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-angle-right'
  }));
  
  var _ref19 = (0, _jsx3.default)('i', {
    className: 'fa fa-bell fa-fw'
  });
  
  var _ref20 = (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-comment fa-fw'
  }), ' New Comment ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, '4 minutes ago'), ' ');
  
  var _ref21 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref22 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '2'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-twitter fa-fw'
  }), ' 3 New Followers ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, '12 minutes ago'), ' '));
  
  var _ref23 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref24 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '3'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-envelope fa-fw'
  }), ' Message Sent ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, '4 minutes ago'), ' '));
  
  var _ref25 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref26 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '4'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-tasks fa-fw'
  }), ' New Task ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, '4 minutes ago'), ' '));
  
  var _ref27 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref28 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '5'
  }, void 0, (0, _jsx3.default)('div', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-upload fa-fw'
  }), ' Server Rebooted ', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, '4 minutes ago'), ' '));
  
  var _ref29 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref30 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '6'
  }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'See All Alerts'), ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-angle-right'
  }));
  
  var _ref31 = (0, _jsx3.default)('i', {
    className: 'fa fa-user fa-fw'
  });
  
  var _ref32 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '1'
  }, void 0, (0, _jsx3.default)('span', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-user fa-fw'
  }), ' User Profile '));
  
  var _ref33 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '2'
  }, void 0, (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-gear fa-fw'
  }), ' Settings '));
  
  var _ref34 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref35 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    eventKey: '3',
    href: 'http://www.strapui.com'
  }, void 0, (0, _jsx3.default)('span', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-eye fa-fw'
  }), ' Premium React Themes '));
  
  var _ref36 = (0, _jsx3.default)(_reactBootstrap.MenuItem, {
    divider: true
  });
  
  var _ref37 = (0, _jsx3.default)('span', {}, void 0, ' ', (0, _jsx3.default)('i', {
    className: 'fa fa-sign-out fa-fw'
  }), ' Logout ');
  
  var _ref38 = (0, _jsx3.default)(_Sidebar2.default, {});
  
  function Header() {
    return (0, _jsx3.default)('div', {
      id: 'wrapper',
      className: 'content'
    }, void 0, (0, _jsx3.default)(_Navbar2.default, {
      fluid: true,
      style: { margin: 0 }
    }, void 0, (0, _jsx3.default)(_Navbar.Brand, {}, void 0, (0, _jsx3.default)('span', {}, void 0, _ref, _ref2, _ref3, (0, _jsx3.default)('button', {
      type: 'button',
      className: 'navbar-toggle',
      onClick: function onClick() {
        toggleMenu();
      },
      style: { position: 'absolute', right: 0, top: 0 }
    }, void 0, _ref4, _ref5, _ref6, _ref7))), (0, _jsx3.default)('ul', {
      className: 'nav navbar-top-links navbar-right'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.Nav, {
      style: { margin: 0 }
    }, void 0, _ref8, (0, _jsx3.default)(_reactBootstrap.NavDropdown, {
      title: _ref9,
      id: 'navDropdown2222'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '1',
      style: { width: 300 }
    }, void 0, _ref10), _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18), (0, _jsx3.default)(_reactBootstrap.NavDropdown, {
      title: _ref19,
      id: 'navDropdown3'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '1',
      style: { width: 300 }
    }, void 0, _ref20), _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30), (0, _jsx3.default)(_reactBootstrap.NavDropdown, {
      title: _ref31,
      id: 'navDropdown4'
    }, void 0, _ref32, _ref33, _ref34, _ref35, _ref36, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '4',
      onClick: function onClick(event) {
        _history2.default.push('/login');
      }
    }, void 0, _ref37)))), _ref38));
  }
  function toggleMenu() {
    if ((0, _jquery2.default)(".navbar-collapse").hasClass('collapse')) {
      (0, _jquery2.default)(".navbar-collapse").removeClass('collapse');
    } else {
      (0, _jquery2.default)(".navbar-collapse").addClass('collapse');
    }
  }
  
  exports.default = Header;

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(67);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(68);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(69);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
  
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          if (_this.props.to) {
            _history2.default.push(_this.props.to);
          } else {
            _history2.default.push({
              pathname: event.currentTarget.pathname,
              search: event.currentTarget.search
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      // eslint-disable-line react/prefer-stateless-function
  
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  exports.default = Link;

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(70);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(71);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(72);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Navbar");

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = require("jquery");

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = __webpack_require__(66);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _history = __webpack_require__(69);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('li', {
    className: 'sidebar-search'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'input-group custom-search-form'
  }, void 0, (0, _jsx3.default)('input', {
    type: 'text',
    className: 'form-control',
    placeholder: 'Search...'
  }), (0, _jsx3.default)('span', {
    className: 'input-group-btn'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-default',
    type: 'button'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-search'
  })))));
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  // import {
  //   Nav,
  //   NavItem,
  //   NavDropdown,
  //   MenuItem,
  //   ProgressBar,
  // } from 'react-bootstrap';
  // import Link from '../Link';
  // import s from './Header.css';
  // import Navbar from 'react-bootstrap/lib/Navbar';
  // import $ from "jquery";
  
  
  var _ref2 = (0, _jsx3.default)('i', {
    className: 'fa fa-dashboard fa-fw'
  });
  
  var _ref3 = (0, _jsx3.default)('i', {
    className: 'fa fa-bar-chart-o fa-fw'
  });
  
  var _ref4 = (0, _jsx3.default)('span', {
    className: 'fa arrow'
  });
  
  var _ref5 = (0, _jsx3.default)('i', {
    className: 'fa fa-table fa-fw'
  });
  
  var _ref6 = (0, _jsx3.default)('i', {
    className: 'fa fa-table fa-fw'
  });
  
  var _ref7 = (0, _jsx3.default)('i', {
    className: 'fa fa-edit fa-fw'
  });
  
  var _ref8 = (0, _jsx3.default)('span', {
    className: 'fa arrow'
  });
  
  var _ref9 = (0, _jsx3.default)('i', {
    className: 'fa fa-sitemap fa-fw'
  });
  
  var _ref10 = (0, _jsx3.default)('span', {
    className: 'fa arrow'
  });
  
  var _ref11 = (0, _jsx3.default)('span', {
    className: 'fa arrow'
  });
  
  var _ref12 = (0, _jsx3.default)('i', {
    className: 'fa fa-files-o fa-fw'
  });
  
  var _ref13 = (0, _jsx3.default)('span', {
    className: 'fa arrow'
  });
  
  var _ref14 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://www.strapui.com/'
  }, void 0, 'Premium React Themes'));
  
  var Sidebar = function (_Component) {
    (0, _inherits3.default)(Sidebar, _Component);
  
    function Sidebar(props) {
      (0, _classCallCheck3.default)(this, Sidebar);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));
  
      _this.state = {
        uiElementsCollapsed: true,
        chartsElementsCollapsed: true,
        multiLevelDropdownCollapsed: true,
        thirdLevelDropdownCollapsed: true,
        samplePagesCollapsed: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(Sidebar, [{
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return (0, _jsx3.default)('div', {
          className: 'navbar-default sidebar',
          style: { marginLeft: '-20px' },
          role: 'navigation'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'sidebar-nav navbar-collapse collapse'
        }, void 0, (0, _jsx3.default)('ul', {
          className: 'nav in',
          id: 'side-menu'
        }, void 0, _ref, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/');
          }
        }, void 0, _ref2, '  Dashboard')), (0, _jsx3.default)('li', {
          className: (0, _classnames2.default)({ active: !this.state.chartsElementsCollapsed })
        }, void 0, (0, _jsx3.default)('a', {
          href: '#',
          onClick: function onClick() {
            _this2.setState({ chartsElementsCollapsed: !_this2.state.chartsElementsCollapsed });
            return false;
          }
        }, void 0, _ref3, '  Charts', _ref4), (0, _jsx3.default)('ul', {
          className: (0, _classnames2.default)({
            'nav nav-second-level': true,
            collapse: this.state.chartsElementsCollapsed
          })
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/flotcharts');
          }
        }, void 0, 'FlotCharts')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/morrisjscharts');
          }
        }, void 0, 'Morrisjs Charts')))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/table');
          }
        }, void 0, _ref5, '  Tables')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/forms');
          }
        }, void 0, _ref6, '  Forms')), (0, _jsx3.default)('li', {
          className: (0, _classnames2.default)({ active: !this.state.uiElementsCollapsed })
        }, void 0, (0, _jsx3.default)('a', {
          href: '#',
          onClick: function onClick() {
            _this2.setState({ uiElementsCollapsed: !_this2.state.uiElementsCollapsed });return false;
          }
        }, void 0, _ref7, ' UI Elements', _ref8), (0, _jsx3.default)('ul', {
          className: (0, _classnames2.default)({ 'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed })
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/panelwells');
          }
        }, void 0, 'Panels And Wells')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/button');
          }
        }, void 0, 'Buttons')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/notification');
          }
        }, void 0, 'Notification')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/typography');
          }
        }, void 0, 'Typography')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/icons');
          }
        }, void 0, 'Icons')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/grid');
          }
        }, void 0, 'Grid')))), (0, _jsx3.default)('li', {
          className: (0, _classnames2.default)({ active: !this.state.multiLevelDropdownCollapsed })
        }, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
            _this2.setState({
              multiLevelDropdownCollapsed: !_this2.state.multiLevelDropdownCollapsed
            });
            return false;
          }
        }, void 0, _ref9, ' Multi-Level Dropdown', _ref10), (0, _jsx3.default)('ul', {
          className: (0, _classnames2.default)({
            'nav nav-second-level': true, collapse: this.state.multiLevelDropdownCollapsed
          })
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Second Level Item')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Second Level Item')), (0, _jsx3.default)('li', {
          className: (0, _classnames2.default)({ active: !this.state.thirdLevelDropdownCollapsed })
        }, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
            _this2.setState({
              thirdLevelDropdownCollapsed: !_this2.state.thirdLevelDropdownCollapsed
            });
            return false;
          }
        }, void 0, 'Third Level', _ref11), (0, _jsx3.default)('ul', {
          className: (0, _classnames2.default)({
            'nav nav-second-level': true,
            collapse: this.state.thirdLevelDropdownCollapsed
          })
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Third Level Item')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Third Level Item')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Third Level Item')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          }
        }, void 0, 'Third Level Item')))))), (0, _jsx3.default)('li', {
          className: (0, _classnames2.default)({ active: !this.state.samplePagesCollapsed })
        }, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
            _this2.setState({
              samplePagesCollapsed: !_this2.state.samplePagesCollapsed
            });
            return false;
          }
        }, void 0, _ref12, ' Sample Pages', _ref13), (0, _jsx3.default)('ul', {
          className: (0, _classnames2.default)({
            'nav nav-second-level': true,
            collapse: this.state.samplePagesCollapsed
          })
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/blank');
          }
        }, void 0, 'Blank')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();_history2.default.push('/login');
          }
        }, void 0, 'Login')))), _ref14)));
      }
    }]);
    return Sidebar;
  }(_react.Component);
  
  exports.default = Sidebar;

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGODdGMTE3NDA3MjA2ODExODA4M0E3MjY3MTQwRTY5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTIzNTA3RUM5OEExMUU0QjRCOUUwQTIyNkYzQTlCNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTIzNTA3REM5OEExMUU0QjRCOUUwQTIyNkYzQTlCNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjExNzQwNzIwNjgxMTgwODNBNzI2NzE0MEU2OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjg3RjExNzQwNzIwNjgxMTgwODNBNzI2NzE0MEU2OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xbRMYAAAIAklEQVR42qyZC5BNdRzH//9zd++6a1msRwi7SCrPXmZkSjU1pSmPEnrNoEQhjGEKq2xEKZRJHiEkRNIMkple8kiZyGu9GcZrsezL7tp7/n1/Z7+X47rn3mu2/8xnz7nnnP///M7v/3v9/6uNMSo3qFTOFaV8Wnk2A3A7GYem/HkEFKiba5VABo+HMcgleaWNk/p+DG55d0yQP5vzjPo6x1aB6JL2gqQTcJbOK6fBcjAd7IshYH0wALxAQaWdxZgTMOa0Ukg6vL5PtUr2HsAKaasMf4Le9ASLQXWwAMwHl8FAsAtMBIEI/SwwFGSDUXxGxpkDysBUMFKeNTG+NOGqxFCm1p7TNQ6U4OsfwnGHq+9T4AMwEjwOerm0Wwcs4PWTYDD4BhTzfj2wBWOOwXsX8pnoGo3R7gW3gbkuIaWVgVXgbjANtAWbQHvQBPxBIZeClmCeS0hFwaaCyuCRWELEI+hdPG7wuC8vHwJ6g1SwGmyk040GPcEFj76beWyj4p36KK22y3mitfkUdCp/i5bHx+hzLuwdFdJovO1W0J/nQXp42/9r8HgEzeWxRpRnAnSU5mAYp7sW+BbcEqVfatg74hDUGC9O8Jge5ZkpoAOYyvPlYChoAuYC7dGvAY/HYgWoazaqPePTQR5bq+tvJ1GTEpJep739CboBHzgE9oMnwfvgY3CZhFoLZ0ytspXSFXamw+AU6AD6gvtBK2aoFIYXaTU5/ZHaO4wMknKPg92MIk8w3+yuiNcHGN+eB9X4ew7vFYGjFE5U8SXYw+v5dCZJFFVAY6ZPSZDHGLbuAa9wLNvSesr2QrPkYlCvu2LUpZAAkrEaoga4IxBZ0FRO5SB6snzxeQq6iNN4kFMuGWUlUvWrutx6fM50loebU0pSJxKDT8bQaiiuLWZ/SQj9wAhwMVGrZ9bn2l0h2AU8N5sh7rTk6E41LAhq3eD1z1IzkzilnzLEPMj7aUyR8jETHQ0aNaKKz6l8bodfyBRuB+twfSfS8uFqPlUVxzH4LSaUychwiBqW1h2aaOb36axAgr6MwmgkyAYDpEhKpN+4Bc1iNSTTPIZT9hbT5l7wCx2jHq/Xx8vHlRpzsE9tS92VrCfiXEJSO8nzmML2df1qdGYDqxAfUhgst9NEji2z04P2v5HHTKbqN0Ap+Jxp2+fY6Hlk7P2XzYAE7aS7XfKFIDuCScg0P8wiRIqRAyzxFPqqgqBJ10rLR23l8znQwmbMWsifJee/RpMpYJyd6RQ715pEhBliTmJmGLf38VKTc7xUj7T2FJlaWwvMGL+lc3Czk4eQigXISTpBGm2tUG74IUzzZL3aVkY+5F3ej9Sy6Hz9KOBij+ckXXeBTDsg3/Ct+XYLC1LfB2OuC/uaxdDh1aSw+Irnf9OxrraGSVqE+AKMlaIYEX6hT5n0sDF+A9/xfCVNyqsVwHanwUwt2OlDbhvVccRU7TqGP1/CMCS2PV5r3R3h5ue8oEqzdMQxrJt4n/PwVk6pTEejKJ3SXLFP4uBLHs/JWioTmnji7BWTsbfIPOy/JmhH0JXnncGdUd5XhUlCYvKvFlNfFoP3GnCHR8fO9Pj57DM6lJUQR60iaE5fr+UEGTzJUsWuLC4eb9NEJAW/6PGuuuAHFtwfSeYKqV86vscv3EY7C6+WXnalw+nMMIORVdSFMpW0JtfekqC1xOBlYC1i9bo6fr2xSUCvL7Wdfj2Z6STNDnUWd+URIMn1DomtA8FOal8y3ijHBjbl2WrGaRshxtFHF1z7jBnpEh1mrmN/WMTh/hqGpuqMrzVxvVWKTx0sstVL0OwzeEayUjGc8ydEg9lVfSo/t0xVw71/cK8e64R9TjIxyH5aPcZ03IerBCkLL3IdNqsEHXukWTek0O/Bz4x3shh7k1xw1Y13sip62/kQrSbDYbpY5eeL3MWYaPKs7UTssbiXTnPZx8AeWj8tw6NVS4LGh1k4h+fGU1lnHA+FoGX46nCNhq8+O7Io6YmvD7juF1MLTVnYzGPqlYxyhfVBIqe1ASt/P4WsR0cJ7WoEsVRf+WiqXppeySlK8t1CSGHSrFL06kmE+RH8ztR5ik7XjkaewUySwimL1QqYnrOZATewbGxvGzO8TWXrWOvkitWjjWk3C+jx83ndT633ojOeZ54u4bjyoZ+AZq7CuThsySw7KA9wpXss9lLEe4khNOXx37DrpSAPzAQzQBqXI6vACtAcNAOrQSa4CIrDxtjFY/P4liKhZUjk3NTgaiD3zl3DqJVB1MwJMJmFS1/lLcVx5rhG/8dSpFocK8VimsB6CmgzTnYPea9Hy4tjhevaJIsy8y5dxKoFJA3Pdo27JGwLyHuj0CgTa5fMSXOonpyaMpIo6H82eG3TK1rrS4fJpYYH08HGRekjaVv2Zc9YMdSQ0CZFq0kZvogr5SRc21agds85YysUFg96rDKlWv+QqU9qgKc53euYlluyqjoXoW/7YgT0bmnWjpbJMaZehKkFS63pu5EqUDdS4F+mPBP1CduiSeQafjuF3MadvC2soCTsrAXPMXe/6lonhbaAhmDaC1IsJxtWbEsHQpZgsEzgB7+CRWABOABWgAwwAXTgtZB954CngAhTGcwGR8ASMBf8BW4FWbH2RuPyelTqytL2Uqs8fE1wlWYnuUqdzjDktfU/jXtQ/dm3B++dKa++zGdxVezGRHe3QgSaU6VXw2yAqdMwXhbd5KacnzssUgMcxSD58o+G2jCiVF/0jv8JMABBEldD7PKL3QAAAABJRU5ErkJggg=="

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(79);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Feedback() {
    return (0, _jsx3.default)('div', {
      className: _Feedback2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Feedback2.default.container
    }, void 0, (0, _jsx3.default)('a', {
      className: _Feedback2.default.link,
      href: 'https://gitter.im/kriasoft/react-starter-kit'
    }, void 0, 'Ask a question'), (0, _jsx3.default)('span', {
      className: _Feedback2.default.spacer
    }, void 0, '|'), (0, _jsx3.default)('a', {
      className: _Feedback2.default.link,
      href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
    }, void 0, 'Report an issue')));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Feedback2.default)(Feedback);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(80);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "._2NP0{background:#f5f5f5;color:#333}._2AyN{margin:0 auto;padding:20px 8px;max-width:1000px;text-align:center;font-size:1.5em}._17M0,._17M0:active,._17M0:hover,._17M0:visited{color:#333;text-decoration:none}._17M0:hover{text-decoration:underline}._2n9Q{padding-right:15px;padding-left:15px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2NP0",
  	"container": "_2AyN",
  	"link": "_17M0",
  	"spacer": "_2n9Q"
  };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(82);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(66);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Footer() {
    return (0, _jsx3.default)('div', {
      className: _Footer2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Footer2.default.container
    }, void 0, (0, _jsx3.default)('span', {
      className: _Footer2.default.text
    }, void 0, '© Your Company'), (0, _jsx3.default)('span', {
      className: _Footer2.default.spacer
    }, void 0, '·'), (0, _jsx3.default)(_Link2.default, {
      className: _Footer2.default.link,
      to: '/'
    }, void 0, 'Home'), (0, _jsx3.default)('span', {
      className: _Footer2.default.spacer
    }, void 0, '·'), (0, _jsx3.default)(_Link2.default, {
      className: _Footer2.default.link,
      to: '/privacy'
    }, void 0, 'Privacy'), (0, _jsx3.default)('span', {
      className: _Footer2.default.spacer
    }, void 0, '·'), (0, _jsx3.default)(_Link2.default, {
      className: _Footer2.default.link,
      to: '/not-found'
    }, void 0, 'Not Found')));
  }
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(83);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "._3Jih{background:#333;color:#fff}.n1bV{margin:0 auto;padding:20px 15px;max-width:1000px;text-align:center}._2mr6{color:hsla(0,0%,100%,.5)}._3HO-,._9iT6{color:hsla(0,0%,100%,.3)}._1sUk,._2mr6{padding:2px 5px;font-size:1em}._1sUk,._1sUk:active,._1sUk:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._1sUk:hover{color:#fff}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3Jih",
  	"container": "n1bV",
  	"text": "_2mr6",
  	"textMuted": "_9iT6 _2mr6",
  	"spacer": "_3HO-",
  	"link": "_1sUk"
  };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _stringify = __webpack_require__(27);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(85);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(51);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{news{title,link,contentSnippet}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();
  
              case 5:
                _ref = _context.sent;
                data = _ref.data;
  
                if (!(!data || !data.news)) {
                  _context.next = 9;
                  break;
                }
  
                throw new Error('Failed to load the news feed.');
  
              case 9:
                return _context.abrupt('return', (0, _jsx3.default)(_Home2.default, {
                  news: data.news
                }));
  
              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(65);
  
  var _Home = __webpack_require__(86);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Widget = __webpack_require__(88);
  
  var _Widget2 = _interopRequireDefault(_Widget);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Header from '../../components/Header/Header.js';
  // import Sidebar from '../../components/Sidebar';
  var title = 'Sb Admin React'; /**
                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                 *
                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE.txt file in the root directory of this source tree.
                                 */
  
  var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.PageHeader, {}, void 0, 'Dashboard'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-3 col-md-6'
  }, void 0, (0, _jsx3.default)(_Widget2.default, {
    style: 'primary',
    icon: 'fa fa-comments fa-5x',
    count: '26',
    headerText: 'New Comments!',
    footerText: 'View Details',
    linkTo: '/'
  })), (0, _jsx3.default)('div', {
    className: 'col-lg-3 col-md-6'
  }, void 0, (0, _jsx3.default)(_Widget2.default, {
    style: 'success',
    icon: 'fa fa-tasks fa-5x',
    count: '12',
    headerText: 'New Tasks!',
    footerText: 'View Details',
    linkTo: '/'
  })), (0, _jsx3.default)('div', {
    className: 'col-lg-3 col-md-6'
  }, void 0, (0, _jsx3.default)(_Widget2.default, {
    style: 'warning',
    icon: 'fa fa-shopping-cart fa-5x',
    count: '124',
    headerText: 'New Orders!',
    footerText: 'View Details',
    linkTo: '/'
  })), (0, _jsx3.default)('div', {
    className: 'col-lg-3 col-md-6'
  }, void 0, (0, _jsx3.default)(_Widget2.default, {
    style: 'danger',
    icon: 'fa fa-support fa-5x',
    count: '13',
    headerText: 'Support Tickets!',
    footerText: 'View Details',
    linkTo: '/'
  }))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-8'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-bar-chart-o fa-fw'
    }), ' Area Chart Example', (0, _jsx3.default)('div', {
      className: 'pull-right'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.DropdownButton, {
      title: 'Dropdown',
      bsSize: 'xs',
      pullRight: true,
      id: 'dropdownButton1'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '1'
    }, void 0, 'Action'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '2'
    }, void 0, 'Another action'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '3'
    }, void 0, 'Something else here'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      divider: true
    }), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '4'
    }, void 0, 'Separated link'))))
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents')), (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-bar-chart-o fa-fw'
    }), ' Bar Chart Example', (0, _jsx3.default)('div', {
      className: 'pull-right'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.DropdownButton, {
      title: 'Dropdown',
      bsSize: 'xs',
      pullRight: true,
      id: 'dropdownButton2'
    }, void 0, (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '1'
    }, void 0, 'Action'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '2'
    }, void 0, 'Another action'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '3'
    }, void 0, 'Something else here'), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      divider: true
    }), (0, _jsx3.default)(_reactBootstrap.MenuItem, {
      eventKey: '4'
    }, void 0, 'Separated link'))))
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents')), (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-clock-o fa-fw'
    }), ' Responsive Timeline')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-bell fa-fw'
    }), ' Notifications Panel')
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ListGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-comment fa-fw'
  }), ' New Comment', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '4 minutes ago'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-twitter fa-fw'
  }), ' 3 New Followers', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '12 minutes ago'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-envelope fa-fw'
  }), ' Message Sent', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '27 minutes ago'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-tasks fa-fw'
  }), ' New Task', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '43 minutes ago'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-upload fa-fw'
  }), ' Server Rebooted', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '11:32 AM'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-bolt fa-fw'
  }), ' Server Crashed!', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '11:13 AM'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-warning fa-fw'
  }), ' Server Not Responding', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '10:57 AM'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-shopping-cart fa-fw'
  }), ' New Order Placed', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, '9:49 AM'))), (0, _jsx3.default)(_reactBootstrap.ListGroupItem, {
    href: 'javascript:void(0)'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-money fa-fw'
  }), ' Payment Received', (0, _jsx3.default)('span', {
    className: 'pull-right text-muted small'
  }, void 0, (0, _jsx3.default)('em', {}, void 0, 'Yesterday')))), (0, _jsx3.default)(_reactBootstrap.Button, {
    block: true
  }, void 0, 'View All Alerts')), (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
      className: 'fa fa-bar-chart-o fa-fw'
    }), ' Donut Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents')))));
  
  function Home(_ref, context) {
    var news = _ref.news;
  
    context.setTitle(title);
    return _ref2;
  }
  
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(87);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "._2IMq{padding-left:20px;padding-right:20px}._2Yej{margin:0 auto;padding:0 0 40px;max-width:1000px}.oTyG{padding:0}._3Ob1{list-style-type:none;padding-bottom:6px}._1yWV{font-size:1.125em}._1yWV,._21LX{display:block}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2IMq",
  	"container": "_2Yej",
  	"news": "oTyG",
  	"newsItem": "_3Ob1",
  	"newsTitle": "_1yWV",
  	"newsDesc": "_21LX"
  };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(65);
  
  var _Link = __webpack_require__(66);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('span', {
    className: 'pull-right'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-arrow-circle-right'
  }));
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'clearfix'
  });
  
  var StatWidget = _react2.default.createClass({
    displayName: 'StatWidget',
    // eslint-disable-line
    render: function render() {
      return (0, _jsx3.default)(_reactBootstrap.Panel, {
        className: 'stat',
        bsStyle: this.props.style,
        header: (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-xs-3'
        }, void 0, (0, _jsx3.default)('i', {
          className: this.props.icon
        })), (0, _jsx3.default)('div', {
          className: 'col-xs-9 text-right'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'huge'
        }, void 0, this.props.count // eslint-disable-line
        ), (0, _jsx3.default)('div', {}, void 0, this.props.headerText // eslint-disable-line
        ))),
        footer: (0, _jsx3.default)(_Link2.default, {
          to: this.props.linkTo // eslint-disable-line
  
        }, void 0, (0, _jsx3.default)('span', {
          className: 'pull-left'
        }, void 0, this.props.footerText // eslint-disable-line
        ), _ref, _ref2)
      });
    }
  });
  
  exports.default = StatWidget;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Contact = __webpack_require__(90);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Contact2.default, {});
  
  exports.default = {
  
    path: '/contact',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Contact = __webpack_require__(91);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Contact Us'; /**
                             * React Starter Kit (https://www.reactstarterkit.com/)
                             *
                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                             *
                             * This source code is licensed under the MIT license found in the
                             * LICENSE.txt file in the root directory of this source tree.
                             */
  
  var _ref = (0, _jsx3.default)('h1', {}, void 0, title);
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Contact(props, context) {
    context.setTitle(title);
    return (0, _jsx3.default)('div', {
      className: _Contact2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Contact2.default.container
    }, void 0, _ref, _ref2));
  }
  
  Contact.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(92);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "._1G9o{padding-left:20px;padding-right:20px}._2TnC{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1G9o",
  	"container": "_2TnC"
  };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(55);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Login = __webpack_require__(94);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _loginElement = __webpack_require__(99);
  
  var _loginElement2 = _interopRequireDefault(_loginElement);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)(_loginElement2.default, {});
  
  exports.default = {
  
    path: '/login',
  
    action: function action(_ref) {
      var render = _ref.render;
      var context = _ref.context;
  
      return render((0, _jsx3.default)(_App2.default, {
        context: context,
        login: true
      }, void 0, _ref2));
    }
  };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _reactBootstrap = __webpack_require__(65);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Login = __webpack_require__(97);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _history = __webpack_require__(69);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Log In'; /**
                         * React Starter Kit (https://www.reactstarterkit.com/)
                         *
                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                         *
                         * This source code is licensed under the MIT license found in the
                         * LICENSE.txt file in the root directory of this source tree.
                         */
  
  function submitHandler(e) {
    e.preventDefault();
    _history2.default.push('/');
  }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'text-center'
  }, void 0, (0, _jsx3.default)('h1', {
    className: 'login-brand-text'
  }, void 0, 'SB Admin React'), (0, _jsx3.default)('h3', {
    className: 'text-muted'
  }, void 0, 'Created by ', (0, _jsx3.default)('a', {
    href: 'http://startreact.com'
  }, void 0, 'StartReact.com'), ' team'));
  
  var _ref2 = (0, _jsx3.default)('h3', {}, void 0, 'Please Sign In');
  
  var _ref3 = (0, _jsx3.default)('fieldset', {}, void 0, (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text',
    className: 'form-control',
    placeholder: 'Username',
    name: 'name'
  })), (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.FormControl, {
    className: 'form-control',
    placeholder: 'Password',
    type: 'password',
    name: 'password'
  })), (0, _jsx3.default)(_reactBootstrap.Checkbox, {
    label: 'Remember Me'
  }, void 0, ' Remember Me '), (0, _jsx3.default)(_Button2.default, {
    type: 'submit',
    bsSize: 'large',
    bsStyle: 'success',
    block: true
  }, void 0, 'Login'));
  
  function Login(props, context) {
    context.setTitle(title);
    return (0, _jsx3.default)('div', {
      className: 'col-md-4 col-md-offset-4'
    }, void 0, _ref, (0, _jsx3.default)(_Panel2.default, {
      header: _ref2,
      className: 'login-panel'
    }, void 0, (0, _jsx3.default)('form', {
      role: 'form',
      onSubmit: function onSubmit(e) {
        submitHandler(e);
      }
    }, void 0, _ref3)));
  }
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Button");

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Panel");

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(98);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, ".rQNQ{padding-left:20px;padding-right:20px}._2BVu{margin:0 auto;padding:0 0 40px;max-width:380px}._1mJB{font-size:1.25em}._25Ti{margin-bottom:15px}._2G0a{display:inline-block;margin-bottom:5px;max-width:100%;font-weight:700}._1bTr{display:block;box-sizing:border-box;padding:10px 16px;width:100%;height:46px;outline:0;border:1px solid #ccc;border-radius:0;background:#fff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}._1bTr:focus{border-color:#0074c2;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6)}._11e1{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;border:1px solid #373277;border-radius:0;background:#373277;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer}._11e1:hover{background:rgba(54,50,119,.8)}._11e1:focus{border-color:#0074c2;box-shadow:0 0 8px rgba(0,116,194,.6)}._2nZ7{border-color:#3b5998;background:#3b5998}._2nZ7:hover{background:#2d4373}._23Hc{border-color:#dd4b39;background:#dd4b39}._23Hc:hover{background:#c23321}.AJde{border-color:#55acee;background:#55acee}.AJde:hover{background:#2795e9}._34kk{display:inline-block;margin:-2px 12px -2px 0;width:20px;height:20px;vertical-align:middle;fill:currentColor}.UpbG{position:relative;z-index:1;display:block;margin-bottom:15px;width:100%;color:#757575;text-align:center;font-size:80%}.UpbG:before{top:50%;left:50%;z-index:-1;margin-top:-5px;margin-left:-20px;width:40px;height:10px;background-color:#fff}.UpbG:after,.UpbG:before{position:absolute;content:''}.UpbG:after{top:49%;z-index:-2;display:block;width:100%;border-bottom:1px solid #ddd}", ""]);
  
  // exports
  exports.locals = {
  	"root": "rQNQ",
  	"container": "_2BVu",
  	"lead": "_1mJB",
  	"formGroup": "_25Ti",
  	"label": "_2G0a",
  	"input": "_1bTr",
  	"button": "_11e1",
  	"facebook": "_2nZ7 _11e1",
  	"google": "_23Hc _11e1",
  	"twitter": "AJde _11e1",
  	"icon": "_34kk",
  	"lineThrough": "UpbG"
  };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, ' logout page called ');
  
  var LoginElement = function (_Component) {
    (0, _inherits3.default)(LoginElement, _Component);
  
    function LoginElement() {
      (0, _classCallCheck3.default)(this, LoginElement);
      return (0, _possibleConstructorReturn3.default)(this, (LoginElement.__proto__ || (0, _getPrototypeOf2.default)(LoginElement)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(LoginElement, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return LoginElement;
  }(_react.Component);
  
  exports.default = LoginElement;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Table = __webpack_require__(101);
  
  var _Table2 = _interopRequireDefault(_Table);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Table2.default, {});
  
  exports.default = {
  
    path: '/table',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Tables = __webpack_require__(102);
  
  var _Tables2 = _interopRequireDefault(_Tables);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  // import Header from '../../components/Header/Header.js';
  // import Input from 'react-bootstrap/lib/InputGroup';
  
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  // import s from './Table.css';
  var title = 'Table';
  
  // function handleLogin() {
  //   console.log('login function');
  // }
  
  
  var _ref = (0, _jsx3.default)(_Tables2.default, {});
  
  function displayTable(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayTable.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayTable;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Pagination = __webpack_require__(103);
  
  var _Pagination2 = _interopRequireDefault(_Pagination);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Well = __webpack_require__(105);
  
  var _Well2 = _interopRequireDefault(_Well);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Tables'));
  
  var _ref2 = (0, _jsx3.default)('span', {}, void 0, 'DataTables Advanced Tables');
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-sm-9'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'dataTables_length',
    id: 'dataTables-example_length'
  }, void 0, (0, _jsx3.default)('label', {}, void 0, ' Show', (0, _jsx3.default)('select', {
    name: 'dataTables-example_length',
    'aria-controls': 'dataTables-example',
    className: 'form-control input-sm'
  }, void 0, (0, _jsx3.default)('option', {
    value: '10'
  }, void 0, '10'), (0, _jsx3.default)('option', {
    value: '25'
  }, void 0, '25'), (0, _jsx3.default)('option', {
    value: '50'
  }, void 0, '50'), (0, _jsx3.default)('option', {
    value: '100'
  }, void 0, '100')), 'entries'))), (0, _jsx3.default)('div', {
    className: 'col-sm-3'
  }, void 0, (0, _jsx3.default)('div', {
    id: 'dataTables-example_filter',
    className: 'dataTables_filter'
  }, void 0, (0, _jsx3.default)('label', {}, void 0, 'Search:', (0, _jsx3.default)('input', {
    type: 'search',
    className: 'form-control input-sm',
    placeholder: '',
    'aria-controls': 'dataTables-example'
  })))));
  
  var _ref4 = (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {
    className: 'gradeA odd',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Firefox 1.0'), (0, _jsx3.default)('td', {}, void 0, 'Win 98+ / OSX.2+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.7'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA even',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Firefox 1.5'), (0, _jsx3.default)('td', {}, void 0, 'Win 98+ / OSX.2+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.8'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA odd',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Firefox 2.0'), (0, _jsx3.default)('td', {}, void 0, 'Win 98+ / OSX.2+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.8'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA even',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Firefox 3.0'), (0, _jsx3.default)('td', {}, void 0, 'Win 2k+ / OSX.3+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.9'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA odd',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Camino 1.0'), (0, _jsx3.default)('td', {}, void 0, 'OSX.2+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.8'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA even',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Camino 1.5'), (0, _jsx3.default)('td', {}, void 0, 'OSX.3+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.8'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA odd',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Netscape 7.2'), (0, _jsx3.default)('td', {}, void 0, 'Win 95+ / Mac OS 8.6-9.2'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.7'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA even',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Netscape Browser 8'), (0, _jsx3.default)('td', {}, void 0, 'Win 98SE+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.7'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA odd',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Netscape Navigator 9'), (0, _jsx3.default)('td', {}, void 0, 'Win 98+ / OSX.2+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1.8'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')), (0, _jsx3.default)('tr', {
    className: 'gradeA even',
    role: 'row'
  }, void 0, (0, _jsx3.default)('td', {
    className: 'sorting_1'
  }, void 0, 'Gecko'), (0, _jsx3.default)('td', {}, void 0, 'Mozilla 1.0'), (0, _jsx3.default)('td', {}, void 0, 'Win 95+ / OSX.1+'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, '1'), (0, _jsx3.default)('td', {
    className: 'center'
  }, void 0, 'A')));
  
  var _ref5 = (0, _jsx3.default)('div', {
    className: 'col-sm-6'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'dataTables_info',
    id: 'dataTables-example_info',
    role: 'status',
    'aria-live': 'polite'
  }, void 0, 'Showing 1 to 10 of 57 entries'));
  
  var _ref6 = (0, _jsx3.default)(_Well2.default, {}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'DataTables Usage Information'), (0, _jsx3.default)('p', {}, void 0, 'DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at ', (0, _jsx3.default)('a', {
    target: '_blank',
    href: 'https://datatables.net/'
  }, void 0, '\'https://datatables.net/\''), '.'), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    block: true,
    href: 'https://datatables.net/'
  }, void 0, 'View DataTables Documentation'));
  
  var _ref7 = (0, _jsx3.default)('div', {
    className: 'row ng-scope'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Kitchen Sink ')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table table-striped table-bordered table-hover'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username '))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo ')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton '), (0, _jsx3.default)('td', {}, void 0, '@fat ')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter '))))))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Basic Table')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username '))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo ')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton '), (0, _jsx3.default)('td', {}, void 0, '@fat')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter'))))))));
  
  var _ref8 = (0, _jsx3.default)('div', {
    className: 'row ng-scope'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Striped Rows ')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table table-striped'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username '))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo ')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton '), (0, _jsx3.default)('td', {}, void 0, '@fat')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter '))))))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Bordered Table ')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive table-bordered'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username '))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton'), (0, _jsx3.default)('td', {}, void 0, '@fat')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter '))))))));
  
  var _ref9 = (0, _jsx3.default)('div', {
    className: 'row ng-scope'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Hover Rows ')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table table-hover'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username'))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton '), (0, _jsx3.default)('td', {}, void 0, '@fat')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter '))))))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Context Classes ')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# '), (0, _jsx3.default)('th', {}, void 0, 'First Name '), (0, _jsx3.default)('th', {}, void 0, 'Last Name '), (0, _jsx3.default)('th', {}, void 0, 'Username '))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {
    className: 'success'
  }, void 0, (0, _jsx3.default)('td', {}, void 0, '1 '), (0, _jsx3.default)('td', {}, void 0, 'Mark '), (0, _jsx3.default)('td', {}, void 0, 'Otto '), (0, _jsx3.default)('td', {}, void 0, '@mdo')), (0, _jsx3.default)('tr', {
    className: 'info'
  }, void 0, (0, _jsx3.default)('td', {}, void 0, '2 '), (0, _jsx3.default)('td', {}, void 0, 'Jacob '), (0, _jsx3.default)('td', {}, void 0, 'Thornton '), (0, _jsx3.default)('td', {}, void 0, '@fat')), (0, _jsx3.default)('tr', {
    className: 'warning'
  }, void 0, (0, _jsx3.default)('td', {}, void 0, '3 '), (0, _jsx3.default)('td', {}, void 0, 'Larry '), (0, _jsx3.default)('td', {}, void 0, 'the Bird '), (0, _jsx3.default)('td', {}, void 0, '@twitter')), (0, _jsx3.default)('tr', {
    className: 'danger'
  }, void 0, (0, _jsx3.default)('td', {}, void 0, '4 '), (0, _jsx3.default)('td', {}, void 0, 'John '), (0, _jsx3.default)('td', {}, void 0, 'Smith '), (0, _jsx3.default)('td', {}, void 0, '@jsmith '))))))));
  
  var Tables = function (_Component) {
    (0, _inherits3.default)(Tables, _Component);
  
    function Tables() {
      (0, _classCallCheck3.default)(this, Tables);
      return (0, _possibleConstructorReturn3.default)(this, (Tables.__proto__ || (0, _getPrototypeOf2.default)(Tables)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Tables, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'col-lg-12'
        }, void 0, (0, _jsx3.default)(_Panel2.default, {
          header: _ref2
        }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          className: 'dataTable_wrapper'
        }, void 0, (0, _jsx3.default)('div', {
          id: 'dataTables-example_wrapper',
          className: 'dataTables_wrapper form-inline dt-bootstrap no-footer'
        }, void 0, _ref3, (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-sm-12'
        }, void 0, (0, _jsx3.default)('table', {
          className: 'table table-striped table-bordered table-hover dataTable no-footer',
          id: 'dataTables-example',
          role: 'grid',
          'aria-describedby': 'dataTables-example_info'
        }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {
          role: 'row'
        }, void 0, (0, _jsx3.default)('th', {
          className: 'sorting_asc',
          tabIndex: '0',
          'aria-controls': 'dataTables-example',
          rowSpan: '1',
          colSpan: '1',
          'aria-label': 'Rendering engine: activate to sort column descending',
          'aria-sort': 'ascending',
          style: { width: 265 }
        }, void 0, 'Rendering engine'), (0, _jsx3.default)('th', {
          className: 'sorting',
          tabIndex: '0',
          'aria-controls': 'dataTables-example',
          rowSpan: '1',
          colSpan: '1',
          'aria-label': 'Browser: activate to sort column ascending',
          style: { width: 321 }
        }, void 0, 'Browser'), (0, _jsx3.default)('th', {
          className: 'sorting',
          tabIndex: '0',
          'aria-controls': 'dataTables-example',
          rowSpan: '1',
          colSpan: '1',
          'aria-label': 'Platform(s): activate to sort column ascending',
          style: { width: 299 }
        }, void 0, 'Platform(s)'), (0, _jsx3.default)('th', {
          className: 'sorting',
          tabIndex: '0',
          'aria-controls': 'dataTables-example',
          rowSpan: '1',
          colSpan: '1',
          'aria-label': 'Engine version: activate to sort column ascending',
          style: { width: 231 }
        }, void 0, 'Engine version'), (0, _jsx3.default)('th', {
          className: 'sorting',
          tabIndex: '0',
          'aria-controls': 'dataTables-example',
          rowSpan: '1',
          colSpan: '1',
          'aria-label': 'CSS grade: activate to sort column ascending',
          style: { width: 180 }
        }, void 0, 'CSS grade'))), _ref4))), (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, _ref5, (0, _jsx3.default)('div', {
          className: 'col-sm-6 pullRight '
        }, void 0, (0, _jsx3.default)(_Pagination2.default, {
          activePage: 1,
          items: 6,
          first: true,
          last: true,
          prev: true,
          next: true,
          onSelect: function onSelect(pageNumber) {}
        }))))), _ref6))), _ref7, _ref8, _ref9);
      }
    }]);
    return Tables;
  }(_react.Component);
  
  exports.default = Tables;

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Pagination");

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/PageHeader");

/***/ },
/* 105 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Well");

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(107);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Button2.default, {});
  
  exports.default = {
  
    path: '/button',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Button = __webpack_require__(108);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Pagination from 'react-bootstrap/lib/Pagination';
  var title = 'Buttons';
  // import Well from 'react-bootstrap/lib/Well';
  
  var _ref = (0, _jsx3.default)(_Button2.default, {});
  
  function displayButtons(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayButtons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayButtons;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Buttons'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Default Buttons')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Normal Buttons'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Default'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary'
  }, void 0, 'Primary'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'success'
  }, void 0, 'Success'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'info'
  }, void 0, 'Info'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'warning'
  }, void 0, 'Warning'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'danger'
  }, void 0, 'Danger'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link'
  }, void 0, 'Link')), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Disabled Buttons'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_Button2.default, {
    disabled: true
  }, void 0, 'Default'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    disabled: true
  }, void 0, 'Primary'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'success',
    disabled: true
  }, void 0, 'Success'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'info',
    disabled: true
  }, void 0, 'Info'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'warning',
    disabled: true
  }, void 0, 'Warning'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'danger',
    disabled: true
  }, void 0, 'Danger'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    disabled: true
  }, void 0, 'Link')), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Button Sizes'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    bsSize: 'large'
  }, void 0, 'Large button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary'
  }, void 0, 'Default button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    bsSize: 'small'
  }, void 0, 'Small button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    bsSize: 'xsmall'
  }, void 0, 'Mini button'), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    bsSize: 'large',
    block: true
  }, void 0, 'Block level button'))), (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Circle Icon Buttons with Font Awesome Icons')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Normal Circle Buttons'), (0, _jsx3.default)(_Button2.default, {
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-list'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'success',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-link'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'info',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'warning',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-times'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'danger',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Large Circle Buttons'), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    bsStyle: 'primary',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-list'
  })), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    bsStyle: 'success',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-link'
  })), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    bsStyle: 'info',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    bsStyle: 'warning',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-times'
  })), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    bsStyle: 'danger',
    className: 'btn-circle'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Extra Large Circle Buttons'), (0, _jsx3.default)(_Button2.default, {
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-list'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'success',
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-link'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'info',
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-check'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'warning',
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-times'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'danger',
    className: 'btn-circle btn-xl'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Outline Buttons with Smooth Transition')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Outline Buttons'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_Button2.default, {
    className: 'btn-outline'
  }, void 0, 'Default'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline'
  }, void 0, 'Primary'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'success',
    className: 'btn-outline'
  }, void 0, 'Success'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'info',
    className: 'btn-outline'
  }, void 0, 'Info'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'warning',
    className: 'btn-outline'
  }, void 0, 'Warning'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'danger',
    className: 'btn-outline'
  }, void 0, 'Danger'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-outline'
  }, void 0, 'Link')), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Outline Button Sizes'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline',
    bsSize: 'large'
  }, void 0, 'Large button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline'
  }, void 0, 'Default button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline',
    bsSize: 'small'
  }, void 0, 'Small button'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline',
    bsSize: 'xsmall'
  }, void 0, 'Mini button'), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    className: 'btn-outline',
    bsSize: 'large',
    block: true
  }, void 0, 'Block level button'))), (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Social Buttons with Font Awesome Icons')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Social Buttons'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social {\n                    btn-bitbucket\n                  }',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-bitbucket'
  }), ' Sign in with Bitbucket'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-dropbox',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-dropbox'
  }), ' Sign in with Dropbox'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-facebook',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-facebook'
  }), ' Sign in with Facebook'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-flickr',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-flickr'
  }), ' Sign in with Flickr'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-github',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-github'
  }), ' Sign in with GitHub'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-google-plus',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-google-plus'
  }), ' Sign in with Google'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-instagram',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-instagram'
  }), ' Sign in with Instagram'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-linkedin',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-linkedin'
  }), ' Sign in with LinkedIn'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-pinterest',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-pinterest'
  }), ' Sign in with Pinterest'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-tumblr',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-tumblr'
  }), ' Sign in with Tumblr'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-twitter',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-twitter'
  }), ' Sign in with Twitter'), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social btn-vk',
    block: true
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-vk'
  }), ' Sign in with VK'), (0, _jsx3.default)('hr', {}), (0, _jsx3.default)('div', {
    className: 'text-center'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-bitbucket'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-bitbucket'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-dropbox'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-dropbox'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-facebook'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-facebook'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-flickr'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-flickr'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-github'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-github'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-google-plus'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-google-plus'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-instagram'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-instagram'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-linkedin'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-linkedin'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-pinterest'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-pinterest'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-tumblr'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-tumblr'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-twitter'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-twitter'
  })), (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'link',
    className: 'btn-social-icon btn-vk'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-vk'
  })))))));
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  var Buttons = function (_Component) {
    (0, _inherits3.default)(Buttons, _Component);
  
    function Buttons() {
      (0, _classCallCheck3.default)(this, Buttons);
      return (0, _possibleConstructorReturn3.default)(this, (Buttons.__proto__ || (0, _getPrototypeOf2.default)(Buttons)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Buttons, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return Buttons;
  }(_react.Component);
  
  exports.default = Buttons;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FlotCharts = __webpack_require__(110);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_FlotCharts2.default, {});
  
  exports.default = {
  
    path: '/flotcharts',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FlotCharts = __webpack_require__(111);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Flot Charts';
  
  var _ref = (0, _jsx3.default)(_FlotCharts2.default, {});
  
  function displayFlotCharts(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayFlotCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayFlotCharts;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Flot'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Line Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents')))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Pie Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Multiple Axes Line Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Moving Line Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Bar Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Flot Charts Usage')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, ', (0, _jsx3.default)('a', {
    target: '_blank',
    href: 'http://www.flotcharts.org/'
  }, void 0, 'http://www.flotcharts.org/'), '.'), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    block: true,
    href: 'http://www.flotcharts.org/'
  }, void 0, 'View Flot Charts Documentation'))))));
  
  var FlotCharts = function (_Component) {
    (0, _inherits3.default)(FlotCharts, _Component);
  
    function FlotCharts() {
      (0, _classCallCheck3.default)(this, FlotCharts);
      return (0, _possibleConstructorReturn3.default)(this, (FlotCharts.__proto__ || (0, _getPrototypeOf2.default)(FlotCharts)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(FlotCharts, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return FlotCharts;
  }(_react.Component);
  
  exports.default = FlotCharts;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Forms = __webpack_require__(113);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Forms2.default, {});
  
  exports.default = {
  
    path: '/forms',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Forms = __webpack_require__(114);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Forms';
  
  var _ref = (0, _jsx3.default)(_Forms2.default, {});
  
  function displayForms(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayForms.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayForms;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(65);
  
  var _FormControlFeedback = __webpack_require__(115);
  
  var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);
  
  var _FormControlStatic = __webpack_require__(116);
  
  var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);
  
  var _InputGroupAddon = __webpack_require__(117);
  
  var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.PageHeader, {}, void 0, 'Forms'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Basic Form Elements')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Form, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formBasicText'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Text Input'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {}), (0, _jsx3.default)(_reactBootstrap.HelpBlock, {}, void 0, 'Example block-level help text here.')), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formBasicText2'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Text Input'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text',
    placeholder: 'Enter Text'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {})), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Static text'), (0, _jsx3.default)(_FormControlStatic2.default, {}, void 0, 'email@example.com')), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formBasicFile'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'File Input'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'file'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {})), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsTextarea'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Textarea'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    componentClass: 'textarea',
    placeholder: 'textarea'
  })), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsCheckbox'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'CheckBox'), (0, _jsx3.default)(_reactBootstrap.Checkbox, {}, void 0, 'Checkbox #1 '), (0, _jsx3.default)(_reactBootstrap.Checkbox, {}, void 0, ' Checkbox #2 '), (0, _jsx3.default)(_reactBootstrap.Checkbox, {}, void 0, ' Checkbox #3 ')), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Inline CheckBox'), (0, _jsx3.default)(_reactBootstrap.Col, {}, void 0, (0, _jsx3.default)(_reactBootstrap.Checkbox, {
    inline: true
  }, void 0, '1'), ' ', (0, _jsx3.default)(_reactBootstrap.Checkbox, {
    inline: true
  }, void 0, '2'), ' ', (0, _jsx3.default)(_reactBootstrap.Checkbox, {
    inline: true
  }, void 0, '3'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Inline Radio'), (0, _jsx3.default)(_reactBootstrap.Col, {}, void 0, (0, _jsx3.default)(_reactBootstrap.Radio, {
    inline: true
  }, void 0, '1'), ' ', (0, _jsx3.default)(_reactBootstrap.Radio, {
    inline: true
  }, void 0, '2'), ' ', (0, _jsx3.default)(_reactBootstrap.Radio, {
    inline: true
  }, void 0, '3'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsSelect'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Select'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    componentClass: 'select',
    placeholder: 'select'
  }, void 0, (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '1'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '2'), (0, _jsx3.default)('option', {
    value: '3'
  }, void 0, '3'), (0, _jsx3.default)('option', {
    value: '4'
  }, void 0, '4'), (0, _jsx3.default)('option', {
    value: '5'
  }, void 0, '5'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsSelectMultiple'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Multiple select'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    componentClass: 'select',
    multiple: true
  }, void 0, (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '1'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '2'), (0, _jsx3.default)('option', {
    value: '3'
  }, void 0, '3'), (0, _jsx3.default)('option', {
    value: '4'
  }, void 0, '4'), (0, _jsx3.default)('option', {
    value: '5'
  }, void 0, '5'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.Button, {
    type: 'submit'
  }, void 0, 'Submit Button'), '  ', (0, _jsx3.default)(_reactBootstrap.Button, {
    type: 'reset'
  }, void 0, 'Reset Button')))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Disabled Form States'), (0, _jsx3.default)(_reactBootstrap.Form, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlDisableState'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, ' Disabled Input '), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text',
    placeholder: 'Disabled Input',
    disabled: true
  })), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsDisableSelect'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Disabled Select'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    componentClass: 'select',
    placeholder: 'select',
    disabled: true
  }, void 0, (0, _jsx3.default)('option', {
    value: '1'
  }, void 0, '1'), (0, _jsx3.default)('option', {
    value: '2'
  }, void 0, '2'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsDisabledCheckbox'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Checkbox, {
    disabled: true
  }, void 0, 'Disabled CheckBox')), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formControlsDisabledButton'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Button, {
    bsStyle: 'primary',
    type: 'submit',
    disabled: true
  }, void 0, 'Disabled Button '))), (0, _jsx3.default)('h1', {}, void 0, 'Form Validation States'), (0, _jsx3.default)(_reactBootstrap.Form, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formValidationSuccess2',
    validationState: 'success'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Input with success'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {})), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formValidationWarning1',
    validationState: 'warning'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Input with warning'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {})), (0, _jsx3.default)(_reactBootstrap.FormGroup, {
    controlId: 'formValidationWarning1',
    validationState: 'error'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.ControlLabel, {}, void 0, 'Input with Error'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_FormControlFeedback2.default, {}))), (0, _jsx3.default)('h1', {}, void 0, 'Input Groups'), (0, _jsx3.default)(_reactBootstrap.Form, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_InputGroupAddon2.default, {}, void 0, '@'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_InputGroupAddon2.default, {}, void 0, '.00'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_InputGroupAddon2.default, {}, void 0, '$'), (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_InputGroupAddon2.default, {}, void 0, '.00'))), (0, _jsx3.default)(_reactBootstrap.FormGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_reactBootstrap.FormControl, {
    type: 'text'
  }), (0, _jsx3.default)(_InputGroupAddon2.default, {}, void 0, (0, _jsx3.default)(_reactBootstrap.Glyphicon, {
    glyph: 'music'
  })))))))))));
  
  var Forms = function (_Component) {
    (0, _inherits3.default)(Forms, _Component);
  
    function Forms() {
      (0, _classCallCheck3.default)(this, Forms);
      return (0, _possibleConstructorReturn3.default)(this, (Forms.__proto__ || (0, _getPrototypeOf2.default)(Forms)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Forms, [{
      key: 'render',
      //eslint-disable-line
      value: function render() {
        return _ref;
      }
    }]);
    return Forms;
  }(_react.Component);
  
  exports.default = Forms;

/***/ },
/* 115 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlFeedback");

/***/ },
/* 116 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlStatic");

/***/ },
/* 117 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/InputGroupAddon");

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Grid = __webpack_require__(119);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Grid2.default, {});
  
  exports.default = {
  
    path: '/grid',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Grid = __webpack_require__(120);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Grid';
  
  var _ref = (0, _jsx3.default)(_Grid2.default, {});
  
  function displayGrid(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayGrid.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayGrid;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Grid'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Grid options'), (0, _jsx3.default)('p', {}, void 0, 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.'), (0, _jsx3.default)('div', {
    className: 'table-responsive'
  }, void 0, (0, _jsx3.default)('table', {
    className: 'table table-bordered table-striped'
  }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}), (0, _jsx3.default)('th', {}, void 0, 'Extra small devices', (0, _jsx3.default)('small', {}, void 0, 'Phones (<768px)')), (0, _jsx3.default)('th', {}, void 0, 'Small devices', (0, _jsx3.default)('small', {}, void 0, 'Tablets (≥768px)')), (0, _jsx3.default)('th', {}, void 0, 'Medium devices', (0, _jsx3.default)('small', {}, void 0, 'Desktops (≥992px)')), (0, _jsx3.default)('th', {}, void 0, 'Large devices', (0, _jsx3.default)('small', {}, void 0, 'Desktops (≥1200px)')))), (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Grid behavior'), (0, _jsx3.default)('td', {}, void 0, 'Horizontal at all times'), (0, _jsx3.default)('td', {
    colSpan: '3'
  }, void 0, 'Collapsed to start, horizontal above breakpoints')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Max container width'), (0, _jsx3.default)('td', {}, void 0, 'None (auto)'), (0, _jsx3.default)('td', {}, void 0, '750px'), (0, _jsx3.default)('td', {}, void 0, '970px'), (0, _jsx3.default)('td', {}, void 0, '1170px')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Class prefix'), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('code', {}, void 0, '.col-xs-')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('code', {}, void 0, '.col-sm-')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('code', {}, void 0, '.col-md-')), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('code', {}, void 0, '.col-lg-'))), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '# of columns'), (0, _jsx3.default)('td', {
    colSpan: '4'
  }, void 0, '12')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Max column width'), (0, _jsx3.default)('td', {
    className: 'text-muted'
  }, void 0, 'Auto'), (0, _jsx3.default)('td', {}, void 0, '60px'), (0, _jsx3.default)('td', {}, void 0, '78px'), (0, _jsx3.default)('td', {}, void 0, '95px')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Gutter width'), (0, _jsx3.default)('td', {
    colSpan: '4'
  }, void 0, '30px (15px on each side of a column)')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Nestable'), (0, _jsx3.default)('td', {
    colSpan: '4'
  }, void 0, 'Yes')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Offsets'), (0, _jsx3.default)('td', {
    colSpan: '4'
  }, void 0, 'Yes')), (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, 'Column ordering'), (0, _jsx3.default)('td', {
    colSpan: '4'
  }, void 0, 'Yes'))))), (0, _jsx3.default)('p', {}, void 0, 'Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any', (0, _jsx3.default)('code', {}, void 0, '.col-md-'), ' class to an element will not only affect its styling on medium devices but also on large devices if a', (0, _jsx3.default)('code', {}, void 0, '.col-lg-'), ' class is not present.')))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Example: Stacked-to-horizontal'), (0, _jsx3.default)('p', {}, void 0, 'Using a single set of', (0, _jsx3.default)('code', {}, void 0, '.col-md-*'), ' grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any', (0, _jsx3.default)('code', {}, void 0, '.row'), '.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1'), (0, _jsx3.default)('div', {
    className: 'col-md-1'
  }, void 0, '.col-md-1')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-8'
  }, void 0, '.col-md-8'), (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, '.col-md-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, '.col-md-4'), (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, '.col-md-4'), (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, '.col-md-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, '.col-md-6'), (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, '.col-md-6'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Example: Mobile and desktop'), (0, _jsx3.default)('p', {}, void 0, 'Dont want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding', (0, _jsx3.default)('code', {}, void 0, '.col-xs-*'), (0, _jsx3.default)('code', {}, void 0, '.col-md-*'), ' to your columns. See the example below for a better idea of how it all works.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-12 col-md-8'
  }, void 0, '.col-xs-12 .col-md-8'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-md-4'
  }, void 0, '.col-xs-6 .col-md-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-md-4'
  }, void 0, '.col-xs-6 .col-md-4'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-md-4'
  }, void 0, '.col-xs-6 .col-md-4'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-md-4'
  }, void 0, '.col-xs-6 .col-md-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-6'
  }, void 0, '.col-xs-6'), (0, _jsx3.default)('div', {
    className: 'col-xs-6'
  }, void 0, '.col-xs-6'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Example: Mobile, tablet, desktops'), (0, _jsx3.default)('p', {}, void 0, 'Build on the previous example by creating even more dynamic and powerful layouts with tablet', (0, _jsx3.default)('code', {}, void 0, '.col-sm-*'), ' classes.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-12 col-sm-6 col-md-8'
  }, void 0, '.col-xs-12 .col-sm-6 .col-md-8'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-md-4'
  }, void 0, '.col-xs-6 .col-md-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-4'
  }, void 0, '.col-xs-6 .col-sm-4'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-4'
  }, void 0, '.col-xs-6 .col-sm-4'), (0, _jsx3.default)('div', {
    className: 'clearfix visible-xs'
  }), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-4'
  }, void 0, '.col-xs-6 .col-sm-4'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {
    id: 'grid-responsive-resets'
  }, void 0, 'Responsive column resets'), (0, _jsx3.default)('p', {}, void 0, 'With the four tiers of grids available you\'re bound to run into issues where, at certain breakpoints, your columns don\'t clear quite right as one is taller than the other. To fix that, use a combination of a', (0, _jsx3.default)('code', {}, void 0, '.clearfix'), ' and our ', (0, _jsx3.default)('a', {
    href: 'javascript:void(0)'
  }, void 0, 'responsive utility classes'), '.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-3'
  }, void 0, '.col-xs-6 .col-sm-3', (0, _jsx3.default)('br', {}), 'Resize your viewport or check it out on your phone for an example.'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-3'
  }, void 0, '.col-xs-6 .col-sm-3'), (0, _jsx3.default)('div', {
    className: 'clearfix visible-xs'
  }), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-3'
  }, void 0, '.col-xs-6 .col-sm-3'), (0, _jsx3.default)('div', {
    className: 'col-xs-6 col-sm-3'
  }, void 0, '.col-xs-6 .col-sm-3'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {
    id: 'grid-offsetting'
  }, void 0, 'Offsetting columns'), (0, _jsx3.default)('p', {}, void 0, 'Move columns to the right using', (0, _jsx3.default)('code', {}, void 0, '.col-md-offset-*'), ' classes. These classes increase the left margin of a column by', (0, _jsx3.default)('code', {}, void 0, '*'), ' columns. For example,', (0, _jsx3.default)('code', {}, void 0, '.col-md-offset-4'), ' moves', (0, _jsx3.default)('code', {}, void 0, '.col-md-4'), ' over four columns.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, '.col-md-4'), (0, _jsx3.default)('div', {
    className: 'col-md-4 col-md-offset-4'
  }, void 0, '.col-md-4 .col-md-offset-4')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-3 col-md-offset-3'
  }, void 0, '.col-md-3 .col-md-offset-3'), (0, _jsx3.default)('div', {
    className: 'col-md-3 col-md-offset-3'
  }, void 0, '.col-md-3 .col-md-offset-3')), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6 col-md-offset-3'
  }, void 0, '.col-md-6 .col-md-offset-3'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {
    id: 'grid-nesting'
  }, void 0, 'Nesting columns'), (0, _jsx3.default)('p', {}, void 0, 'To nest your content with the default grid, add a new', (0, _jsx3.default)('code', {}, void 0, '.row'), ' and set of', (0, _jsx3.default)('code', {}, void 0, '.col-md-*'), ' columns within an existing', (0, _jsx3.default)('code', {}, void 0, '.col-md-*'), ' column. Nested rows should include a set of columns that add up to 12.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-9'
  }, void 0, 'Level 1: .col-md-9', (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, 'Level 2: .col-md-6'), (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, 'Level 2: .col-md-6'))))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {}, void 0, (0, _jsx3.default)('h3', {
    id: 'grid-column-ordering'
  }, void 0, 'Column ordering'), (0, _jsx3.default)('p', {}, void 0, 'Easily change the order of our built-in grid columns with', (0, _jsx3.default)('code', {}, void 0, '.col-md-push-*'), ' and', (0, _jsx3.default)('code', {}, void 0, '.col-md-pull-*'), ' modifier classes.'), (0, _jsx3.default)('div', {
    className: 'row show-grid'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-9 col-md-push-3'
  }, void 0, '.col-md-9 .col-md-push-3'), (0, _jsx3.default)('div', {
    className: 'col-md-3 col-md-pull-9'
  }, void 0, '.col-md-3 .col-md-pull-9'))))));
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  var Grid = function (_Component) {
    (0, _inherits3.default)(Grid, _Component);
  
    function Grid() {
      (0, _classCallCheck3.default)(this, Grid);
      return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Grid, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return Grid;
  }(_react.Component);
  
  exports.default = Grid;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Icons = __webpack_require__(122);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Icons2.default, {});
  
  exports.default = {
  
    path: '/icons',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Icons = __webpack_require__(123);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Icons';
  
  var _ref = (0, _jsx3.default)(_Icons2.default, {});
  
  function displayIcons(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayIcons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayIcons;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Icons')), (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'All available icons')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'fa col-lg-3'
  }, void 0, ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-glass'
  }, void 0, ' fa-glass '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-music'
  }, void 0, ' fa-music '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-search'
  }, void 0, ' fa-search '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-envelope-o'
  }, void 0, ' fa-envelope-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-heart'
  }, void 0, ' fa-heart '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star'
  }, void 0, ' fa-star '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star-o'
  }, void 0, ' fa-star-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-user'
  }, void 0, ' fa-user '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-film'
  }, void 0, ' fa-film '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-th-large'
  }, void 0, ' fa-th-large '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-th'
  }, void 0, ' fa-th '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-th-list'
  }, void 0, ' fa-th-list '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-check'
  }, void 0, ' fa-check '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-times'
  }, void 0, ' fa-times '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-search-plus'
  }, void 0, ' fa-search-plus '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-search-minus'
  }, void 0, ' fa-search-minus '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-power-off'
  }, void 0, ' fa-power-off '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-signal'
  }, void 0, ' fa-signal '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gear'
  }, void 0, ' fa-gear '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cog'
  }, void 0, ' fa-cog '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-trash-o'
  }, void 0, ' fa-trash-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-home'
  }, void 0, ' fa-home '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-o'
  }, void 0, ' fa-file-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-clock-o'
  }, void 0, ' fa-clock-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-road'
  }, void 0, ' fa-road '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-download'
  }, void 0, ' fa-download '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-o-down'
  }, void 0, ' fa-arrow-circle-o-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-o-up'
  }, void 0, ' fa-arrow-circle-o-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-inbox'
  }, void 0, ' fa-inbox '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-play-circle-o'
  }, void 0, ' fa-play-circle-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rotate-right'
  }, void 0, ' fa-rotate-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-repeat'
  }, void 0, ' fa-repeat '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-refresh'
  }, void 0, ' fa-refresh '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-list-alt'
  }, void 0, ' fa-list-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-lock'
  }, void 0, ' fa-lock '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flag'
  }, void 0, ' fa-flag '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-headphones'
  }, void 0, ' fa-headphones '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-volume-off'
  }, void 0, ' fa-volume-off '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-volume-down'
  }, void 0, ' fa-volume-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-volume-up'
  }, void 0, ' fa-volume-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-qrcode'
  }, void 0, ' fa-qrcode '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-barcode'
  }, void 0, ' fa-barcode '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tag'
  }, void 0, ' fa-tag '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tags'
  }, void 0, ' fa-tags '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-book'
  }, void 0, ' fa-book '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bookmark'
  }, void 0, ' fa-bookmark '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-print'
  }, void 0, ' fa-print '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-camera'
  }, void 0, ' fa-camera '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-font'
  }, void 0, ' fa-font '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bold'
  }, void 0, ' fa-bold '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-italic'
  }, void 0, ' fa-italic '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-text-height'
  }, void 0, ' fa-text-height '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-text-width'
  }, void 0, ' fa-text-width '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-align-left'
  }, void 0, ' fa-align-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-align-center'
  }, void 0, ' fa-align-center '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-align-right'
  }, void 0, ' fa-align-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-align-justify'
  }, void 0, ' fa-align-justify '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-list'
  }, void 0, ' fa-list '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dedent'
  }, void 0, ' fa-dedent '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-outdent'
  }, void 0, ' fa-outdent '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-indent'
  }, void 0, ' fa-indent '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-video-camera'
  }, void 0, ' fa-video-camera '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-photo'
  }, void 0, ' fa-photo '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-image'
  }, void 0, ' fa-image '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-picture-o'
  }, void 0, ' fa-picture-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pencil'
  }, void 0, ' fa-pencil '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-map-marker'
  }, void 0, ' fa-map-marker '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-adjust'
  }, void 0, ' fa-adjust '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tint'
  }, void 0, ' fa-tint '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-edit'
  }, void 0, ' fa-edit '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pencil-square-o'
  }, void 0, ' fa-pencil-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-share-square-o'
  }, void 0, ' fa-share-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-check-square-o'
  }, void 0, ' fa-check-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrows'
  }, void 0, ' fa-arrows '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-step-backward'
  }, void 0, ' fa-step-backward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fast-backward'
  }, void 0, ' fa-fast-backward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-backward'
  }, void 0, ' fa-backward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-play'
  }, void 0, ' fa-play '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pause'
  }, void 0, ' fa-pause '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stop'
  }, void 0, ' fa-stop '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-forward'
  }, void 0, ' fa-forward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fast-forward'
  }, void 0, ' fa-fast-forward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-step-forward'
  }, void 0, ' fa-step-forward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-eject'
  }, void 0, ' fa-eject '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-left'
  }, void 0, ' fa-chevron-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-right'
  }, void 0, ' fa-chevron-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-plus-circle'
  }, void 0, ' fa-plus-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-minus-circle'
  }, void 0, ' fa-minus-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-times-circle'
  }, void 0, ' fa-times-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-check-circle'
  }, void 0, ' fa-check-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-question-circle'
  }, void 0, ' fa-question-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-info-circle'
  }, void 0, ' fa-info-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-crosshairs'
  }, void 0, ' fa-crosshairs '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-times-circle-o'
  }, void 0, ' fa-times-circle-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-check-circle-o'
  }, void 0, ' fa-check-circle-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ban'
  }, void 0, ' fa-ban '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-left'
  }, void 0, ' fa-arrow-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-right'
  }, void 0, ' fa-arrow-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-up'
  }, void 0, ' fa-arrow-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-down'
  }, void 0, ' fa-arrow-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mail-forward'
  }, void 0, ' fa-mail-forward '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-share'
  }, void 0, ' fa-share '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-expand'
  }, void 0, ' fa-expand '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-compress'
  }, void 0, ' fa-compress '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-plus'
  }, void 0, ' fa-plus '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-minus'
  }, void 0, ' fa-minus '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-asterisk'
  }, void 0, ' fa-asterisk '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-exclamation-circle'
  }, void 0, ' fa-exclamation-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gift'
  }, void 0, ' fa-gift '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-leaf'
  }, void 0, ' fa-leaf '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fire'
  }, void 0, ' fa-fire '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-eye'
  }, void 0, ' fa-eye '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-eye-slash'
  }, void 0, ' fa-eye-slash '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-warning'
  }, void 0, ' fa-warning '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-exclamation-triangle'
  }, void 0, ' fa-exclamation-triangle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-plane'
  }, void 0, ' fa-plane '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-calendar'
  }, void 0, ' fa-calendar '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-random'
  }, void 0, ' fa-random '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-comment'
  }, void 0, ' fa-comment '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-magnet'
  }, void 0, ' fa-magnet '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-up'
  }, void 0, ' fa-chevron-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-down'
  }, void 0, ' fa-chevron-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-retweet'
  }, void 0, ' fa-retweet '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-shopping-cart'
  }, void 0, ' fa-shopping-cart '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-folder'
  }, void 0, ' fa-folder '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-folder-open'
  }, void 0, ' fa-folder-open '), (0, _jsx3.default)('br', {}), ' '), (0, _jsx3.default)('div', {
    className: 'fa col-lg-3'
  }, void 0, ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrows-v'
  }, void 0, ' fa-arrows-v '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrows-h'
  }, void 0, ' fa-arrows-h '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bar-chart-o'
  }, void 0, ' fa-bar-chart-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-twitter-square'
  }, void 0, ' fa-twitter-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-facebook-square'
  }, void 0, ' fa-facebook-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-camera-retro'
  }, void 0, ' fa-camera-retro '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-key'
  }, void 0, ' fa-key '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gears'
  }, void 0, ' fa-gears '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cogs'
  }, void 0, ' fa-cogs '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-comments'
  }, void 0, ' fa-comments '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-thumbs-o-up'
  }, void 0, ' fa-thumbs-o-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-thumbs-o-down'
  }, void 0, ' fa-thumbs-o-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star-half'
  }, void 0, ' fa-star-half '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-heart-o'
  }, void 0, ' fa-heart-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sign-out'
  }, void 0, ' fa-sign-out '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-linkedin-square'
  }, void 0, ' fa-linkedin-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-thumb-tack'
  }, void 0, ' fa-thumb-tack '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-external-link'
  }, void 0, ' fa-external-link '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sign-in'
  }, void 0, ' fa-sign-in '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-trophy'
  }, void 0, ' fa-trophy '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-github-square'
  }, void 0, ' fa-github-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-upload'
  }, void 0, ' fa-upload '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-lemon-o'
  }, void 0, ' fa-lemon-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-phone'
  }, void 0, ' fa-phone '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-square-o'
  }, void 0, ' fa-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bookmark-o'
  }, void 0, ' fa-bookmark-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-phone-square'
  }, void 0, ' fa-phone-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-twitter'
  }, void 0, ' fa-twitter '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-facebook'
  }, void 0, ' fa-facebook '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-github'
  }, void 0, ' fa-github '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-unlock'
  }, void 0, ' fa-unlock '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-credit-card'
  }, void 0, ' fa-credit-card '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rss'
  }, void 0, ' fa-rss '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hdd-o'
  }, void 0, ' fa-hdd-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bullhorn'
  }, void 0, ' fa-bullhorn '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bell'
  }, void 0, ' fa-bell '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-certificate'
  }, void 0, ' fa-certificate '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hand-o-right'
  }, void 0, ' fa-hand-o-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hand-o-left'
  }, void 0, ' fa-hand-o-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hand-o-up'
  }, void 0, ' fa-hand-o-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hand-o-down'
  }, void 0, ' fa-hand-o-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-left'
  }, void 0, ' fa-arrow-circle-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-right'
  }, void 0, ' fa-arrow-circle-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-up'
  }, void 0, ' fa-arrow-circle-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-down'
  }, void 0, ' fa-arrow-circle-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-globe'
  }, void 0, ' fa-globe '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-wrench'
  }, void 0, ' fa-wrench '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tasks'
  }, void 0, ' fa-tasks '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-filter'
  }, void 0, ' fa-filter '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-briefcase'
  }, void 0, ' fa-briefcase '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrows-alt'
  }, void 0, ' fa-arrows-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-group'
  }, void 0, ' fa-group '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-users'
  }, void 0, ' fa-users '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chain'
  }, void 0, ' fa-chain '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-link'
  }, void 0, ' fa-link '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cloud'
  }, void 0, ' fa-cloud '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flask'
  }, void 0, ' fa-flask '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cut'
  }, void 0, ' fa-cut '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-scissors'
  }, void 0, ' fa-scissors '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-copy'
  }, void 0, ' fa-copy '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-files-o'
  }, void 0, ' fa-files-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paperclip'
  }, void 0, ' fa-paperclip '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-save'
  }, void 0, ' fa-save '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-floppy-o'
  }, void 0, ' fa-floppy-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-square'
  }, void 0, ' fa-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-navicon'
  }, void 0, ' fa-navicon '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-reorder'
  }, void 0, ' fa-reorder '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bars'
  }, void 0, ' fa-bars '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-list-ul'
  }, void 0, ' fa-list-ul '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-list-ol'
  }, void 0, ' fa-list-ol '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-strikethrough'
  }, void 0, ' fa-strikethrough '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-underline'
  }, void 0, ' fa-underline '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-table'
  }, void 0, ' fa-table '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-magic'
  }, void 0, ' fa-magic '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-truck'
  }, void 0, ' fa-truck '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pinterest'
  }, void 0, ' fa-pinterest '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pinterest-square'
  }, void 0, ' fa-pinterest-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-google-plus-square'
  }, void 0, ' fa-google-plus-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-google-plus'
  }, void 0, ' fa-google-plus '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-money'
  }, void 0, ' fa-money '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-down'
  }, void 0, ' fa-caret-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-up'
  }, void 0, ' fa-caret-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-left'
  }, void 0, ' fa-caret-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-right'
  }, void 0, ' fa-caret-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-columns'
  }, void 0, ' fa-columns '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-unsorted'
  }, void 0, ' fa-unsorted '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort'
  }, void 0, ' fa-sort '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-down'
  }, void 0, ' fa-sort-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-desc'
  }, void 0, ' fa-sort-desc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-up'
  }, void 0, ' fa-sort-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-asc'
  }, void 0, ' fa-sort-asc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-envelope'
  }, void 0, ' fa-envelope '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-linkedin'
  }, void 0, ' fa-linkedin '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rotate-left'
  }, void 0, ' fa-rotate-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-undo'
  }, void 0, ' fa-undo '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-legal'
  }, void 0, ' fa-legal '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gavel'
  }, void 0, ' fa-gavel '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dashboard'
  }, void 0, ' fa-dashboard '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tachometer'
  }, void 0, ' fa-tachometer '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-comment-o'
  }, void 0, ' fa-comment-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-comments-o'
  }, void 0, ' fa-comments-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flash'
  }, void 0, ' fa-flash '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bolt'
  }, void 0, ' fa-bolt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sitemap'
  }, void 0, ' fa-sitemap '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-umbrella'
  }, void 0, ' fa-umbrella '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paste'
  }, void 0, ' fa-paste '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-clipboard'
  }, void 0, ' fa-clipboard '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-lightbulb-o'
  }, void 0, ' fa-lightbulb-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-exchange'
  }, void 0, ' fa-exchange '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cloud-download'
  }, void 0, ' fa-cloud-download '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cloud-upload'
  }, void 0, ' fa-cloud-upload '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-user-md'
  }, void 0, ' fa-user-md '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stethoscope'
  }, void 0, ' fa-stethoscope '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-suitcase'
  }, void 0, ' fa-suitcase '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bell-o'
  }, void 0, ' fa-bell-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-coffee'
  }, void 0, ' fa-coffee '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cutlery'
  }, void 0, ' fa-cutlery '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-text-o'
  }, void 0, ' fa-file-text-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-building-o'
  }, void 0, ' fa-building-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hospital-o'
  }, void 0, ' fa-hospital-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ambulance'
  }, void 0, ' fa-ambulance '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-medkit'
  }, void 0, ' fa-medkit '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fighter-jet'
  }, void 0, ' fa-fighter-jet '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-beer'
  }, void 0, ' fa-beer '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-h-square'
  }, void 0, ' fa-h-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-plus-square'
  }, void 0, ' fa-plus-square '), (0, _jsx3.default)('br', {}), ' '), (0, _jsx3.default)('div', {
    className: 'fa col-lg-3'
  }, void 0, ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-double-left'
  }, void 0, ' fa-angle-double-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-double-right'
  }, void 0, ' fa-angle-double-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-double-up'
  }, void 0, ' fa-angle-double-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-double-down'
  }, void 0, ' fa-angle-double-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-left'
  }, void 0, ' fa-angle-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-right'
  }, void 0, ' fa-angle-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-up'
  }, void 0, ' fa-angle-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-angle-down'
  }, void 0, ' fa-angle-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-desktop'
  }, void 0, ' fa-desktop '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-laptop'
  }, void 0, ' fa-laptop '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tablet'
  }, void 0, ' fa-tablet '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mobile-phone'
  }, void 0, ' fa-mobile-phone '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mobile'
  }, void 0, ' fa-mobile '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-circle-o'
  }, void 0, ' fa-circle-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-quote-left'
  }, void 0, ' fa-quote-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-quote-right'
  }, void 0, ' fa-quote-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-spinner'
  }, void 0, ' fa-spinner '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-circle'
  }, void 0, ' fa-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mail-reply'
  }, void 0, ' fa-mail-reply '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-reply'
  }, void 0, ' fa-reply '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-github-alt'
  }, void 0, ' fa-github-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-folder-o'
  }, void 0, ' fa-folder-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-folder-open-o'
  }, void 0, ' fa-folder-open-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-smile-o'
  }, void 0, ' fa-smile-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-frown-o'
  }, void 0, ' fa-frown-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-meh-o'
  }, void 0, ' fa-meh-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gamepad'
  }, void 0, ' fa-gamepad '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-keyboard-o'
  }, void 0, ' fa-keyboard-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flag-o'
  }, void 0, ' fa-flag-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flag-checkered'
  }, void 0, ' fa-flag-checkered '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-terminal'
  }, void 0, ' fa-terminal '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-code'
  }, void 0, ' fa-code '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mail-reply-all'
  }, void 0, ' fa-mail-reply-all '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-reply-all'
  }, void 0, ' fa-reply-all '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star-half-empty'
  }, void 0, ' fa-star-half-empty '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star-half-full'
  }, void 0, ' fa-star-half-full '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-star-half-o'
  }, void 0, ' fa-star-half-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-location-arrow'
  }, void 0, ' fa-location-arrow '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-crop'
  }, void 0, ' fa-crop '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-code-fork'
  }, void 0, ' fa-code-fork '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-unlink'
  }, void 0, ' fa-unlink '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chain-broken'
  }, void 0, ' fa-chain-broken '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-question'
  }, void 0, ' fa-question '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-info'
  }, void 0, ' fa-info '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-exclamation'
  }, void 0, ' fa-exclamation '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-superscript'
  }, void 0, ' fa-superscript '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-subscript'
  }, void 0, ' fa-subscript '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-eraser'
  }, void 0, ' fa-eraser '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-puzzle-piece'
  }, void 0, ' fa-puzzle-piece '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-microphone'
  }, void 0, ' fa-microphone '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-microphone-slash'
  }, void 0, ' fa-microphone-slash '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-shield'
  }, void 0, ' fa-shield '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-calendar-o'
  }, void 0, ' fa-calendar-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fire-extinguisher'
  }, void 0, ' fa-fire-extinguisher '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rocket'
  }, void 0, ' fa-rocket '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-maxcdn'
  }, void 0, ' fa-maxcdn '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-circle-left'
  }, void 0, ' fa-chevron-circle-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-circle-right'
  }, void 0, ' fa-chevron-circle-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-circle-up'
  }, void 0, ' fa-chevron-circle-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-chevron-circle-down'
  }, void 0, ' fa-chevron-circle-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-html5'
  }, void 0, ' fa-html5 '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-css3'
  }, void 0, ' fa-css3 '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-anchor'
  }, void 0, ' fa-anchor '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-unlock-alt'
  }, void 0, ' fa-unlock-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bullseye'
  }, void 0, ' fa-bullseye '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ellipsis-h'
  }, void 0, ' fa-ellipsis-h '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ellipsis-v'
  }, void 0, ' fa-ellipsis-v '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rss-square'
  }, void 0, ' fa-rss-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-play-circle'
  }, void 0, ' fa-play-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ticket'
  }, void 0, ' fa-ticket '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-minus-square'
  }, void 0, ' fa-minus-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-minus-square-o'
  }, void 0, ' fa-minus-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-level-up'
  }, void 0, ' fa-level-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-level-down'
  }, void 0, ' fa-level-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-check-square'
  }, void 0, ' fa-check-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pencil-square'
  }, void 0, ' fa-pencil-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-external-link-square'
  }, void 0, ' fa-external-link-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-share-square'
  }, void 0, ' fa-share-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-compass'
  }, void 0, ' fa-compass '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-toggle-down'
  }, void 0, ' fa-toggle-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-square-o-down'
  }, void 0, ' fa-caret-square-o-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-toggle-up'
  }, void 0, ' fa-toggle-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-square-o-up'
  }, void 0, ' fa-caret-square-o-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-toggle-right'
  }, void 0, ' fa-toggle-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-square-o-right'
  }, void 0, ' fa-caret-square-o-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-euro'
  }, void 0, ' fa-euro '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-eur'
  }, void 0, ' fa-eur '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gbp'
  }, void 0, ' fa-gbp '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dollar'
  }, void 0, ' fa-dollar '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-usd'
  }, void 0, ' fa-usd '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rupee'
  }, void 0, ' fa-rupee '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-inr'
  }, void 0, ' fa-inr '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cny'
  }, void 0, ' fa-cny '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rmb'
  }, void 0, ' fa-rmb '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-yen'
  }, void 0, ' fa-yen '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-jpy'
  }, void 0, ' fa-jpy '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ruble'
  }, void 0, ' fa-ruble '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rouble'
  }, void 0, ' fa-rouble '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rub'
  }, void 0, ' fa-rub '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-won'
  }, void 0, ' fa-won '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-krw'
  }, void 0, ' fa-krw '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bitcoin'
  }, void 0, ' fa-bitcoin '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-btc'
  }, void 0, ' fa-btc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file'
  }, void 0, ' fa-file '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-text'
  }, void 0, ' fa-file-text '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-alpha-asc'
  }, void 0, ' fa-sort-alpha-asc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-alpha-desc'
  }, void 0, ' fa-sort-alpha-desc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-amount-asc'
  }, void 0, ' fa-sort-amount-asc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-amount-desc'
  }, void 0, ' fa-sort-amount-desc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-numeric-asc'
  }, void 0, ' fa-sort-numeric-asc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sort-numeric-desc'
  }, void 0, ' fa-sort-numeric-desc '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-thumbs-up'
  }, void 0, ' fa-thumbs-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-thumbs-down'
  }, void 0, ' fa-thumbs-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-youtube-square'
  }, void 0, ' fa-youtube-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-youtube'
  }, void 0, ' fa-youtube '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-xing'
  }, void 0, ' fa-xing '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-xing-square'
  }, void 0, ' fa-xing-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-youtube-play'
  }, void 0, ' fa-youtube-play '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dropbox'
  }, void 0, ' fa-dropbox '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stack-overflow'
  }, void 0, ' fa-stack-overflow '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-instagram'
  }, void 0, ' fa-instagram '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-flickr'
  }, void 0, ' fa-flickr '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-adn'
  }, void 0, ' fa-adn '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bitbucket'
  }, void 0, ' fa-bitbucket '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bitbucket-square'
  }, void 0, ' fa-bitbucket-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tumblr'
  }, void 0, ' fa-tumblr '), (0, _jsx3.default)('br', {}), ' '), (0, _jsx3.default)('div', {
    className: 'fa col-lg-3'
  }, void 0, ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tumblr-square'
  }, void 0, ' fa-tumblr-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-long-arrow-down'
  }, void 0, ' fa-long-arrow-down '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-long-arrow-up'
  }, void 0, ' fa-long-arrow-up '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-long-arrow-left'
  }, void 0, ' fa-long-arrow-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-long-arrow-right'
  }, void 0, ' fa-long-arrow-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-apple'
  }, void 0, ' fa-apple '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-windows'
  }, void 0, ' fa-windows '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-android'
  }, void 0, ' fa-android '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-linux'
  }, void 0, ' fa-linux '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dribbble'
  }, void 0, ' fa-dribbble '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-skype'
  }, void 0, ' fa-skype '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-foursquare'
  }, void 0, ' fa-foursquare '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-trello'
  }, void 0, ' fa-trello '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-female'
  }, void 0, ' fa-female '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-male'
  }, void 0, ' fa-male '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-gittip'
  }, void 0, ' fa-gittip '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sun-o'
  }, void 0, ' fa-sun-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-moon-o'
  }, void 0, ' fa-moon-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-archive'
  }, void 0, ' fa-archive '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bug'
  }, void 0, ' fa-bug '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-vk'
  }, void 0, ' fa-vk '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-weibo'
  }, void 0, ' fa-weibo '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-renren'
  }, void 0, ' fa-renren '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pagelines'
  }, void 0, ' fa-pagelines '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stack-exchange'
  }, void 0, ' fa-stack-exchange '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-o-right'
  }, void 0, ' fa-arrow-circle-o-right '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-arrow-circle-o-left'
  }, void 0, ' fa-arrow-circle-o-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-toggle-left'
  }, void 0, ' fa-toggle-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-caret-square-o-left'
  }, void 0, ' fa-caret-square-o-left '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-dot-circle-o'
  }, void 0, ' fa-dot-circle-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-wheelchair'
  }, void 0, ' fa-wheelchair '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-vimeo-square'
  }, void 0, ' fa-vimeo-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-turkish-lira'
  }, void 0, ' fa-turkish-lira '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-try'
  }, void 0, ' fa-try '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-plus-square-o'
  }, void 0, ' fa-plus-square-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-space-shuttle'
  }, void 0, ' fa-space-shuttle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-slack'
  }, void 0, ' fa-slack '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-envelope-square'
  }, void 0, ' fa-envelope-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-wordpress'
  }, void 0, ' fa-wordpress '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-openid'
  }, void 0, ' fa-openid '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-institution'
  }, void 0, ' fa-institution '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bank'
  }, void 0, ' fa-bank '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-university'
  }, void 0, ' fa-university '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-mortar-board'
  }, void 0, ' fa-mortar-board '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-graduation-cap'
  }, void 0, ' fa-graduation-cap '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-yahoo'
  }, void 0, ' fa-yahoo '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-google'
  }, void 0, ' fa-google '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-reddit'
  }, void 0, ' fa-reddit '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-reddit-square'
  }, void 0, ' fa-reddit-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stumbleupon-circle'
  }, void 0, ' fa-stumbleupon-circle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-stumbleupon'
  }, void 0, ' fa-stumbleupon '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-delicious'
  }, void 0, ' fa-delicious '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-digg'
  }, void 0, ' fa-digg '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pied-piper-square'
  }, void 0, ' fa-pied-piper-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pied-piper'
  }, void 0, ' fa-pied-piper '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-pied-piper-alt'
  }, void 0, ' fa-pied-piper-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-drupal'
  }, void 0, ' fa-drupal '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-joomla'
  }, void 0, ' fa-joomla '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-language'
  }, void 0, ' fa-language '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-fax'
  }, void 0, ' fa-fax '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-building'
  }, void 0, ' fa-building '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-child'
  }, void 0, ' fa-child '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paw'
  }, void 0, ' fa-paw '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-spoon'
  }, void 0, ' fa-spoon '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cube'
  }, void 0, ' fa-cube '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cubes'
  }, void 0, ' fa-cubes '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-behance'
  }, void 0, ' fa-behance '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-behance-square'
  }, void 0, ' fa-behance-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-steam'
  }, void 0, ' fa-steam '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-steam-square'
  }, void 0, ' fa-steam-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-recycle'
  }, void 0, ' fa-recycle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-automobile'
  }, void 0, ' fa-automobile '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-car'
  }, void 0, ' fa-car '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-cab'
  }, void 0, ' fa-cab '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-taxi'
  }, void 0, ' fa-taxi '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tree'
  }, void 0, ' fa-tree '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-spotify'
  }, void 0, ' fa-spotify '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-deviantart'
  }, void 0, ' fa-deviantart '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-soundcloud'
  }, void 0, ' fa-soundcloud '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-database'
  }, void 0, ' fa-database '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-pdf-o'
  }, void 0, ' fa-file-pdf-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-word-o'
  }, void 0, ' fa-file-word-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-excel-o'
  }, void 0, ' fa-file-excel-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-powerpoint-o'
  }, void 0, ' fa-file-powerpoint-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-photo-o'
  }, void 0, ' fa-file-photo-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-picture-o'
  }, void 0, ' fa-file-picture-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-image-o'
  }, void 0, ' fa-file-image-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-zip-o'
  }, void 0, ' fa-file-zip-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-archive-o'
  }, void 0, ' fa-file-archive-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-sound-o'
  }, void 0, ' fa-file-sound-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-audio-o'
  }, void 0, ' fa-file-audio-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-movie-o'
  }, void 0, ' fa-file-movie-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-video-o'
  }, void 0, ' fa-file-video-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-file-code-o'
  }, void 0, ' fa-file-code-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-vine'
  }, void 0, ' fa-vine '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-codepen'
  }, void 0, ' fa-codepen '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-jsfiddle'
  }, void 0, ' fa-jsfiddle '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-life-bouy'
  }, void 0, ' fa-life-bouy '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-life-saver'
  }, void 0, ' fa-life-saver '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-support'
  }, void 0, ' fa-support '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-life-ring'
  }, void 0, ' fa-life-ring '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-circle-o-notch'
  }, void 0, ' fa-circle-o-notch '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ra'
  }, void 0, ' fa-ra '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-rebel'
  }, void 0, ' fa-rebel '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-ge'
  }, void 0, ' fa-ge '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-empire'
  }, void 0, ' fa-empire '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-git-square'
  }, void 0, ' fa-git-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-git'
  }, void 0, ' fa-git '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-hacker-news'
  }, void 0, ' fa-hacker-news '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-tencent-weibo'
  }, void 0, ' fa-tencent-weibo '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-qq'
  }, void 0, ' fa-qq '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-wechat'
  }, void 0, ' fa-wechat '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-weixin'
  }, void 0, ' fa-weixin '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-send'
  }, void 0, ' fa-send '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paper-plane'
  }, void 0, ' fa-paper-plane '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-send-o'
  }, void 0, ' fa-send-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paper-plane-o'
  }, void 0, ' fa-paper-plane-o '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-history'
  }, void 0, ' fa-history '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-circle-thin'
  }, void 0, ' fa-circle-thin '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-header'
  }, void 0, ' fa-header '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-paragraph'
  }, void 0, ' fa-paragraph '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-sliders'
  }, void 0, ' fa-sliders '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-share-alt'
  }, void 0, ' fa-share-alt '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-share-alt-square'
  }, void 0, ' fa-share-alt-square '), (0, _jsx3.default)('br', {}), ' ', (0, _jsx3.default)('p', {
    className: 'fa fa-bomb'
  }, void 0, ' fa-bomb '), (0, _jsx3.default)('br', {}), ' ')))));
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  var Icons = function (_Component) {
    (0, _inherits3.default)(Icons, _Component);
  
    function Icons() {
      (0, _classCallCheck3.default)(this, Icons);
      return (0, _possibleConstructorReturn3.default)(this, (Icons.__proto__ || (0, _getPrototypeOf2.default)(Icons)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Icons, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return Icons;
  }(_react.Component);
  
  exports.default = Icons;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _MorrisjsCharts = __webpack_require__(125);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_MorrisjsCharts2.default, {});
  
  exports.default = {
  
    path: '/morrisjscharts',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _MorrisjsCharts = __webpack_require__(126);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'MorrisjsCharts';
  
  var _ref = (0, _jsx3.default)(_MorrisjsCharts2.default, {});
  
  function displayMorrisjsCharts(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayMorrisjsCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayMorrisjsCharts;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Morris.js Charts'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Area Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Bar Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Line Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Donut Chart Example')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, 'Panel contents'))), (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Morris.js Usage')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, ', (0, _jsx3.default)('a', {
    target: '_blank',
    href: 'http://morrisjs.github.io/morris.js/'
  }, void 0, 'http://morrisjs.github.io/morris.js/'), '.'), (0, _jsx3.default)(_Button2.default, {
    bsSize: 'large',
    block: true,
    href: 'http://morrisjs.github.io/morris.js/'
  }, void 0, 'View Morris.js Documentation'))))));
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  var MorrisjsCharts = function (_Component) {
    (0, _inherits3.default)(MorrisjsCharts, _Component);
  
    function MorrisjsCharts() {
      (0, _classCallCheck3.default)(this, MorrisjsCharts);
      return (0, _possibleConstructorReturn3.default)(this, (MorrisjsCharts.__proto__ || (0, _getPrototypeOf2.default)(MorrisjsCharts)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(MorrisjsCharts, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return MorrisjsCharts;
  }(_react.Component);
  
  exports.default = MorrisjsCharts;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notification = __webpack_require__(128);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Notification2.default, {});
  
  exports.default = {
  
    path: '/notification',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notification = __webpack_require__(129);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Notification';
  // import Button from 'react-bootstrap/lib/Button';
  // import Panel from 'react-bootstrap/lib/Panel';
  // import PageHeader from 'react-bootstrap/lib/PageHeader';
  
  
  var _ref = (0, _jsx3.default)(_Notification2.default, {});
  
  function displayNotification(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayNotification.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayNotification;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Alert = __webpack_require__(130);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _OverlayTrigger = __webpack_require__(131);
  
  var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
  
  var _Tooltip = __webpack_require__(132);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Popover = __webpack_require__(133);
  
  var _Popover2 = _interopRequireDefault(_Popover);
  
  var _Modal = __webpack_require__(134);
  
  var _Modal2 = _interopRequireDefault(_Modal);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Notifications')));
  
  var _ref2 = (0, _jsx3.default)('span', {}, void 0, 'Alert Styles');
  
  var _ref3 = (0, _jsx3.default)('span', {}, void 0, 'Dismissable Alerts');
  
  var _ref4 = (0, _jsx3.default)('span', {}, void 0, 'Modals');
  
  var _ref5 = (0, _jsx3.default)(_Modal.Header, {
    closeButton: true
  }, void 0, (0, _jsx3.default)(_Modal.Title, {}, void 0, 'Modal Title'));
  
  var _ref6 = (0, _jsx3.default)(_Modal.Body, {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
  
  var _ref7 = (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary'
  }, void 0, ' Save changes');
  
  var _ref8 = (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Tooltips and Popovers')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Tooltip Demo'), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_OverlayTrigger2.default, {
    placement: 'left',
    overlay: (0, _jsx3.default)(_Tooltip2.default, {
      id: 'tooltip1'
    }, void 0, 'Check this out!')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Tooltip on left')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    placement: 'top',
    overlay: (0, _jsx3.default)(_Tooltip2.default, {
      id: 'tooltip2'
    }, void 0, 'Check this out!')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Tooltip on top')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    placement: 'bottom',
    overlay: (0, _jsx3.default)(_Tooltip2.default, {
      id: 'tooltip3'
    }, void 0, 'Check this out!')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Tooltip on bottom')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    placement: 'right',
    overlay: (0, _jsx3.default)(_Tooltip2.default, {
      id: 'tooltip4'
    }, void 0, 'Check this out!')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Tooltip on right'))), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Clickable Popover Demo'), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_OverlayTrigger2.default, {
    trigger: 'click',
    placement: 'left',
    overlay: (0, _jsx3.default)(_Popover2.default, {
      id: 'popover1',
      title: 'Popover left'
    }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Hello!'), ' Check this info.')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Popover on left')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    trigger: 'click',
    placement: 'top',
    overlay: (0, _jsx3.default)(_Popover2.default, {
      id: 'popover2',
      title: 'Popover top'
    }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Hello!'), ' Check this info.')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Popover on top')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    trigger: 'click',
    placement: 'bottom',
    overlay: (0, _jsx3.default)(_Popover2.default, {
      id: 'popover3',
      title: 'Popover bottom'
    }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Hello!'), ' Check this info.')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Popover on bottom')), (0, _jsx3.default)(_OverlayTrigger2.default, {
    trigger: 'click',
    placement: 'right',
    overlay: (0, _jsx3.default)(_Popover2.default, {
      id: 'popover4',
      title: 'Popover right'
    }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Hello!'), ' Check this info.')
  }, void 0, (0, _jsx3.default)(_Button2.default, {}, void 0, 'Popover on right')))));
  
  var Notification = function (_Component) {
    (0, _inherits3.default)(Notification, _Component);
  
    function Notification(props) {
      (0, _classCallCheck3.default)(this, Notification);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call(this, props));
  
      _this.state = {
        alertVisibleA: true,
        alertVisibleB: true,
        alertVisibleC: true,
        alertVisibleD: true,
        showModal: false
      };
      return _this;
    }
  
    (0, _createClass3.default)(Notification, [{
      key: 'close',
      value: function close() {
        this.setState({ showModal: false });
      }
    }, {
      key: 'open',
      value: function open() {
        this.setState({ showModal: true });
      }
    }, {
      key: 'handleAlertDismiss',
      value: function handleAlertDismiss(option) {
        switch (option) {
          case 'A':
            this.setState({ alertVisibleA: false });
            break;
          case 'B':
            this.setState({ alertVisibleB: false });
            break;
          case 'C':
            this.setState({ alertVisibleC: false });
            break;
          case 'D':
            this.setState({ alertVisibleD: false });
            break;
          default:
            this.setState({
              alertVisibleA: false,
              alertVisibleB: false,
              alertVisibleC: false,
              alertVisibleD: false
            });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-lg-6'
        }, void 0, (0, _jsx3.default)(_Panel2.default, {
          header: _ref2
        }, void 0, (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'success'
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.'), (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'info'
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.'), (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'warning'
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.'), (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'danger'
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.'))), (0, _jsx3.default)('div', {
          className: 'col-lg-6'
        }, void 0, (0, _jsx3.default)(_Panel2.default, {
          header: _ref3
        }, void 0, this.state.alertVisibleA ? (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'success',
          onDismiss: function onDismiss() {
            return _this2.handleAlertDismiss('A');
          }
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.') : null, this.state.alertVisibleB ? (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'info',
          onDismiss: function onDismiss() {
            return _this2.handleAlertDismiss('B');
          }
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.') : null, this.state.alertVisibleC ? (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'warning',
          onDismiss: function onDismiss() {
            return _this2.handleAlertDismiss('C');
          }
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.') : null, this.state.alertVisibleD ? (0, _jsx3.default)(_Alert2.default, {
          bsStyle: 'danger',
          onDismiss: function onDismiss() {
            return _this2.handleAlertDismiss('D');
          }
        }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', (0, _jsx3.default)('a', {
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
          },
          className: 'alert-link'
        }, void 0, 'Alert Link'), '.') : null))), (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-lg-6'
        }, void 0, (0, _jsx3.default)(_Panel2.default, {
          header: _ref4
        }, void 0, (0, _jsx3.default)(_Button2.default, {
          bsStyle: 'primary',
          bsSize: 'large',
          onClick: this.open
        }, void 0, 'Launch Demo Modal'), (0, _jsx3.default)(_Modal2.default, {
          show: this.state.showModal,
          onHide: this.close
        }, void 0, _ref5, _ref6, (0, _jsx3.default)(_Modal.Footer, {}, void 0, (0, _jsx3.default)(_Button2.default, {
          onClick: this.close
        }, void 0, 'Close'), _ref7)))), _ref8));
      }
    }]);
    return Notification;
  }(_react.Component);
  
  exports.default = Notification;

/***/ },
/* 130 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Alert");

/***/ },
/* 131 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/OverlayTrigger");

/***/ },
/* 132 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Tooltip");

/***/ },
/* 133 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Popover");

/***/ },
/* 134 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Modal");

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PanelWells = __webpack_require__(136);
  
  var _PanelWells2 = _interopRequireDefault(_PanelWells);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_PanelWells2.default, {});
  
  exports.default = {
  
    path: '/panelwells',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PanelWells = __webpack_require__(137);
  
  var _PanelWells2 = _interopRequireDefault(_PanelWells);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader} from 'react-bootstrap';
  
  // import Button from 'react-bootstrap/lib/Button';
  // import Panel from 'react-bootstrap/lib/Panel';
  // import PageHeader from 'react-bootstrap/lib/PageHeader';
  // import Accordion from 'react-bootstrap/lib/Accordion';
  // import Well from 'react-bootstrap/lib/Well';
  // import Jumbotron from 'react-bootstrap/lib/Jumbotron';
  // import Tabs from 'react-bootstrap/lib/Tabs';
  // import Tab from 'react-bootstrap/lib/Tab';
  
  var title = 'PanelWells';
  
  var _ref = (0, _jsx3.default)(_PanelWells2.default, {});
  
  function displayPanelWells(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayPanelWells.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayPanelWells;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(65);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.PageHeader, {}, void 0, 'Panels and Wells')), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Default Panel'),
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt . est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Primary Panel'),
    bsStyle: 'primary',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Success Panel'),
    bsStyle: 'success',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Info Panel'),
    bsStyle: 'info',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Warning Panel'),
    bsStyle: 'warning',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Danger Panel'),
    bsStyle: 'danger',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Green Panel'),
    bsStyle: 'success',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Yellow Panel'),
    bsStyle: 'warning',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Red Panel'),
    bsStyle: 'danger',
    footer: (0, _jsx3.default)('span', {}, void 0, 'Panel Footer')
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Collapsible Accordion Panel Group')
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Accordion, {}, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('h4', {
      className: 'panel-title'
    }, void 0, 'Collapsible Group Item #1'),
    eventKey: '1'
  }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('h4', {
      className: 'panel-title'
    }, void 0, 'Collapsible Group Item #2'),
    eventKey: '2'
  }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('h4', {
      className: 'panel-title'
    }, void 0, 'Collapsible Group Item #3'),
    eventKey: '3'
  }, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Basic Tabs')
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Tabs, {
    id: 'tabs1',
    defaultActiveKey: 1
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 1,
    title: 'Home'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Home Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 2,
    title: 'Profile'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Profile Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 3,
    title: 'Messages'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Messages Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 4,
    title: 'Settings'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Settings Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))))), (0, _jsx3.default)('div', {
    className: 'col-lg-6'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Panel, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Pill Tabs')
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Tabs, {
    id: 'tabs2',
    bsStyle: 'pills',
    defaultActiveKey: 1
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 1,
    title: 'Home'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Home Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 2,
    title: 'Profile'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Profile Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 3,
    title: 'Messages'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Messages Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')), (0, _jsx3.default)(_reactBootstrap.Tab, {
    eventKey: 4,
    title: 'Settings'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Settings Tab'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Well, {}, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Normal Well'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Well, {
    bsSize: 'large'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Large Well'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Well, {
    bsSize: 'small'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Small Well'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.')))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.Jumbotron, {}, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Jumbotron'), (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactBootstrap.Button, {
    bsStyle: 'primary',
    bsSize: 'large'
  }, void 0, 'Learn more'))))));
  // import classNames from 'classnames';
  // import Button from 'react-bootstrap/lib/Button';
  // import Panel from 'react-bootstrap/lib/Panel';
  // // import Pagination from 'react-bootstrap/lib/Pagination';
  // import PageHeader from 'react-bootstrap/lib/PageHeader';
  
  
  var PanelWells = function (_Component) {
    (0, _inherits3.default)(PanelWells, _Component);
  
    function PanelWells() {
      (0, _classCallCheck3.default)(this, PanelWells);
      return (0, _possibleConstructorReturn3.default)(this, (PanelWells.__proto__ || (0, _getPrototypeOf2.default)(PanelWells)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(PanelWells, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return PanelWells;
  }(_react.Component);
  
  exports.default = PanelWells;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Typography = __webpack_require__(139);
  
  var _Typography2 = _interopRequireDefault(_Typography);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Typography2.default, {});
  
  exports.default = {
  
    path: '/typography',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Typography = __webpack_require__(140);
  
  var _Typography2 = _interopRequireDefault(_Typography);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader} from 'react-bootstrap';
  // import Button from 'react-bootstrap/lib/Button';
  // import Panel from 'react-bootstrap/lib/Panel';
  // import PageHeader from 'react-bootstrap/lib/PageHeader';
  // import Accordion from 'react-bootstrap/lib/Accordion';
  // import Well from 'react-bootstrap/lib/Well';
  // import Jumbotron from 'react-bootstrap/lib/Jumbotron';
  // import Tabs from 'react-bootstrap/lib/Tabs';
  // import Tab from 'react-bootstrap/lib/Tab';
  
  var title = 'Typography';
  
  var _ref = (0, _jsx3.default)(_Typography2.default, {});
  
  function displayTypography(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayTypography.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayTypography;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(76);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(95);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(96);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(104);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_PageHeader2.default, {}, void 0, 'Typography'))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Headings')
  }, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Heading 1', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')), (0, _jsx3.default)('h2', {}, void 0, 'Heading 2', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')), (0, _jsx3.default)('h3', {}, void 0, 'Heading 3', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')), (0, _jsx3.default)('h4', {}, void 0, 'Heading 4', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')), (0, _jsx3.default)('h5', {}, void 0, 'Heading 5', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')), (0, _jsx3.default)('h6', {}, void 0, 'Heading 6', (0, _jsx3.default)('small', {}, void 0, 'Sub-heading')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Paragraphs')
  }, void 0, (0, _jsx3.default)('p', {
    className: 'lead'
  }, void 0, 'This is an example of lead body copy.'), (0, _jsx3.default)('p', {}, void 0, 'This is an example of standard paragraph text. This is an example of ', (0, _jsx3.default)('a', {
    href: 'javascript:void(0)'
  }, void 0, 'link anchor text'), ' within body copy.'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('small', {}, void 0, 'This is an example of small, fine print text.')), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, 'This is an example of strong, bold text.')), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('em', {}, void 0, 'This is an example of emphasized, italic text.')), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Alignment Helpers'), (0, _jsx3.default)('p', {
    className: 'text-left'
  }, void 0, 'Left aligned text.'), (0, _jsx3.default)('p', {
    className: 'text-center'
  }, void 0, 'Center aligned text.'), (0, _jsx3.default)('p', {
    className: 'text-right'
  }, void 0, 'Right aligned text.'))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Emphasis Classes')
  }, void 0, (0, _jsx3.default)('p', {
    className: 'text-muted'
  }, void 0, 'This is an example of muted text.'), (0, _jsx3.default)('p', {
    className: 'text-primary'
  }, void 0, 'This is an example of primary text.'), (0, _jsx3.default)('p', {
    className: 'text-success'
  }, void 0, 'This is an example of success text.'), (0, _jsx3.default)('p', {
    className: 'text-info'
  }, void 0, 'This is an example of info text.'), (0, _jsx3.default)('p', {
    className: 'text-warning'
  }, void 0, 'This is an example of warning text.'), (0, _jsx3.default)('p', {
    className: 'text-danger'
  }, void 0, 'This is an example of danger text.')))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Abbreviations')
  }, void 0, (0, _jsx3.default)('p', {}, void 0, 'The abbreviation of the word attribute is', (0, _jsx3.default)('abbr', {
    title: 'attribute'
  }, void 0, 'attr'), '.'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('abbr', {
    title: 'HyperText Markup Language',
    className: 'initialism'
  }, void 0, 'HTML'), 'is an abbreviation for a programming language.'), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('h4', {}, void 0, 'Addresses'), (0, _jsx3.default)('address', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Twitter, Inc.'), (0, _jsx3.default)('br', {}), '795 Folsom Ave, Suite 600', (0, _jsx3.default)('br', {}), 'San Francisco, CA 94107', (0, _jsx3.default)('br', {}), (0, _jsx3.default)('abbr', {
    title: 'Phone'
  }, void 0, 'P:'), '(123) 456-7890'), (0, _jsx3.default)('address', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Full Name'), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('a', {
    href: 'mailto:#'
  }, void 0, 'first.last@example.com')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Blockquotes')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Default Blockquote'), (0, _jsx3.default)('blockquote', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.')), (0, _jsx3.default)('h4', {}, void 0, 'Blockquote with Citation'), (0, _jsx3.default)('blockquote', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'), (0, _jsx3.default)('small', {}, void 0, 'Someone famous in', (0, _jsx3.default)('cite', {
    title: 'Source Title'
  }, void 0, 'Source Title'))), (0, _jsx3.default)('h4', {}, void 0, 'Right Aligned Blockquote'), (0, _jsx3.default)('blockquote', {
    className: 'pull-right'
  }, void 0, (0, _jsx3.default)('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Lists')
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Unordered List'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'))), (0, _jsx3.default)('li', {}, void 0, 'List Item')), (0, _jsx3.default)('h4', {}, void 0, 'Ordered List'), (0, _jsx3.default)('ol', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item')), (0, _jsx3.default)('h4', {}, void 0, 'Unstyled List'), (0, _jsx3.default)('ul', {
    className: 'list-unstyled'
  }, void 0, (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item')), (0, _jsx3.default)('h4', {}, void 0, 'Inline List'), (0, _jsx3.default)('ul', {
    className: 'list-inline'
  }, void 0, (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'), (0, _jsx3.default)('li', {}, void 0, 'List Item'))))), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Description Lists')
  }, void 0, (0, _jsx3.default)('dl', {}, void 0, (0, _jsx3.default)('dt', {}, void 0, 'Standard Description List'), (0, _jsx3.default)('dd', {}, void 0, 'Description Text'), (0, _jsx3.default)('dt', {}, void 0, 'Description List Title'), (0, _jsx3.default)('dd', {}, void 0, 'Description List Text')), (0, _jsx3.default)('dl', {
    className: 'dl-horizontal'
  }, void 0, (0, _jsx3.default)('dt', {}, void 0, 'Horizontal Description List'), (0, _jsx3.default)('dd', {}, void 0, 'Description Text'), (0, _jsx3.default)('dt', {}, void 0, 'Description List Title'), (0, _jsx3.default)('dd', {}, void 0, 'Description List Text')))), (0, _jsx3.default)('div', {
    className: 'col-lg-4'
  }, void 0, (0, _jsx3.default)(_Panel2.default, {
    header: (0, _jsx3.default)('span', {}, void 0, 'Code')
  }, void 0, (0, _jsx3.default)('p', {}, void 0, 'This is an example of an inline code element within body copy. Wrap inline code within a', (0, _jsx3.default)('code', {}, void 0, '<code>...</code>'), 'tag.'), (0, _jsx3.default)('pre', {}, void 0, 'This is an example of preformatted text.')))));
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  var Typography = function (_Component) {
    (0, _inherits3.default)(Typography, _Component);
  
    function Typography() {
      (0, _classCallCheck3.default)(this, Typography);
      return (0, _possibleConstructorReturn3.default)(this, (Typography.__proto__ || (0, _getPrototypeOf2.default)(Typography)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Typography, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return Typography;
  }(_react.Component);
  
  exports.default = Typography;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _blank = __webpack_require__(142);
  
  var _blank2 = _interopRequireDefault(_blank);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_blank2.default, {});
  
  exports.default = {
    path: '/blank',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(65);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Blank';
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-lg-12'
  }, void 0, (0, _jsx3.default)(_reactBootstrap.PageHeader, {}, void 0, 'Blank'))));
  
  function displayBlank(props, context) {
    context.setTitle(title);
    return _ref;
  }
  
  displayBlank.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = displayBlank;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Register = __webpack_require__(144);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Register2.default, {});
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return _ref;
    }
  };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Register = __webpack_require__(145);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'New User Registration'; /**
                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                        *
                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                        *
                                        * This source code is licensed under the MIT license found in the
                                        * LICENSE.txt file in the root directory of this source tree.
                                        */
  
  var _ref = (0, _jsx3.default)('h1', {}, void 0, title);
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Register(props, context) {
    context.setTitle(title);
    return (0, _jsx3.default)('div', {
      className: _Register2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Register2.default.container
    }, void 0, _ref, _ref2));
  }
  
  Register.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(146);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, "._1hu0{padding-left:20px;padding-right:20px}.OjhI{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1hu0",
  	"container": "OjhI"
  };

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(27);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(5);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Content = __webpack_require__(148);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _fetch = __webpack_require__(51);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '*',
  
    action: function action(_ref) {
      var _this = this;
  
      var path = _ref.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref2, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{content(path:"' + path + '"){path,title,content,component}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 5;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 5:
                _context.next = 7;
                return resp.json();
  
              case 7:
                _ref2 = _context.sent;
                data = _ref2.data;
  
                if (!(!data || !data.content)) {
                  _context.next = 11;
                  break;
                }
  
                return _context.abrupt('return', undefined);
  
              case 11:
                return _context.abrupt('return', _react2.default.createElement(_Content2.default, data.content));
  
              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(56);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(57);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(58);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(59);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(60);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(21);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Content = __webpack_require__(149);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Content = function (_Component) {
    (0, _inherits3.default)(Content, _Component);
  
    function Content() {
      (0, _classCallCheck3.default)(this, Content);
      return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Content, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(this.props.title);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.context.setTitle(nextProps.title);
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: _Content2.default.root
        }, void 0, (0, _jsx3.default)('div', {
          className: _Content2.default.container
        }, void 0, this.props.path === '/' ? null : (0, _jsx3.default)('h1', {}, void 0, this.props.title), (0, _jsx3.default)('div', {
          dangerouslySetInnerHTML: { __html: this.props.content || '' }
        })));
      }
    }]);
    return Content;
  }(_react.Component); /**
                        * React Starter Kit (https://www.reactstarterkit.com/)
                        *
                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                        *
                        * This source code is licensed under the MIT license found in the
                        * LICENSE.txt file in the root directory of this source tree.
                        */
  
  Content.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Content2.default)(Content);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(150);
      var insertCss = __webpack_require__(25);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(24)();
  // imports
  
  
  // module
  exports.push([module.id, ".aWU5{padding-left:20px;padding-right:20px}._2OJN{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "aWU5",
  	"container": "_2OJN"
  };

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(1);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(55);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(20);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render;
      var context = _ref.context;
      var error = _ref.error;
  
      return render((0, _jsx3.default)(_App2.default, {
        context: context,
        error: error
      }, void 0, (0, _jsx3.default)(_ErrorPage2.default, {
        error: error
      })), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 152 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map