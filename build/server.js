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
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(3);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(5);
  
  var _path = __webpack_require__(6);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(7);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(8);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(9);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(10);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(11);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(12);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(14);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(15);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(16);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _Html = __webpack_require__(17);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = __webpack_require__(21);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(29);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(32);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(39);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(53);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(151);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(18);
  
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
      pretty: ("development") !== 'production'
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
  
                            console.log('inside render of UniversalRouter', component);
                            css = new _set2.default();
                            statusCode = status;
                            data.children = _server2.default.renderToString(component);
                            data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                            return true;
                          }
                        });
  
                      case 5:
  
                        console.log('outside render func of UniversalRouter with statusCode', statusCode);
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
                        res.status(statusCode);
                        res.send('<!doctype html>' + html);
  
                      case 9:
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
  
              // console.log('some error occured', err);
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
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err }))
    ));
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

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(18);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title;
    var description = _ref.description;
    var style = _ref.style;
    var script = _ref.script;
    var children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap-social.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/sb-admin.css' }),
        _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style } })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children } }),
        script && _react2.default.createElement('script', { src: script }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  }
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string.isRequired,
    script: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(21);
  
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
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(22);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(25);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(26);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(27);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(28);
  
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
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(30);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(31);
  
  var _models = __webpack_require__(32);
  
  var _config = __webpack_require__(18);
  
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
/* 30 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(33);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(35);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(36);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(37);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(38);
  
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(18);
  
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
/* 34 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var _me = __webpack_require__(41);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(43);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(49);
  
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
/* 40 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(42);
  
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(28);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(25);
  
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
  
  var _fs = __webpack_require__(44);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(6);
  
  var _bluebird = __webpack_require__(45);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(46);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(47);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(40);
  
  var _ContentType = __webpack_require__(48);
  
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
/* 44 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("markdown-it");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var _fetch = __webpack_require__(50);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(52);
  
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(45);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(51);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(18);
  
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
/* 51 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(54);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(83);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _contact = __webpack_require__(88);
  
  var _contact2 = _interopRequireDefault(_contact);
  
  var _login = __webpack_require__(92);
  
  var _login2 = _interopRequireDefault(_login);
  
  var _Tables = __webpack_require__(98);
  
  var _Tables2 = _interopRequireDefault(_Tables);
  
  var _Buttons = __webpack_require__(104);
  
  var _Buttons2 = _interopRequireDefault(_Buttons);
  
  var _FlotCharts = __webpack_require__(107);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  var _Forms = __webpack_require__(110);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  var _Grid = __webpack_require__(116);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  var _Icons = __webpack_require__(119);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  var _MorrisjsCharts = __webpack_require__(122);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  var _Notification = __webpack_require__(125);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  var _PanelWells = __webpack_require__(133);
  
  var _PanelWells2 = _interopRequireDefault(_PanelWells);
  
  var _Typography = __webpack_require__(137);
  
  var _Typography2 = _interopRequireDefault(_Typography);
  
  var _Blank = __webpack_require__(140);
  
  var _Blank2 = _interopRequireDefault(_Blank);
  
  var _register = __webpack_require__(142);
  
  var _register2 = _interopRequireDefault(_register);
  
  var _content = __webpack_require__(146);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _error = __webpack_require__(150);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _Header = __webpack_require__(63);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = [{
    path: '/login',
    children: [_login2.default],
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
                console.log('inside login');
                _context.next = 3;
                return next();
  
              case 3:
                component = _context.sent;
  
                console.log('inside login with component', component);
  
                if (!(component === undefined)) {
                  _context.next = 7;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 7:
                return _context.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }, {
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default, _contact2.default, _Tables2.default, _Buttons2.default, _FlotCharts2.default, _Forms2.default, _Grid2.default, _Icons2.default, _MorrisjsCharts2.default, _Notification2.default, _PanelWells2.default, _Typography2.default, _register2.default, _Blank2.default,
  
    // place new routes before...
    _content2.default, _error2.default],
  
    action: function action(_ref2) {
      var _this2 = this;
  
      var next = _ref2.next;
      var render = _ref2.render;
      var context = _ref2.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var component;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next();
  
              case 2:
                component = _context2.sent;
  
                if (!(component === undefined)) {
                  _context2.next = 5;
                  break;
                }
  
                return _context2.abrupt('return', component);
  
              case 5:
                return _context2.abrupt('return', render(_react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Header2.default, null),
                  _react2.default.createElement(
                    'div',
                    { id: 'page-wrapper', className: 'page-wrapper' },
                    _react2.default.createElement(
                      _App2.default,
                      { context: context },
                      component
                    )
                  )
                )));
  
              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }, {
    path: '/error',
    children: [_error2.default],
    action: function action(_ref3) {
      var _this3 = this;
  
      var next = _ref3.next;
      var render = _ref3.render;
      var context = _ref3.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var component;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return next();
  
              case 2:
                component = _context3.sent;
  
                if (!(component === undefined)) {
                  _context3.next = 5;
                  break;
                }
  
                return _context3.abrupt('return', component);
  
              case 5:
                return _context3.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(60);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(61);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(63);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(77);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(80);
  
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
        // console.log('\n********\n', this.props, '\n********12334\n');
        return this.props.children;
      }
    }]);
    return App;
  }(_react.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(62);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./App.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./App.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/App/App.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;GAIG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;GAIG;;AAEH;;;;;;;;;;;UAWU,OAAO;EACf,eAAe;CAChB;;AAED;;GAEG;;AAEH;;;;EAIE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,cAAc;CACf;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AD1ZD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"App.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _Link = __webpack_require__(65);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navbar = __webpack_require__(72);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _history = __webpack_require__(68);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _jquery = __webpack_require__(73);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _Sidebar = __webpack_require__(74);
  
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
  
  var logo = __webpack_require__(76);
  
  function Header() {
    return _react2.default.createElement(
      'div',
      { id: 'wrapper', className: 'content' },
      _react2.default.createElement(
        _Navbar2.default,
        { fluid: true, style: { margin: 0 } },
        _react2.default.createElement(
          _Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: logo, alt: 'Start React', title: 'Start React' }),
            _react2.default.createElement(
              'span',
              null,
              ' SB Admin React - '
            ),
            _react2.default.createElement(
              'a',
              { href: 'http://startreact.com/', title: 'Start React', rel: 'home' },
              'StartReact.com'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle', onClick: function onClick() {
                  toggleMenu();
                }, style: { position: 'absolute', right: 0, top: 0 } },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-top-links navbar-right' },
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' })
              ), id: 'navDropdown1' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'John Smith'
                ),
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted' },
                  ' ',
                  _react2.default.createElement(
                    'em',
                    null,
                    'Yesterday'
                  ),
                  ' '
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                null,
                ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'John Smith'
                ),
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted' },
                  ' ',
                  _react2.default.createElement(
                    'em',
                    null,
                    'Yesterday'
                  ),
                  ' '
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'John Smith'
                ),
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted' },
                  ' ',
                  _react2.default.createElement(
                    'em',
                    null,
                    'Yesterday'
                  ),
                  ' '
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4' },
              _react2.default.createElement(
                'strong',
                null,
                'Read All Messages'
              ),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-angle-right' })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' '
              ), id: 'navDropdown2222' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1', style: { width: 300 } },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Task 1'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: 'pull-right text-muted' },
                    '40% Complete'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'success', now: 40 })
                )
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Task 2'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: 'pull-right text-muted' },
                    '20% Complete'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'info', now: 20 })
                )
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Task 3'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: 'pull-right text-muted' },
                    '60% Complete'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'warning', now: 60 })
                )
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Task 4'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: 'pull-right text-muted' },
                    '80% Complete'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'danger', now: 80 })
                )
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '5' },
              _react2.default.createElement(
                'strong',
                null,
                'See All Tasks'
              ),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-angle-right' })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement('i', { className: 'fa fa-bell fa-fw' }), id: 'navDropdown3' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1', style: { width: 300 } },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-comment fa-fw' }),
                ' New Comment ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  '4 minutes ago'
                ),
                ' '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-twitter fa-fw' }),
                ' 3 New Followers ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  '12 minutes ago'
                ),
                ' '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' }),
                ' Message Sent ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  '4 minutes ago'
                ),
                ' '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' New Task ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  '4 minutes ago'
                ),
                ' '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '5' },
              _react2.default.createElement(
                'div',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-upload fa-fw' }),
                ' Server Rebooted ',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  '4 minutes ago'
                ),
                ' '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '6' },
              _react2.default.createElement(
                'strong',
                null,
                'See All Alerts'
              ),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-angle-right' })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }), id: 'navDropdown4' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '1' },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }),
                ' User Profile '
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '2' },
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-gear fa-fw' }),
                ' Settings '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3', href: 'http://www.strapui.com' },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-eye fa-fw' }),
                ' Premium React Themes '
              )
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4', onClick: function onClick(event) {
                  _history2.default.push('/login');
                } },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-sign-out fa-fw' }),
                ' Logout '
              )
            )
          )
        ),
        _react2.default.createElement(_Sidebar2.default, null)
      )
    );
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
/* 64 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(66);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(67);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(68);
  
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
    } // eslint-disable-line react/prefer-stateless-function
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(69);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(70);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(71);
  
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
/* 69 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Navbar");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("jquery");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = __webpack_require__(65);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _history = __webpack_require__(68);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
  
        return _react2.default.createElement(
          'div',
          { className: 'navbar-default sidebar', style: { marginLeft: '-20px' }, role: 'navigation' },
          _react2.default.createElement(
            'div',
            { className: 'sidebar-nav navbar-collapse collapse' },
            _react2.default.createElement(
              'ul',
              { className: 'nav in', id: 'side-menu' },
              _react2.default.createElement(
                'li',
                { className: 'sidebar-search' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-group custom-search-form' },
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search...' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    _react2.default.createElement(
                      'button',
                      { className: 'btn btn-default', type: 'button' },
                      _react2.default.createElement('i', { className: 'fa fa-search' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-dashboard fa-fw' }),
                  '  Dashboard'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)({ active: !this.state.chartsElementsCollapsed }) },
                _react2.default.createElement(
                  'a',
                  {
                    href: '#',
                    onClick: function onClick() {
                      _this2.setState({ chartsElementsCollapsed: !_this2.state.chartsElementsCollapsed });
                      return false;
                    }
                  },
                  _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                  '  Charts',
                  _react2.default.createElement('span', { className: 'fa arrow' })
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    className: (0, _classnames2.default)({
                      'nav nav-second-level': true,
                      collapse: this.state.chartsElementsCollapsed
                    })
                  },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/flotcharts');
                        } },
                      'FlotCharts'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/morrisjscharts');
                        } },
                      'Morrisjs Charts'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/table');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-table fa-fw' }),
                  '  Tables'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/forms');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-table fa-fw' }),
                  '  Forms'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)({ active: !this.state.uiElementsCollapsed }) },
                _react2.default.createElement(
                  'a',
                  { href: '#', onClick: function onClick() {
                      _this2.setState({ uiElementsCollapsed: !_this2.state.uiElementsCollapsed });return false;
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-edit fa-fw' }),
                  ' UI Elements',
                  _react2.default.createElement('span', { className: 'fa arrow' })
                ),
                _react2.default.createElement(
                  'ul',
                  { className: (0, _classnames2.default)({ 'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed }) },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/panelwells');
                        } },
                      'Panels And Wells'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/button');
                        } },
                      'Buttons'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/notification');
                        } },
                      'Notification'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/typography');
                        } },
                      'Typography'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/icons');
                        } },
                      'Icons'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/grid');
                        } },
                      'Grid'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)({ active: !this.state.multiLevelDropdownCollapsed }) },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: function onClick(e) {
                      e.preventDefault();
                      _this2.setState({
                        multiLevelDropdownCollapsed: !_this2.state.multiLevelDropdownCollapsed
                      });
                      return false;
                    }
                  },
                  _react2.default.createElement('i', { className: 'fa fa-sitemap fa-fw' }),
                  ' Multi-Level Dropdown',
                  _react2.default.createElement('span', { className: 'fa arrow' })
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    className: (0, _classnames2.default)({
                      'nav nav-second-level': true, collapse: this.state.multiLevelDropdownCollapsed
                    })
                  },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Second Level Item'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Second Level Item'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: (0, _classnames2.default)({ active: !this.state.thirdLevelDropdownCollapsed }) },
                    _react2.default.createElement(
                      'a',
                      {
                        href: '',
                        onClick: function onClick(e) {
                          e.preventDefault();
                          _this2.setState({
                            thirdLevelDropdownCollapsed: !_this2.state.thirdLevelDropdownCollapsed
                          });
                          return false;
                        }
                      },
                      'Third Level',
                      _react2.default.createElement('span', { className: 'fa arrow' })
                    ),
                    _react2.default.createElement(
                      'ul',
                      {
                        className: (0, _classnames2.default)({
                          'nav nav-second-level': true,
                          collapse: this.state.thirdLevelDropdownCollapsed
                        })
                      },
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '', onClick: function onClick(e) {
                              e.preventDefault();
                            } },
                          'Third Level Item'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '', onClick: function onClick(e) {
                              e.preventDefault();
                            } },
                          'Third Level Item'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '', onClick: function onClick(e) {
                              e.preventDefault();
                            } },
                          'Third Level Item'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '', onClick: function onClick(e) {
                              e.preventDefault();
                            } },
                          'Third Level Item'
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)({ active: !this.state.samplePagesCollapsed }) },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: function onClick(e) {
                      e.preventDefault();
                      _this2.setState({
                        samplePagesCollapsed: !_this2.state.samplePagesCollapsed
                      });
                      return false;
                    }
                  },
                  _react2.default.createElement('i', { className: 'fa fa-files-o fa-fw' }),
                  ' Sample Pages',
                  _react2.default.createElement('span', { className: 'fa arrow' })
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    className: (0, _classnames2.default)({
                      'nav nav-second-level': true,
                      collapse: this.state.samplePagesCollapsed
                    })
                  },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/blank');
                        } },
                      'Blank'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();_history2.default.push('/login');
                        } },
                      'Login'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.strapui.com/' },
                  'Premium React Themes'
                )
              )
            )
          )
        );
      }
    }]);
    return Sidebar;
  }(_react.Component);
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
  
  
  exports.default = Sidebar;

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGODdGMTE3NDA3MjA2ODExODA4M0E3MjY3MTQwRTY5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTIzNTA3RUM5OEExMUU0QjRCOUUwQTIyNkYzQTlCNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTIzNTA3REM5OEExMUU0QjRCOUUwQTIyNkYzQTlCNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjExNzQwNzIwNjgxMTgwODNBNzI2NzE0MEU2OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjg3RjExNzQwNzIwNjgxMTgwODNBNzI2NzE0MEU2OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xbRMYAAAIAklEQVR42qyZC5BNdRzH//9zd++6a1msRwi7SCrPXmZkSjU1pSmPEnrNoEQhjGEKq2xEKZRJHiEkRNIMkple8kiZyGu9GcZrsezL7tp7/n1/Z7+X47rn3mu2/8xnz7nnnP///M7v/3v9/6uNMSo3qFTOFaV8Wnk2A3A7GYem/HkEFKiba5VABo+HMcgleaWNk/p+DG55d0yQP5vzjPo6x1aB6JL2gqQTcJbOK6fBcjAd7IshYH0wALxAQaWdxZgTMOa0Ukg6vL5PtUr2HsAKaasMf4Le9ASLQXWwAMwHl8FAsAtMBIEI/SwwFGSDUXxGxpkDysBUMFKeNTG+NOGqxFCm1p7TNQ6U4OsfwnGHq+9T4AMwEjwOerm0Wwcs4PWTYDD4BhTzfj2wBWOOwXsX8pnoGo3R7gW3gbkuIaWVgVXgbjANtAWbQHvQBPxBIZeClmCeS0hFwaaCyuCRWELEI+hdPG7wuC8vHwJ6g1SwGmyk040GPcEFj76beWyj4p36KK22y3mitfkUdCp/i5bHx+hzLuwdFdJovO1W0J/nQXp42/9r8HgEzeWxRpRnAnSU5mAYp7sW+BbcEqVfatg74hDUGC9O8Jge5ZkpoAOYyvPlYChoAuYC7dGvAY/HYgWoazaqPePTQR5bq+tvJ1GTEpJep739CboBHzgE9oMnwfvgY3CZhFoLZ0ytspXSFXamw+AU6AD6gvtBK2aoFIYXaTU5/ZHaO4wMknKPg92MIk8w3+yuiNcHGN+eB9X4ew7vFYGjFE5U8SXYw+v5dCZJFFVAY6ZPSZDHGLbuAa9wLNvSesr2QrPkYlCvu2LUpZAAkrEaoga4IxBZ0FRO5SB6snzxeQq6iNN4kFMuGWUlUvWrutx6fM50loebU0pSJxKDT8bQaiiuLWZ/SQj9wAhwMVGrZ9bn2l0h2AU8N5sh7rTk6E41LAhq3eD1z1IzkzilnzLEPMj7aUyR8jETHQ0aNaKKz6l8bodfyBRuB+twfSfS8uFqPlUVxzH4LSaUychwiBqW1h2aaOb36axAgr6MwmgkyAYDpEhKpN+4Bc1iNSTTPIZT9hbT5l7wCx2jHq/Xx8vHlRpzsE9tS92VrCfiXEJSO8nzmML2df1qdGYDqxAfUhgst9NEji2z04P2v5HHTKbqN0Ap+Jxp2+fY6Hlk7P2XzYAE7aS7XfKFIDuCScg0P8wiRIqRAyzxFPqqgqBJ10rLR23l8znQwmbMWsifJee/RpMpYJyd6RQ715pEhBliTmJmGLf38VKTc7xUj7T2FJlaWwvMGL+lc3Czk4eQigXISTpBGm2tUG74IUzzZL3aVkY+5F3ej9Sy6Hz9KOBij+ckXXeBTDsg3/Ct+XYLC1LfB2OuC/uaxdDh1aSw+Irnf9OxrraGSVqE+AKMlaIYEX6hT5n0sDF+A9/xfCVNyqsVwHanwUwt2OlDbhvVccRU7TqGP1/CMCS2PV5r3R3h5ue8oEqzdMQxrJt4n/PwVk6pTEejKJ3SXLFP4uBLHs/JWioTmnji7BWTsbfIPOy/JmhH0JXnncGdUd5XhUlCYvKvFlNfFoP3GnCHR8fO9Pj57DM6lJUQR60iaE5fr+UEGTzJUsWuLC4eb9NEJAW/6PGuuuAHFtwfSeYKqV86vscv3EY7C6+WXnalw+nMMIORVdSFMpW0JtfekqC1xOBlYC1i9bo6fr2xSUCvL7Wdfj2Z6STNDnUWd+URIMn1DomtA8FOal8y3ijHBjbl2WrGaRshxtFHF1z7jBnpEh1mrmN/WMTh/hqGpuqMrzVxvVWKTx0sstVL0OwzeEayUjGc8ydEg9lVfSo/t0xVw71/cK8e64R9TjIxyH5aPcZ03IerBCkLL3IdNqsEHXukWTek0O/Bz4x3shh7k1xw1Y13sip62/kQrSbDYbpY5eeL3MWYaPKs7UTssbiXTnPZx8AeWj8tw6NVS4LGh1k4h+fGU1lnHA+FoGX46nCNhq8+O7Io6YmvD7juF1MLTVnYzGPqlYxyhfVBIqe1ASt/P4WsR0cJ7WoEsVRf+WiqXppeySlK8t1CSGHSrFL06kmE+RH8ztR5ik7XjkaewUySwimL1QqYnrOZATewbGxvGzO8TWXrWOvkitWjjWk3C+jx83ndT633ojOeZ54u4bjyoZ+AZq7CuThsySw7KA9wpXss9lLEe4khNOXx37DrpSAPzAQzQBqXI6vACtAcNAOrQSa4CIrDxtjFY/P4liKhZUjk3NTgaiD3zl3DqJVB1MwJMJmFS1/lLcVx5rhG/8dSpFocK8VimsB6CmgzTnYPea9Hy4tjhevaJIsy8y5dxKoFJA3Pdo27JGwLyHuj0CgTa5fMSXOonpyaMpIo6H82eG3TK1rrS4fJpYYH08HGRekjaVv2Zc9YMdSQ0CZFq0kZvogr5SRc21agds85YysUFg96rDKlWv+QqU9qgKc53euYlluyqjoXoW/7YgT0bmnWjpbJMaZehKkFS63pu5EqUDdS4F+mPBP1CduiSeQafjuF3MadvC2soCTsrAXPMXe/6lonhbaAhmDaC1IsJxtWbEsHQpZgsEzgB7+CRWABOABWgAwwAXTgtZB954CngAhTGcwGR8ASMBf8BW4FWbH2RuPyelTqytL2Uqs8fE1wlWYnuUqdzjDktfU/jXtQ/dm3B++dKa++zGdxVezGRHe3QgSaU6VXw2yAqdMwXhbd5KacnzssUgMcxSD58o+G2jCiVF/0jv8JMABBEldD7PKL3QAAAABJRU5ErkJggg=="

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(78);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Feedback() {
    return _react2.default.createElement(
      'div',
      { className: _Feedback2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Feedback2.default.container },
        _react2.default.createElement(
          'a',
          {
            className: _Feedback2.default.link,
            href: 'https://gitter.im/kriasoft/react-starter-kit'
          },
          'Ask a question'
        ),
        _react2.default.createElement(
          'span',
          { className: _Feedback2.default.spacer },
          '|'
        ),
        _react2.default.createElement(
          'a',
          {
            className: _Feedback2.default.link,
            href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
          },
          'Report an issue'
        )
      )
    );
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(79);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Feedback_root_2NP {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.Feedback_container_2Ay {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.Feedback_link_17M,\n.Feedback_link_17M:active,\n.Feedback_link_17M:hover,\n.Feedback_link_17M:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.Feedback_link_17M:hover {\n  text-decoration: underline;\n}\n\n.Feedback_spacer_2n9 {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", "", {"version":3,"sources":["/./components/Feedback/Feedback.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,mBAAmB;EACnB,iBAAiB,CAAC,WAAW;CAC9B;;AAED;;;;EAIE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,oBAAoB;EACpB,mBAAmB;CACpB","file":"Feedback.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: var(--max-content-width);\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.link,\n.link:active,\n.link:hover,\n.link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Feedback_root_2NP",
  	"container": "Feedback_container_2Ay",
  	"link": "Feedback_link_17M",
  	"spacer": "Feedback_spacer_2n9"
  };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(81);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(65);
  
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
    return _react2.default.createElement(
      'div',
      { className: _Footer2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Footer2.default.container },
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.text },
          '© Your Company'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '·'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '·'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/privacy' },
          'Privacy'
        ),
        _react2.default.createElement(
          'span',
          { className: _Footer2.default.spacer },
          '·'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _Footer2.default.link, to: '/not-found' },
          'Not Found'
        )
      )
    );
  }
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(82);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer_root_3Ji {\n  background: #333;\n  color: #fff;\n}\n\n.Footer_container_n1b {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer_text_2mr {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer_textMuted_9iT {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_spacer_3HO {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_text_2mr,\n.Footer_link_1sU {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer_link_1sU,\n.Footer_link_1sU:active,\n.Footer_link_1sU:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer_link_1sU:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/Footer/Footer.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EAEE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Footer_root_3Ji",
  	"container": "Footer_container_n1b",
  	"text": "Footer_text_2mr",
  	"textMuted": "Footer_textMuted_9iT Footer_text_2mr",
  	"spacer": "Footer_spacer_3HO",
  	"link": "Footer_link_1sU"
  };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(26);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(84);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(50);
  
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
                return _context.abrupt('return', _react2.default.createElement(_Home2.default, { news: data.news }));
  
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _Home = __webpack_require__(85);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Widget = __webpack_require__(87);
  
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
  
  function Home(_ref, context) {
    var news = _ref.news;
  
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Dashboard'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-3 col-md-6' },
          _react2.default.createElement(_Widget2.default, { style: 'primary',
            icon: 'fa fa-comments fa-5x',
            count: '26',
            headerText: 'New Comments!',
            footerText: 'View Details',
            linkTo: '/' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-3 col-md-6' },
          _react2.default.createElement(_Widget2.default, { style: 'success',
            icon: 'fa fa-tasks fa-5x',
            count: '12',
            headerText: 'New Tasks!',
            footerText: 'View Details',
            linkTo: '/' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-3 col-md-6' },
          _react2.default.createElement(_Widget2.default, { style: 'warning',
            icon: 'fa fa-shopping-cart fa-5x',
            count: '124',
            headerText: 'New Orders!',
            footerText: 'View Details',
            linkTo: '/' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-3 col-md-6' },
          _react2.default.createElement(_Widget2.default, { style: 'danger',
            icon: 'fa fa-support fa-5x',
            count: '13',
            headerText: 'Support Tickets!',
            footerText: 'View Details',
            linkTo: '/' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Area Chart Example',
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { title: 'Dropdown', bsSize: 'xs', pullRight: true, id: 'dropdownButton1' },
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '1' },
                      'Action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '2' },
                      'Another action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '3' },
                      'Something else here'
                    ),
                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '4' },
                      'Separated link'
                    )
                  )
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Bar Chart Example',
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { title: 'Dropdown', bsSize: 'xs', pullRight: true, id: 'dropdownButton2' },
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '1' },
                      'Action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '2' },
                      'Another action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '3' },
                      'Something else here'
                    ),
                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '4' },
                      'Separated link'
                    )
                  )
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-clock-o fa-fw' }),
                ' Responsive Timeline'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bell fa-fw' }),
                ' Notifications Panel'
              )
            },
            _react2.default.createElement(
              _reactBootstrap.ListGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-comment fa-fw' }),
                ' New Comment',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '4 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-twitter fa-fw' }),
                ' 3 New Followers',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '12 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' }),
                ' Message Sent',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '27 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' New Task',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '43 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-upload fa-fw' }),
                ' Server Rebooted',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '11:32 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-bolt fa-fw' }),
                ' Server Crashed!',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '11:13 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-warning fa-fw' }),
                ' Server Not Responding',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '10:57 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-cart fa-fw' }),
                ' New Order Placed',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '9:49 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: 'javascript:void(0)' },
                _react2.default.createElement('i', { className: 'fa fa-money fa-fw' }),
                ' Payment Received',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    'Yesterday'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { block: true },
              'View All Alerts'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Donut Chart Example'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          )
        )
      )
    );
  }
  
  Home.propTypes = {
    news: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      title: _react.PropTypes.string.isRequired,
      link: _react.PropTypes.string.isRequired,
      contentSnippet: _react.PropTypes.string
    })).isRequired
  };
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(86);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home_root_2IM {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home_container_2Ye {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home_news_oTy {\n  padding: 0;\n}\n\n.Home_newsItem_3Ob {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_1yW {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_1yW,\n.Home_newsDesc_21L {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_2IM",
  	"container": "Home_container_2Ye",
  	"news": "Home_news_oTy",
  	"newsItem": "Home_newsItem_3Ob",
  	"newsTitle": "Home_newsTitle_1yW",
  	"newsDesc": "Home_newsDesc_21L"
  };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _Link = __webpack_require__(65);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var StatWidget = _react2.default.createClass({
    displayName: 'StatWidget',
    // eslint-disable-line
    render: function render() {
      return _react2.default.createElement(_reactBootstrap.Panel, {
        className: 'stat',
        bsStyle: this.props.style // eslint-disable-line
  
        , header: _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _react2.default.createElement('i', {
              className: this.props.icon // eslint-disable-line
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-9 text-right' },
            _react2.default.createElement(
              'div',
              { className: 'huge' },
              this.props.count // eslint-disable-line
  
            ),
            _react2.default.createElement(
              'div',
              null,
              this.props.headerText // eslint-disable-line
  
            )
          )
        ),
  
        footer: _react2.default.createElement(
          _Link2.default,
          {
            to: this.props.linkTo // eslint-disable-line
  
          },
          _react2.default.createElement(
            'span',
            { className: 'pull-left' },
            this.props.footerText // eslint-disable-line
  
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
          ),
          _react2.default.createElement('div', { className: 'clearfix' })
        )
      });
    }
  });
  
  exports.default = StatWidget;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Contact = __webpack_require__(89);
  
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
  
  exports.default = {
  
    path: '/contact',
  
    action: function action() {
      return _react2.default.createElement(_Contact2.default, null);
    }
  };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Contact = __webpack_require__(90);
  
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
  
  function Contact(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: _Contact2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Contact2.default.container },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          '...'
        )
      )
    );
  }
  
  Contact.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Contact_root_1G9 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact_container_2Tn {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Contact_root_1G9",
  	"container": "Contact_container_2Tn"
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(93);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      return _react2.default.createElement(_Login2.default, null);
    }
  };
  // import App from '../../components/App';

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Login = __webpack_require__(96);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _history = __webpack_require__(68);
  
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
  
  function Login(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: 'col-md-4 col-md-offset-4' },
      _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          'h1',
          { className: 'login-brand-text' },
          'SB Admin React'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'text-muted' },
          'Created by ',
          _react2.default.createElement(
            'a',
            { href: 'http://startreact.com' },
            'StartReact.com'
          ),
          ' team'
        )
      ),
      _react2.default.createElement(
        _Panel2.default,
        { header: _react2.default.createElement(
            'h3',
            null,
            'Please Sign In'
          ), className: 'login-panel' },
        _react2.default.createElement(
          'form',
          { role: 'form', onSubmit: function onSubmit(e) {
              submitHandler(e);
            } },
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                className: 'form-control',
                placeholder: 'Username',
                name: 'name'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Password',
                type: 'password',
                name: 'password'
              })
            ),
            _react2.default.createElement(
              _reactBootstrap.Checkbox,
              { label: 'Remember Me' },
              ' Remember Me '
            ),
            _react2.default.createElement(
              _Button2.default,
              { type: 'submit', bsSize: 'large', bsStyle: 'success', block: true },
              'Login'
            )
          )
        )
      )
    );
  }
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Button");

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Panel");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(97);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login_root_rQN {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login_container_2BV {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login_lead_1mJ {\n  font-size: 1.25em;\n}\n.Login_formGroup_25T {\n  margin-bottom: 15px;\n}\n.Login_label_2G0 {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login_input_1bT {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login_input_1bT:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_button_11e {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login_button_11e:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login_button_11e:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_facebook_2nZ {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login_facebook_2nZ:hover {\n  background: #2d4373;\n}\n.Login_google_23H {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login_google_23H:hover {\n  background: #c23321;\n}\n.Login_twitter_AJd {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login_twitter_AJd:hover {\n  background: #2795e9;\n}\n.Login_icon_34k {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login_lineThrough_Upb {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login_lineThrough_Upb::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login_lineThrough_Upb::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Login_root_rQN",
  	"container": "Login_container_2BV",
  	"lead": "Login_lead_1mJ",
  	"formGroup": "Login_formGroup_25T",
  	"label": "Login_label_2G0",
  	"input": "Login_input_1bT",
  	"button": "Login_button_11e",
  	"facebook": "Login_facebook_2nZ Login_button_11e",
  	"google": "Login_google_23H Login_button_11e",
  	"twitter": "Login_twitter_AJd Login_button_11e",
  	"icon": "Login_icon_34k",
  	"lineThrough": "Login_lineThrough_Upb"
  };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Table = __webpack_require__(99);
  
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
  
  exports.default = {
  
    path: '/table',
  
    action: function action() {
      return _react2.default.createElement(_Table2.default, null);
    }
  };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Tables = __webpack_require__(100);
  
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
  
  
  function displayTable(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Tables2.default, null);
  }
  
  displayTable.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayTable;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Pagination = __webpack_require__(101);
  
  var _Pagination2 = _interopRequireDefault(_Pagination);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Well = __webpack_require__(103);
  
  var _Well2 = _interopRequireDefault(_Well);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Tables = function (_Component) {
    (0, _inherits3.default)(Tables, _Component);
  
    function Tables() {
      (0, _classCallCheck3.default)(this, Tables);
      return (0, _possibleConstructorReturn3.default)(this, (Tables.__proto__ || (0, _getPrototypeOf2.default)(Tables)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Tables, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              _PageHeader2.default,
              null,
              'Tables'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              _Panel2.default,
              { header: _react2.default.createElement(
                  'span',
                  null,
                  'DataTables Advanced Tables'
                ) },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'dataTable_wrapper' },
                  _react2.default.createElement(
                    'div',
                    {
                      id: 'dataTables-example_wrapper',
                      className: 'dataTables_wrapper form-inline dt-bootstrap no-footer'
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm-9' },
                        _react2.default.createElement(
                          'div',
                          { className: 'dataTables_length', id: 'dataTables-example_length' },
                          _react2.default.createElement(
                            'label',
                            null,
                            ' Show',
                            _react2.default.createElement(
                              'select',
                              {
                                name: 'dataTables-example_length',
                                'aria-controls': 'dataTables-example',
                                className: 'form-control input-sm'
                              },
                              _react2.default.createElement(
                                'option',
                                { value: '10' },
                                '10'
                              ),
                              _react2.default.createElement(
                                'option',
                                { value: '25' },
                                '25'
                              ),
                              _react2.default.createElement(
                                'option',
                                { value: '50' },
                                '50'
                              ),
                              _react2.default.createElement(
                                'option',
                                { value: '100' },
                                '100'
                              )
                            ),
                            'entries'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm-3' },
                        _react2.default.createElement(
                          'div',
                          { id: 'dataTables-example_filter', className: 'dataTables_filter' },
                          _react2.default.createElement(
                            'label',
                            null,
                            'Search:',
                            _react2.default.createElement('input', {
                              type: 'search',
                              className: 'form-control input-sm',
                              placeholder: '',
                              'aria-controls': 'dataTables-example'
                            })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                          'table',
                          {
                            className: 'table table-striped table-bordered table-hover dataTable no-footer',
                            id: 'dataTables-example',
                            role: 'grid',
                            'aria-describedby': 'dataTables-example_info'
                          },
                          _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                              'tr',
                              { role: 'row' },
                              _react2.default.createElement(
                                'th',
                                {
                                  className: 'sorting_asc',
                                  tabIndex: '0',
                                  'aria-controls': 'dataTables-example',
                                  rowSpan: '1',
                                  colSpan: '1',
                                  'aria-label': 'Rendering engine: activate to sort column descending',
                                  'aria-sort': 'ascending',
                                  style: { width: 265 }
                                },
                                'Rendering engine'
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  className: 'sorting',
                                  tabIndex: '0',
                                  'aria-controls': 'dataTables-example',
                                  rowSpan: '1',
                                  colSpan: '1',
                                  'aria-label': 'Browser: activate to sort column ascending',
                                  style: { width: 321 }
                                },
                                'Browser'
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  className: 'sorting',
                                  tabIndex: '0',
                                  'aria-controls': 'dataTables-example',
                                  rowSpan: '1',
                                  colSpan: '1',
                                  'aria-label': 'Platform(s): activate to sort column ascending',
                                  style: { width: 299 }
                                },
                                'Platform(s)'
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  className: 'sorting',
                                  tabIndex: '0',
                                  'aria-controls': 'dataTables-example',
                                  rowSpan: '1',
                                  colSpan: '1',
                                  'aria-label': 'Engine version: activate to sort column ascending',
                                  style: { width: 231 }
                                },
                                'Engine version'
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  className: 'sorting',
                                  tabIndex: '0',
                                  'aria-controls': 'dataTables-example',
                                  rowSpan: '1',
                                  colSpan: '1',
                                  'aria-label': 'CSS grade: activate to sort column ascending',
                                  style: { width: 180 }
                                },
                                'CSS grade'
                              )
                            )
                          ),
                          _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA odd', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Firefox 1.0'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 98+ / OSX.2+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.7'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA even', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Firefox 1.5'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 98+ / OSX.2+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.8'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA odd', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Firefox 2.0'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 98+ / OSX.2+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.8'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA even', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Firefox 3.0'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 2k+ / OSX.3+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.9'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA odd', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Camino 1.0'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'OSX.2+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.8'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA even', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Camino 1.5'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'OSX.3+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.8'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA odd', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Netscape 7.2'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 95+ / Mac OS 8.6-9.2'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.7'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA even', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Netscape Browser 8'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 98SE+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.7'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA odd', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Netscape Navigator 9'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 98+ / OSX.2+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1.8'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              { className: 'gradeA even', role: 'row' },
                              _react2.default.createElement(
                                'td',
                                { className: 'sorting_1' },
                                'Gecko'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Mozilla 1.0'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                'Win 95+ / OSX.1+'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                '1'
                              ),
                              _react2.default.createElement(
                                'td',
                                { className: 'center' },
                                'A'
                              )
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(
                          'div',
                          {
                            className: 'dataTables_info',
                            id: 'dataTables-example_info',
                            role: 'status',
                            'aria-live': 'polite'
                          },
                          'Showing 1 to 10 of 57 entries'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6 pullRight ' },
                        _react2.default.createElement(_Pagination2.default, {
                          activePage: 1,
                          items: 6,
                          first: true,
                          last: true,
                          prev: true,
                          next: true,
                          onSelect: function onSelect(pageNumber) {}
                        })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _Well2.default,
                  null,
                  _react2.default.createElement(
                    'h4',
                    null,
                    'DataTables Usage Information'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at ',
                    _react2.default.createElement(
                      'a',
                      { target: '_blank', href: 'https://datatables.net/' },
                      '\'https://datatables.net/\''
                    ),
                    '.'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsSize: 'large', block: true, href: 'https://datatables.net/' },
                    'View DataTables Documentation'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row ng-scope' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Kitchen Sink '
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table table-striped table-bordered table-hover' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter '
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Basic Table'
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter'
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row ng-scope' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Striped Rows '
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table table-striped' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter '
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Bordered Table '
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive table-bordered' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter '
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row ng-scope' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Hover Rows '
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table table-hover' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter '
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Context Classes '
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'First Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Last Name '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Username '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        { className: 'success' },
                        _react2.default.createElement(
                          'td',
                          null,
                          '1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Mark '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Otto '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@mdo'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        { className: 'info' },
                        _react2.default.createElement(
                          'td',
                          null,
                          '2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Jacob '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Thornton '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@fat'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        { className: 'warning' },
                        _react2.default.createElement(
                          'td',
                          null,
                          '3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Larry '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'the Bird '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@twitter'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        { className: 'danger' },
                        _react2.default.createElement(
                          'td',
                          null,
                          '4 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'John '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Smith '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '@jsmith '
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Tables;
  }(_react.Component);
  
  exports.default = Tables;

/***/ },
/* 101 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Pagination");

/***/ },
/* 102 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/PageHeader");

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Well");

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(105);
  
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
  
  exports.default = {
  
    path: '/button',
  
    action: function action() {
      return _react2.default.createElement(_Button2.default, null);
    }
  };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Button = __webpack_require__(106);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Pagination from 'react-bootstrap/lib/Pagination';
  var title = 'Buttons';
  // import Well from 'react-bootstrap/lib/Well';
  
  function displayButtons(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Button2.default, null);
  }
  
  displayButtons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayButtons;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Buttons = function (_Component) {
    (0, _inherits3.default)(Buttons, _Component);
  
    function Buttons() {
      (0, _classCallCheck3.default)(this, Buttons);
      return (0, _possibleConstructorReturn3.default)(this, (Buttons.__proto__ || (0, _getPrototypeOf2.default)(Buttons)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Buttons, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Buttons'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Default Buttons'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Normal Buttons'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    null,
                    'Default'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary' },
                    'Primary'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'success' },
                    'Success'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'info' },
                    'Info'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'warning' },
                    'Warning'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'danger' },
                    'Danger'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link' },
                    'Link'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Disabled Buttons'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { disabled: true },
                    'Default'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', disabled: true },
                    'Primary'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'success', disabled: true },
                    'Success'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'info', disabled: true },
                    'Info'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'warning', disabled: true },
                    'Warning'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'danger', disabled: true },
                    'Danger'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', disabled: true },
                    'Link'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Button Sizes'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', bsSize: 'large' },
                    'Large button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary' },
                    'Default button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', bsSize: 'small' },
                    'Small button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', bsSize: 'xsmall' },
                    'Mini button'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', bsSize: 'large', block: true },
                    'Block level button'
                  )
                )
              ),
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Circle Icon Buttons with Font Awesome Icons'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Normal Circle Buttons'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'primary', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-list' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'success', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-link' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'info', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'warning', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-times' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'danger', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-heart' })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Large Circle Buttons'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', bsStyle: 'primary', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-list' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', bsStyle: 'success', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-link' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', bsStyle: 'info', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', bsStyle: 'warning', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-times' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsSize: 'large', bsStyle: 'danger', className: 'btn-circle' },
                  _react2.default.createElement('i', { className: 'fa fa-heart' })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Extra Large Circle Buttons'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'primary', className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-list' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'success', className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-link' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'info', className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-check' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'warning', className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-times' })
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'danger', className: 'btn-circle btn-xl' },
                  _react2.default.createElement('i', { className: 'fa fa-heart' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Outline Buttons with Smooth Transition'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Outline Buttons'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { className: 'btn-outline' },
                    'Default'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline' },
                    'Primary'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'success', className: 'btn-outline' },
                    'Success'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'info', className: 'btn-outline' },
                    'Info'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'warning', className: 'btn-outline' },
                    'Warning'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'danger', className: 'btn-outline' },
                    'Danger'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-outline' },
                    'Link'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Outline Button Sizes'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline', bsSize: 'large' },
                    'Large button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline' },
                    'Default button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline', bsSize: 'small' },
                    'Small button'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline', bsSize: 'xsmall' },
                    'Mini button'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'primary', className: 'btn-outline', bsSize: 'large', block: true },
                    'Block level button'
                  )
                )
              ),
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Social Buttons with Font Awesome Icons'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Social Buttons'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social { btn-bitbucket }', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-bitbucket' }),
                  ' Sign in with Bitbucket'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-dropbox', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-dropbox' }),
                  ' Sign in with Dropbox'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-facebook', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-facebook' }),
                  ' Sign in with Facebook'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-flickr', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-flickr' }),
                  ' Sign in with Flickr'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-github', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-github' }),
                  ' Sign in with GitHub'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-google-plus', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-google-plus' }),
                  ' Sign in with Google'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-instagram', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-instagram' }),
                  ' Sign in with Instagram'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-linkedin', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-linkedin' }),
                  ' Sign in with LinkedIn'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-pinterest', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-pinterest' }),
                  ' Sign in with Pinterest'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-tumblr', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-tumblr' }),
                  ' Sign in with Tumblr'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-twitter', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-twitter' }),
                  ' Sign in with Twitter'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'link', className: 'btn-social btn-vk', block: true },
                  _react2.default.createElement('i', { className: 'fa fa-vk' }),
                  ' Sign in with VK'
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  'div',
                  { className: 'text-center' },
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-bitbucket' },
                    _react2.default.createElement('i', { className: 'fa fa-bitbucket' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-dropbox' },
                    _react2.default.createElement('i', { className: 'fa fa-dropbox' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-facebook' },
                    _react2.default.createElement('i', { className: 'fa fa-facebook' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-flickr' },
                    _react2.default.createElement('i', { className: 'fa fa-flickr' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-github' },
                    _react2.default.createElement('i', { className: 'fa fa-github' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-google-plus' },
                    _react2.default.createElement('i', { className: 'fa fa-google-plus' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-instagram' },
                    _react2.default.createElement('i', { className: 'fa fa-instagram' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-linkedin' },
                    _react2.default.createElement('i', { className: 'fa fa-linkedin' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-pinterest' },
                    _react2.default.createElement('i', { className: 'fa fa-pinterest' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-tumblr' },
                    _react2.default.createElement('i', { className: 'fa fa-tumblr' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-twitter' },
                    _react2.default.createElement('i', { className: 'fa fa-twitter' })
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsStyle: 'link', className: 'btn-social-icon btn-vk' },
                    _react2.default.createElement('i', { className: 'fa fa-vk' })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Buttons;
  }(_react.Component);
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  exports.default = Buttons;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FlotCharts = __webpack_require__(108);
  
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
  
  exports.default = {
  
    path: '/flotcharts',
  
    action: function action() {
      return _react2.default.createElement(_FlotCharts2.default, null);
    }
  };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FlotCharts = __webpack_require__(109);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Flot Charts';
  
  function displayFlotCharts(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_FlotCharts2.default, null);
  }
  
  displayFlotCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayFlotCharts;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var FlotCharts = function (_Component) {
    (0, _inherits3.default)(FlotCharts, _Component);
  
    function FlotCharts() {
      (0, _classCallCheck3.default)(this, FlotCharts);
      return (0, _possibleConstructorReturn3.default)(this, (FlotCharts.__proto__ || (0, _getPrototypeOf2.default)(FlotCharts)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(FlotCharts, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Flot'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Line Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Pie Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Multiple Axes Line Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Moving Line Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Bar Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Flot Charts Usage'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, ',
                    _react2.default.createElement(
                      'a',
                      { target: '_blank', href: 'http://www.flotcharts.org/' },
                      'http://www.flotcharts.org/'
                    ),
                    '.'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsSize: 'large', block: true, href: 'http://www.flotcharts.org/' },
                    'View Flot Charts Documentation'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return FlotCharts;
  }(_react.Component);
  
  exports.default = FlotCharts;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Forms = __webpack_require__(111);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/forms',
  
    action: function action() {
      return _react2.default.createElement(_Forms2.default, null);
    }
  };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Forms = __webpack_require__(112);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Forms';
  
  function displayForms(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Forms2.default, null);
  }
  
  displayForms.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayForms;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _FormControlFeedback = __webpack_require__(113);
  
  var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);
  
  var _FormControlStatic = __webpack_require__(114);
  
  var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);
  
  var _InputGroupAddon = __webpack_require__(115);
  
  var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                'Forms'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Basic Form Elements'
                  ) },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-6' },
                    _react2.default.createElement(
                      _reactBootstrap.Form,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        {
                          controlId: 'formBasicText'
                        },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Text Input'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                          type: 'text'
                        }),
                        _react2.default.createElement(_FormControlFeedback2.default, null),
                        _react2.default.createElement(
                          _reactBootstrap.HelpBlock,
                          null,
                          'Example block-level help text here.'
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formBasicText2' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Text Input'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                          type: 'text',
                          placeholder: 'Enter Text'
                        }),
                        _react2.default.createElement(_FormControlFeedback2.default, null)
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Static text'
                        ),
                        _react2.default.createElement(
                          _FormControlStatic2.default,
                          null,
                          'email@example.com'
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        {
                          controlId: 'formBasicFile'
                        },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'File Input'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                          type: 'file'
                        }),
                        _react2.default.createElement(_FormControlFeedback2.default, null)
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsTextarea' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Textarea'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'textarea' })
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsCheckbox' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'CheckBox'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Checkbox,
                          null,
                          'Checkbox #1 '
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Checkbox,
                          null,
                          ' Checkbox #2 '
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Checkbox,
                          null,
                          ' Checkbox #3 '
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Inline CheckBox'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Col,
                          null,
                          _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { inline: true },
                            '1'
                          ),
                          ' ',
                          _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { inline: true },
                            '2'
                          ),
                          ' ',
                          _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { inline: true },
                            '3'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Inline Radio'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.Col,
                          null,
                          _react2.default.createElement(
                            _reactBootstrap.Radio,
                            { inline: true },
                            '1'
                          ),
                          ' ',
                          _react2.default.createElement(
                            _reactBootstrap.Radio,
                            { inline: true },
                            '2'
                          ),
                          ' ',
                          _react2.default.createElement(
                            _reactBootstrap.Radio,
                            { inline: true },
                            '3'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsSelect' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Select'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { componentClass: 'select', placeholder: 'select' },
                          _react2.default.createElement(
                            'option',
                            { value: '1' },
                            '1'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '2' },
                            '2'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '3' },
                            '3'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '4' },
                            '4'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '5' },
                            '5'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsSelectMultiple' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Multiple select'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { componentClass: 'select', multiple: true },
                          _react2.default.createElement(
                            'option',
                            { value: '1' },
                            '1'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '2' },
                            '2'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '3' },
                            '3'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '4' },
                            '4'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '5' },
                            '5'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { type: 'submit' },
                          'Submit Button'
                        ),
                        '  ',
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { type: 'reset' },
                          'Reset Button'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-6' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Disabled Form States'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Form,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlDisableState' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          ' Disabled Input '
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Disabled Input', disabled: true })
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsDisableSelect' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Disabled Select'
                        ),
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { componentClass: 'select', placeholder: 'select', disabled: true },
                          _react2.default.createElement(
                            'option',
                            { value: '1' },
                            '1'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '2' },
                            '2'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsDisabledCheckbox' },
                        _react2.default.createElement(
                          _reactBootstrap.Checkbox,
                          { disabled: true },
                          'Disabled CheckBox'
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formControlsDisabledButton' },
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { bsStyle: 'primary', type: 'submit', disabled: true },
                          'Disabled Button '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Form Validation States'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Form,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formValidationSuccess2', validationState: 'success' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Input with success'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                        _react2.default.createElement(_FormControlFeedback2.default, null)
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formValidationWarning1', validationState: 'warning' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Input with warning'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                        _react2.default.createElement(_FormControlFeedback2.default, null)
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formValidationWarning1', validationState: 'error' },
                        _react2.default.createElement(
                          _reactBootstrap.ControlLabel,
                          null,
                          'Input with Error'
                        ),
                        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                        _react2.default.createElement(_FormControlFeedback2.default, null)
                      )
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Input Groups'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Form,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.InputGroup,
                          null,
                          _react2.default.createElement(
                            _InputGroupAddon2.default,
                            null,
                            '@'
                          ),
                          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.InputGroup,
                          null,
                          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                          _react2.default.createElement(
                            _InputGroupAddon2.default,
                            null,
                            '.00'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.InputGroup,
                          null,
                          _react2.default.createElement(
                            _InputGroupAddon2.default,
                            null,
                            '$'
                          ),
                          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                          _react2.default.createElement(
                            _InputGroupAddon2.default,
                            null,
                            '.00'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.InputGroup,
                          null,
                          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                          _react2.default.createElement(
                            _InputGroupAddon2.default,
                            null,
                            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'music' })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Forms;
  }(_react.Component);
  
  exports.default = Forms;

/***/ },
/* 113 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlFeedback");

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlStatic");

/***/ },
/* 115 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/InputGroupAddon");

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Grid = __webpack_require__(117);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/grid',
  
    action: function action() {
      return _react2.default.createElement(_Grid2.default, null);
    }
  };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Grid = __webpack_require__(118);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Grid';
  
  function displayGrid(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Grid2.default, null);
  }
  
  displayGrid.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayGrid;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Grid = function (_Component) {
    (0, _inherits3.default)(Grid, _Component);
  
    function Grid() {
      (0, _classCallCheck3.default)(this, Grid);
      return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Grid, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Grid'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Grid options'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'table-responsive' },
                  _react2.default.createElement(
                    'table',
                    { className: 'table table-bordered table-striped' },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement('th', null),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Extra small devices',
                          _react2.default.createElement(
                            'small',
                            null,
                            'Phones (<768px)'
                          )
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Small devices',
                          _react2.default.createElement(
                            'small',
                            null,
                            'Tablets (≥768px)'
                          )
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Medium devices',
                          _react2.default.createElement(
                            'small',
                            null,
                            'Desktops (≥992px)'
                          )
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          'Large devices',
                          _react2.default.createElement(
                            'small',
                            null,
                            'Desktops (≥1200px)'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tbody',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Grid behavior'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'Horizontal at all times'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '3' },
                          'Collapsed to start, horizontal above breakpoints'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Max container width'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          'None (auto)'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '750px'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '970px'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '1170px'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Class prefix'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          _react2.default.createElement(
                            'code',
                            null,
                            '.col-xs-'
                          )
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          _react2.default.createElement(
                            'code',
                            null,
                            '.col-sm-'
                          )
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          _react2.default.createElement(
                            'code',
                            null,
                            '.col-md-'
                          )
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          _react2.default.createElement(
                            'code',
                            null,
                            '.col-lg-'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          '# of columns'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '4' },
                          '12'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Max column width'
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'text-muted' },
                          'Auto'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '60px'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '78px'
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          '95px'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Gutter width'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '4' },
                          '30px (15px on each side of a column)'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Nestable'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '4' },
                          'Yes'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Offsets'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '4' },
                          'Yes'
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          'Column ordering'
                        ),
                        _react2.default.createElement(
                          'td',
                          { colSpan: '4' },
                          'Yes'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-'
                  ),
                  ' class to an element will not only affect its styling on medium devices but also on large devices if a',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-lg-'
                  ),
                  ' class is not present.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Example: Stacked-to-horizontal'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Using a single set of',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.row'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-1' },
                    '.col-md-1'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-8' },
                    '.col-md-8'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    '.col-md-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    '.col-md-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    '.col-md-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    '.col-md-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    '.col-md-6'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    '.col-md-6'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Example: Mobile and desktop'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Dont want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-xs-*'
                  ),
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' to your columns. See the example below for a better idea of how it all works.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-md-8' },
                    '.col-xs-12 .col-md-8'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-md-4' },
                    '.col-xs-6 .col-md-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-md-4' },
                    '.col-xs-6 .col-md-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-md-4' },
                    '.col-xs-6 .col-md-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-md-4' },
                    '.col-xs-6 .col-md-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    '.col-xs-6'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    '.col-xs-6'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Example: Mobile, tablet, desktops'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Build on the previous example by creating even more dynamic and powerful layouts with tablet',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-sm-*'
                  ),
                  ' classes.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-6 col-md-8' },
                    '.col-xs-12 .col-sm-6 .col-md-8'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-md-4' },
                    '.col-xs-6 .col-md-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-4' },
                    '.col-xs-6 .col-sm-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-4' },
                    '.col-xs-6 .col-sm-4'
                  ),
                  _react2.default.createElement('div', { className: 'clearfix visible-xs' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-4' },
                    '.col-xs-6 .col-sm-4'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  { id: 'grid-responsive-resets' },
                  'Responsive column resets'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'With the four tiers of grids available you\'re bound to run into issues where, at certain breakpoints, your columns don\'t clear quite right as one is taller than the other. To fix that, use a combination of a',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.clearfix'
                  ),
                  ' and our ',
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    'responsive utility classes'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-3' },
                    '.col-xs-6 .col-sm-3',
                    _react2.default.createElement('br', null),
                    'Resize your viewport or check it out on your phone for an example.'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-3' },
                    '.col-xs-6 .col-sm-3'
                  ),
                  _react2.default.createElement('div', { className: 'clearfix visible-xs' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-3' },
                    '.col-xs-6 .col-sm-3'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 col-sm-3' },
                    '.col-xs-6 .col-sm-3'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  { id: 'grid-offsetting' },
                  'Offsetting columns'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Move columns to the right using',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-offset-*'
                  ),
                  ' classes. These classes increase the left margin of a column by',
                  _react2.default.createElement(
                    'code',
                    null,
                    '*'
                  ),
                  ' columns. For example,',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-offset-4'
                  ),
                  ' moves',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-4'
                  ),
                  ' over four columns.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    '.col-md-4'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-4 col-md-offset-4' },
                    '.col-md-4 .col-md-offset-4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3 col-md-offset-3' },
                    '.col-md-3 .col-md-offset-3'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3 col-md-offset-3' },
                    '.col-md-3 .col-md-offset-3'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-3' },
                    '.col-md-6 .col-md-offset-3'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  { id: 'grid-nesting' },
                  'Nesting columns'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'To nest your content with the default grid, add a new',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.row'
                  ),
                  ' and set of',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' columns within an existing',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' column. Nested rows should include a set of columns that add up to 12.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    'Level 1: .col-md-9',
                    _react2.default.createElement(
                      'div',
                      { className: 'row show-grid' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        'Level 2: .col-md-6'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        'Level 2: .col-md-6'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                null,
                _react2.default.createElement(
                  'h3',
                  { id: 'grid-column-ordering' },
                  'Column ordering'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Easily change the order of our built-in grid columns with',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-push-*'
                  ),
                  ' and',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-pull-*'
                  ),
                  ' modifier classes.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9 col-md-push-3' },
                    '.col-md-9 .col-md-push-3'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3 col-md-pull-9' },
                    '.col-md-3 .col-md-pull-9'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Grid;
  }(_react.Component);
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  exports.default = Grid;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Icons = __webpack_require__(120);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/icons',
  
    action: function action() {
      return _react2.default.createElement(_Icons2.default, null);
    }
  };

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Icons = __webpack_require__(121);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Icons';
  
  function displayIcons(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Icons2.default, null);
  }
  
  displayIcons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayIcons;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Icons = function (_Component) {
    (0, _inherits3.default)(Icons, _Component);
  
    function Icons() {
      (0, _classCallCheck3.default)(this, Icons);
      return (0, _possibleConstructorReturn3.default)(this, (Icons.__proto__ || (0, _getPrototypeOf2.default)(Icons)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Icons, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              _PageHeader2.default,
              null,
              'Icons'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              _Panel2.default,
              { header: _react2.default.createElement(
                  'span',
                  null,
                  'All available icons'
                ) },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'fa col-lg-3' },
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-glass' },
                    ' fa-glass '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-music' },
                    ' fa-music '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-search' },
                    ' fa-search '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-envelope-o' },
                    ' fa-envelope-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-heart' },
                    ' fa-heart '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star' },
                    ' fa-star '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star-o' },
                    ' fa-star-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-user' },
                    ' fa-user '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-film' },
                    ' fa-film '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-th-large' },
                    ' fa-th-large '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-th' },
                    ' fa-th '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-th-list' },
                    ' fa-th-list '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-check' },
                    ' fa-check '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-times' },
                    ' fa-times '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-search-plus' },
                    ' fa-search-plus '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-search-minus' },
                    ' fa-search-minus '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-power-off' },
                    ' fa-power-off '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-signal' },
                    ' fa-signal '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gear' },
                    ' fa-gear '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cog' },
                    ' fa-cog '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-trash-o' },
                    ' fa-trash-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-home' },
                    ' fa-home '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-o' },
                    ' fa-file-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-clock-o' },
                    ' fa-clock-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-road' },
                    ' fa-road '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-download' },
                    ' fa-download '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-o-down' },
                    ' fa-arrow-circle-o-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-o-up' },
                    ' fa-arrow-circle-o-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-inbox' },
                    ' fa-inbox '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-play-circle-o' },
                    ' fa-play-circle-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rotate-right' },
                    ' fa-rotate-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-repeat' },
                    ' fa-repeat '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-refresh' },
                    ' fa-refresh '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-list-alt' },
                    ' fa-list-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-lock' },
                    ' fa-lock '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flag' },
                    ' fa-flag '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-headphones' },
                    ' fa-headphones '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-volume-off' },
                    ' fa-volume-off '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-volume-down' },
                    ' fa-volume-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-volume-up' },
                    ' fa-volume-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-qrcode' },
                    ' fa-qrcode '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-barcode' },
                    ' fa-barcode '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tag' },
                    ' fa-tag '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tags' },
                    ' fa-tags '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-book' },
                    ' fa-book '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bookmark' },
                    ' fa-bookmark '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-print' },
                    ' fa-print '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-camera' },
                    ' fa-camera '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-font' },
                    ' fa-font '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bold' },
                    ' fa-bold '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-italic' },
                    ' fa-italic '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-text-height' },
                    ' fa-text-height '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-text-width' },
                    ' fa-text-width '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-align-left' },
                    ' fa-align-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-align-center' },
                    ' fa-align-center '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-align-right' },
                    ' fa-align-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-align-justify' },
                    ' fa-align-justify '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-list' },
                    ' fa-list '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dedent' },
                    ' fa-dedent '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-outdent' },
                    ' fa-outdent '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-indent' },
                    ' fa-indent '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-video-camera' },
                    ' fa-video-camera '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-photo' },
                    ' fa-photo '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-image' },
                    ' fa-image '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-picture-o' },
                    ' fa-picture-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pencil' },
                    ' fa-pencil '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-map-marker' },
                    ' fa-map-marker '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-adjust' },
                    ' fa-adjust '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tint' },
                    ' fa-tint '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-edit' },
                    ' fa-edit '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pencil-square-o' },
                    ' fa-pencil-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-share-square-o' },
                    ' fa-share-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-check-square-o' },
                    ' fa-check-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrows' },
                    ' fa-arrows '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-step-backward' },
                    ' fa-step-backward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fast-backward' },
                    ' fa-fast-backward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-backward' },
                    ' fa-backward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-play' },
                    ' fa-play '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pause' },
                    ' fa-pause '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stop' },
                    ' fa-stop '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-forward' },
                    ' fa-forward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fast-forward' },
                    ' fa-fast-forward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-step-forward' },
                    ' fa-step-forward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-eject' },
                    ' fa-eject '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-left' },
                    ' fa-chevron-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-right' },
                    ' fa-chevron-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-plus-circle' },
                    ' fa-plus-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-minus-circle' },
                    ' fa-minus-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-times-circle' },
                    ' fa-times-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-check-circle' },
                    ' fa-check-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-question-circle' },
                    ' fa-question-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-info-circle' },
                    ' fa-info-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-crosshairs' },
                    ' fa-crosshairs '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-times-circle-o' },
                    ' fa-times-circle-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-check-circle-o' },
                    ' fa-check-circle-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ban' },
                    ' fa-ban '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-left' },
                    ' fa-arrow-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-right' },
                    ' fa-arrow-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-up' },
                    ' fa-arrow-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-down' },
                    ' fa-arrow-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mail-forward' },
                    ' fa-mail-forward '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-share' },
                    ' fa-share '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-expand' },
                    ' fa-expand '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-compress' },
                    ' fa-compress '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-plus' },
                    ' fa-plus '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-minus' },
                    ' fa-minus '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-asterisk' },
                    ' fa-asterisk '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-exclamation-circle' },
                    ' fa-exclamation-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gift' },
                    ' fa-gift '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-leaf' },
                    ' fa-leaf '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fire' },
                    ' fa-fire '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-eye' },
                    ' fa-eye '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-eye-slash' },
                    ' fa-eye-slash '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-warning' },
                    ' fa-warning '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-exclamation-triangle' },
                    ' fa-exclamation-triangle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-plane' },
                    ' fa-plane '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-calendar' },
                    ' fa-calendar '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-random' },
                    ' fa-random '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-comment' },
                    ' fa-comment '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-magnet' },
                    ' fa-magnet '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-up' },
                    ' fa-chevron-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-down' },
                    ' fa-chevron-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-retweet' },
                    ' fa-retweet '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-shopping-cart' },
                    ' fa-shopping-cart '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-folder' },
                    ' fa-folder '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-folder-open' },
                    ' fa-folder-open '
                  ),
                  _react2.default.createElement('br', null),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'fa col-lg-3' },
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrows-v' },
                    ' fa-arrows-v '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrows-h' },
                    ' fa-arrows-h '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bar-chart-o' },
                    ' fa-bar-chart-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-twitter-square' },
                    ' fa-twitter-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-facebook-square' },
                    ' fa-facebook-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-camera-retro' },
                    ' fa-camera-retro '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-key' },
                    ' fa-key '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gears' },
                    ' fa-gears '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cogs' },
                    ' fa-cogs '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-comments' },
                    ' fa-comments '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-thumbs-o-up' },
                    ' fa-thumbs-o-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-thumbs-o-down' },
                    ' fa-thumbs-o-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star-half' },
                    ' fa-star-half '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-heart-o' },
                    ' fa-heart-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sign-out' },
                    ' fa-sign-out '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-linkedin-square' },
                    ' fa-linkedin-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-thumb-tack' },
                    ' fa-thumb-tack '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-external-link' },
                    ' fa-external-link '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sign-in' },
                    ' fa-sign-in '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-trophy' },
                    ' fa-trophy '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-github-square' },
                    ' fa-github-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-upload' },
                    ' fa-upload '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-lemon-o' },
                    ' fa-lemon-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-phone' },
                    ' fa-phone '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-square-o' },
                    ' fa-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bookmark-o' },
                    ' fa-bookmark-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-phone-square' },
                    ' fa-phone-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-twitter' },
                    ' fa-twitter '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-facebook' },
                    ' fa-facebook '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-github' },
                    ' fa-github '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-unlock' },
                    ' fa-unlock '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-credit-card' },
                    ' fa-credit-card '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rss' },
                    ' fa-rss '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hdd-o' },
                    ' fa-hdd-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bullhorn' },
                    ' fa-bullhorn '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bell' },
                    ' fa-bell '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-certificate' },
                    ' fa-certificate '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hand-o-right' },
                    ' fa-hand-o-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hand-o-left' },
                    ' fa-hand-o-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hand-o-up' },
                    ' fa-hand-o-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hand-o-down' },
                    ' fa-hand-o-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-left' },
                    ' fa-arrow-circle-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-right' },
                    ' fa-arrow-circle-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-up' },
                    ' fa-arrow-circle-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-down' },
                    ' fa-arrow-circle-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-globe' },
                    ' fa-globe '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-wrench' },
                    ' fa-wrench '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tasks' },
                    ' fa-tasks '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-filter' },
                    ' fa-filter '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-briefcase' },
                    ' fa-briefcase '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrows-alt' },
                    ' fa-arrows-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-group' },
                    ' fa-group '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-users' },
                    ' fa-users '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chain' },
                    ' fa-chain '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-link' },
                    ' fa-link '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cloud' },
                    ' fa-cloud '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flask' },
                    ' fa-flask '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cut' },
                    ' fa-cut '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-scissors' },
                    ' fa-scissors '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-copy' },
                    ' fa-copy '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-files-o' },
                    ' fa-files-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paperclip' },
                    ' fa-paperclip '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-save' },
                    ' fa-save '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-floppy-o' },
                    ' fa-floppy-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-square' },
                    ' fa-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-navicon' },
                    ' fa-navicon '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-reorder' },
                    ' fa-reorder '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bars' },
                    ' fa-bars '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-list-ul' },
                    ' fa-list-ul '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-list-ol' },
                    ' fa-list-ol '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-strikethrough' },
                    ' fa-strikethrough '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-underline' },
                    ' fa-underline '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-table' },
                    ' fa-table '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-magic' },
                    ' fa-magic '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-truck' },
                    ' fa-truck '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pinterest' },
                    ' fa-pinterest '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pinterest-square' },
                    ' fa-pinterest-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-google-plus-square' },
                    ' fa-google-plus-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-google-plus' },
                    ' fa-google-plus '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-money' },
                    ' fa-money '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-down' },
                    ' fa-caret-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-up' },
                    ' fa-caret-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-left' },
                    ' fa-caret-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-right' },
                    ' fa-caret-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-columns' },
                    ' fa-columns '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-unsorted' },
                    ' fa-unsorted '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort' },
                    ' fa-sort '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-down' },
                    ' fa-sort-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-desc' },
                    ' fa-sort-desc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-up' },
                    ' fa-sort-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-asc' },
                    ' fa-sort-asc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-envelope' },
                    ' fa-envelope '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-linkedin' },
                    ' fa-linkedin '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rotate-left' },
                    ' fa-rotate-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-undo' },
                    ' fa-undo '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-legal' },
                    ' fa-legal '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gavel' },
                    ' fa-gavel '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dashboard' },
                    ' fa-dashboard '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tachometer' },
                    ' fa-tachometer '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-comment-o' },
                    ' fa-comment-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-comments-o' },
                    ' fa-comments-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flash' },
                    ' fa-flash '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bolt' },
                    ' fa-bolt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sitemap' },
                    ' fa-sitemap '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-umbrella' },
                    ' fa-umbrella '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paste' },
                    ' fa-paste '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-clipboard' },
                    ' fa-clipboard '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-lightbulb-o' },
                    ' fa-lightbulb-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-exchange' },
                    ' fa-exchange '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cloud-download' },
                    ' fa-cloud-download '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cloud-upload' },
                    ' fa-cloud-upload '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-user-md' },
                    ' fa-user-md '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stethoscope' },
                    ' fa-stethoscope '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-suitcase' },
                    ' fa-suitcase '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bell-o' },
                    ' fa-bell-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-coffee' },
                    ' fa-coffee '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cutlery' },
                    ' fa-cutlery '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-text-o' },
                    ' fa-file-text-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-building-o' },
                    ' fa-building-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hospital-o' },
                    ' fa-hospital-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ambulance' },
                    ' fa-ambulance '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-medkit' },
                    ' fa-medkit '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fighter-jet' },
                    ' fa-fighter-jet '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-beer' },
                    ' fa-beer '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-h-square' },
                    ' fa-h-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-plus-square' },
                    ' fa-plus-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'fa col-lg-3' },
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-double-left' },
                    ' fa-angle-double-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-double-right' },
                    ' fa-angle-double-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-double-up' },
                    ' fa-angle-double-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-double-down' },
                    ' fa-angle-double-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-left' },
                    ' fa-angle-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-right' },
                    ' fa-angle-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-up' },
                    ' fa-angle-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-angle-down' },
                    ' fa-angle-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-desktop' },
                    ' fa-desktop '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-laptop' },
                    ' fa-laptop '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tablet' },
                    ' fa-tablet '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mobile-phone' },
                    ' fa-mobile-phone '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mobile' },
                    ' fa-mobile '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-circle-o' },
                    ' fa-circle-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-quote-left' },
                    ' fa-quote-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-quote-right' },
                    ' fa-quote-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-spinner' },
                    ' fa-spinner '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-circle' },
                    ' fa-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mail-reply' },
                    ' fa-mail-reply '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-reply' },
                    ' fa-reply '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-github-alt' },
                    ' fa-github-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-folder-o' },
                    ' fa-folder-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-folder-open-o' },
                    ' fa-folder-open-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-smile-o' },
                    ' fa-smile-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-frown-o' },
                    ' fa-frown-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-meh-o' },
                    ' fa-meh-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gamepad' },
                    ' fa-gamepad '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-keyboard-o' },
                    ' fa-keyboard-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flag-o' },
                    ' fa-flag-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flag-checkered' },
                    ' fa-flag-checkered '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-terminal' },
                    ' fa-terminal '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-code' },
                    ' fa-code '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mail-reply-all' },
                    ' fa-mail-reply-all '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-reply-all' },
                    ' fa-reply-all '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star-half-empty' },
                    ' fa-star-half-empty '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star-half-full' },
                    ' fa-star-half-full '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-star-half-o' },
                    ' fa-star-half-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-location-arrow' },
                    ' fa-location-arrow '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-crop' },
                    ' fa-crop '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-code-fork' },
                    ' fa-code-fork '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-unlink' },
                    ' fa-unlink '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chain-broken' },
                    ' fa-chain-broken '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-question' },
                    ' fa-question '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-info' },
                    ' fa-info '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-exclamation' },
                    ' fa-exclamation '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-superscript' },
                    ' fa-superscript '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-subscript' },
                    ' fa-subscript '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-eraser' },
                    ' fa-eraser '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-puzzle-piece' },
                    ' fa-puzzle-piece '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-microphone' },
                    ' fa-microphone '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-microphone-slash' },
                    ' fa-microphone-slash '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-shield' },
                    ' fa-shield '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-calendar-o' },
                    ' fa-calendar-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fire-extinguisher' },
                    ' fa-fire-extinguisher '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rocket' },
                    ' fa-rocket '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-maxcdn' },
                    ' fa-maxcdn '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-circle-left' },
                    ' fa-chevron-circle-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-circle-right' },
                    ' fa-chevron-circle-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-circle-up' },
                    ' fa-chevron-circle-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-chevron-circle-down' },
                    ' fa-chevron-circle-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-html5' },
                    ' fa-html5 '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-css3' },
                    ' fa-css3 '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-anchor' },
                    ' fa-anchor '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-unlock-alt' },
                    ' fa-unlock-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bullseye' },
                    ' fa-bullseye '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ellipsis-h' },
                    ' fa-ellipsis-h '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ellipsis-v' },
                    ' fa-ellipsis-v '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rss-square' },
                    ' fa-rss-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-play-circle' },
                    ' fa-play-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ticket' },
                    ' fa-ticket '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-minus-square' },
                    ' fa-minus-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-minus-square-o' },
                    ' fa-minus-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-level-up' },
                    ' fa-level-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-level-down' },
                    ' fa-level-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-check-square' },
                    ' fa-check-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pencil-square' },
                    ' fa-pencil-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-external-link-square' },
                    ' fa-external-link-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-share-square' },
                    ' fa-share-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-compass' },
                    ' fa-compass '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-toggle-down' },
                    ' fa-toggle-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-square-o-down' },
                    ' fa-caret-square-o-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-toggle-up' },
                    ' fa-toggle-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-square-o-up' },
                    ' fa-caret-square-o-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-toggle-right' },
                    ' fa-toggle-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-square-o-right' },
                    ' fa-caret-square-o-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-euro' },
                    ' fa-euro '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-eur' },
                    ' fa-eur '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gbp' },
                    ' fa-gbp '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dollar' },
                    ' fa-dollar '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-usd' },
                    ' fa-usd '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rupee' },
                    ' fa-rupee '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-inr' },
                    ' fa-inr '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cny' },
                    ' fa-cny '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rmb' },
                    ' fa-rmb '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-yen' },
                    ' fa-yen '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-jpy' },
                    ' fa-jpy '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ruble' },
                    ' fa-ruble '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rouble' },
                    ' fa-rouble '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rub' },
                    ' fa-rub '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-won' },
                    ' fa-won '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-krw' },
                    ' fa-krw '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bitcoin' },
                    ' fa-bitcoin '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-btc' },
                    ' fa-btc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file' },
                    ' fa-file '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-text' },
                    ' fa-file-text '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-alpha-asc' },
                    ' fa-sort-alpha-asc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-alpha-desc' },
                    ' fa-sort-alpha-desc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-amount-asc' },
                    ' fa-sort-amount-asc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-amount-desc' },
                    ' fa-sort-amount-desc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-numeric-asc' },
                    ' fa-sort-numeric-asc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sort-numeric-desc' },
                    ' fa-sort-numeric-desc '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-thumbs-up' },
                    ' fa-thumbs-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-thumbs-down' },
                    ' fa-thumbs-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-youtube-square' },
                    ' fa-youtube-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-youtube' },
                    ' fa-youtube '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-xing' },
                    ' fa-xing '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-xing-square' },
                    ' fa-xing-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-youtube-play' },
                    ' fa-youtube-play '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dropbox' },
                    ' fa-dropbox '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stack-overflow' },
                    ' fa-stack-overflow '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-instagram' },
                    ' fa-instagram '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-flickr' },
                    ' fa-flickr '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-adn' },
                    ' fa-adn '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bitbucket' },
                    ' fa-bitbucket '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bitbucket-square' },
                    ' fa-bitbucket-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tumblr' },
                    ' fa-tumblr '
                  ),
                  _react2.default.createElement('br', null),
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'fa col-lg-3' },
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tumblr-square' },
                    ' fa-tumblr-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-long-arrow-down' },
                    ' fa-long-arrow-down '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-long-arrow-up' },
                    ' fa-long-arrow-up '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-long-arrow-left' },
                    ' fa-long-arrow-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-long-arrow-right' },
                    ' fa-long-arrow-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-apple' },
                    ' fa-apple '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-windows' },
                    ' fa-windows '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-android' },
                    ' fa-android '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-linux' },
                    ' fa-linux '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dribbble' },
                    ' fa-dribbble '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-skype' },
                    ' fa-skype '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-foursquare' },
                    ' fa-foursquare '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-trello' },
                    ' fa-trello '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-female' },
                    ' fa-female '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-male' },
                    ' fa-male '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-gittip' },
                    ' fa-gittip '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sun-o' },
                    ' fa-sun-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-moon-o' },
                    ' fa-moon-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-archive' },
                    ' fa-archive '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bug' },
                    ' fa-bug '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-vk' },
                    ' fa-vk '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-weibo' },
                    ' fa-weibo '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-renren' },
                    ' fa-renren '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pagelines' },
                    ' fa-pagelines '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stack-exchange' },
                    ' fa-stack-exchange '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-o-right' },
                    ' fa-arrow-circle-o-right '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-arrow-circle-o-left' },
                    ' fa-arrow-circle-o-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-toggle-left' },
                    ' fa-toggle-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-caret-square-o-left' },
                    ' fa-caret-square-o-left '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-dot-circle-o' },
                    ' fa-dot-circle-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-wheelchair' },
                    ' fa-wheelchair '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-vimeo-square' },
                    ' fa-vimeo-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-turkish-lira' },
                    ' fa-turkish-lira '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-try' },
                    ' fa-try '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-plus-square-o' },
                    ' fa-plus-square-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-space-shuttle' },
                    ' fa-space-shuttle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-slack' },
                    ' fa-slack '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-envelope-square' },
                    ' fa-envelope-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-wordpress' },
                    ' fa-wordpress '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-openid' },
                    ' fa-openid '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-institution' },
                    ' fa-institution '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bank' },
                    ' fa-bank '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-university' },
                    ' fa-university '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-mortar-board' },
                    ' fa-mortar-board '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-graduation-cap' },
                    ' fa-graduation-cap '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-yahoo' },
                    ' fa-yahoo '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-google' },
                    ' fa-google '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-reddit' },
                    ' fa-reddit '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-reddit-square' },
                    ' fa-reddit-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stumbleupon-circle' },
                    ' fa-stumbleupon-circle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-stumbleupon' },
                    ' fa-stumbleupon '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-delicious' },
                    ' fa-delicious '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-digg' },
                    ' fa-digg '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pied-piper-square' },
                    ' fa-pied-piper-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pied-piper' },
                    ' fa-pied-piper '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-pied-piper-alt' },
                    ' fa-pied-piper-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-drupal' },
                    ' fa-drupal '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-joomla' },
                    ' fa-joomla '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-language' },
                    ' fa-language '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-fax' },
                    ' fa-fax '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-building' },
                    ' fa-building '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-child' },
                    ' fa-child '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paw' },
                    ' fa-paw '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-spoon' },
                    ' fa-spoon '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cube' },
                    ' fa-cube '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cubes' },
                    ' fa-cubes '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-behance' },
                    ' fa-behance '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-behance-square' },
                    ' fa-behance-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-steam' },
                    ' fa-steam '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-steam-square' },
                    ' fa-steam-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-recycle' },
                    ' fa-recycle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-automobile' },
                    ' fa-automobile '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-car' },
                    ' fa-car '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-cab' },
                    ' fa-cab '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-taxi' },
                    ' fa-taxi '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tree' },
                    ' fa-tree '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-spotify' },
                    ' fa-spotify '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-deviantart' },
                    ' fa-deviantart '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-soundcloud' },
                    ' fa-soundcloud '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-database' },
                    ' fa-database '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-pdf-o' },
                    ' fa-file-pdf-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-word-o' },
                    ' fa-file-word-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-excel-o' },
                    ' fa-file-excel-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-powerpoint-o' },
                    ' fa-file-powerpoint-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-photo-o' },
                    ' fa-file-photo-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-picture-o' },
                    ' fa-file-picture-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-image-o' },
                    ' fa-file-image-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-zip-o' },
                    ' fa-file-zip-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-archive-o' },
                    ' fa-file-archive-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-sound-o' },
                    ' fa-file-sound-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-audio-o' },
                    ' fa-file-audio-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-movie-o' },
                    ' fa-file-movie-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-video-o' },
                    ' fa-file-video-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-file-code-o' },
                    ' fa-file-code-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-vine' },
                    ' fa-vine '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-codepen' },
                    ' fa-codepen '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-jsfiddle' },
                    ' fa-jsfiddle '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-life-bouy' },
                    ' fa-life-bouy '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-life-saver' },
                    ' fa-life-saver '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-support' },
                    ' fa-support '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-life-ring' },
                    ' fa-life-ring '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-circle-o-notch' },
                    ' fa-circle-o-notch '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ra' },
                    ' fa-ra '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-rebel' },
                    ' fa-rebel '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-ge' },
                    ' fa-ge '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-empire' },
                    ' fa-empire '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-git-square' },
                    ' fa-git-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-git' },
                    ' fa-git '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-hacker-news' },
                    ' fa-hacker-news '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-tencent-weibo' },
                    ' fa-tencent-weibo '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-qq' },
                    ' fa-qq '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-wechat' },
                    ' fa-wechat '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-weixin' },
                    ' fa-weixin '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-send' },
                    ' fa-send '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paper-plane' },
                    ' fa-paper-plane '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-send-o' },
                    ' fa-send-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paper-plane-o' },
                    ' fa-paper-plane-o '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-history' },
                    ' fa-history '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-circle-thin' },
                    ' fa-circle-thin '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-header' },
                    ' fa-header '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-paragraph' },
                    ' fa-paragraph '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-sliders' },
                    ' fa-sliders '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-share-alt' },
                    ' fa-share-alt '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-share-alt-square' },
                    ' fa-share-alt-square '
                  ),
                  _react2.default.createElement('br', null),
                  ' ',
                  _react2.default.createElement(
                    'p',
                    { className: 'fa fa-bomb' },
                    ' fa-bomb '
                  ),
                  _react2.default.createElement('br', null),
                  ' '
                )
              )
            )
          )
        );
      }
    }]);
    return Icons;
  }(_react.Component);
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  exports.default = Icons;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _MorrisjsCharts = __webpack_require__(123);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/morrisjscharts',
  
    action: function action() {
      return _react2.default.createElement(_MorrisjsCharts2.default, null);
    }
  };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _MorrisjsCharts = __webpack_require__(124);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'MorrisjsCharts';
  
  function displayMorrisjsCharts(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_MorrisjsCharts2.default, null);
  }
  
  displayMorrisjsCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayMorrisjsCharts;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var MorrisjsCharts = function (_Component) {
    (0, _inherits3.default)(MorrisjsCharts, _Component);
  
    function MorrisjsCharts() {
      (0, _classCallCheck3.default)(this, MorrisjsCharts);
      return (0, _possibleConstructorReturn3.default)(this, (MorrisjsCharts.__proto__ || (0, _getPrototypeOf2.default)(MorrisjsCharts)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(MorrisjsCharts, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Morris.js Charts'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Area Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Bar Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Line Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Donut Chart Example'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  'Panel contents'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Morris.js Usage'
                  ) },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, ',
                    _react2.default.createElement(
                      'a',
                      { target: '_blank', href: 'http://morrisjs.github.io/morris.js/' },
                      'http://morrisjs.github.io/morris.js/'
                    ),
                    '.'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { bsSize: 'large', block: true, href: 'http://morrisjs.github.io/morris.js/' },
                    'View Morris.js Documentation'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return MorrisjsCharts;
  }(_react.Component);
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  exports.default = MorrisjsCharts;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notification = __webpack_require__(126);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/notification',
  
    action: function action() {
      return _react2.default.createElement(_Notification2.default, null);
    }
  };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notification = __webpack_require__(127);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Notification';
  // import Button from 'react-bootstrap/lib/Button';
  // import Panel from 'react-bootstrap/lib/Panel';
  // import PageHeader from 'react-bootstrap/lib/PageHeader';
  
  
  function displayNotification(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Notification2.default, null);
  }
  
  displayNotification.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayNotification;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Alert = __webpack_require__(128);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _OverlayTrigger = __webpack_require__(129);
  
  var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
  
  var _Tooltip = __webpack_require__(130);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Popover = __webpack_require__(131);
  
  var _Popover2 = _interopRequireDefault(_Popover);
  
  var _Modal = __webpack_require__(132);
  
  var _Modal2 = _interopRequireDefault(_Modal);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
  
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Notifications'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Alert Styles'
                  ) },
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'success' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'info' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'warning' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'danger' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Dismissable Alerts'
                  ) },
                this.state.alertVisibleA ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'success', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('A');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleB ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'info', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('B');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleC ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'warning', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('C');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleD ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'danger', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('D');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Modals'
                  ) },
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'primary', bsSize: 'large', onClick: this.open },
                  'Launch Demo Modal'
                ),
                _react2.default.createElement(
                  _Modal2.default,
                  { show: this.state.showModal, onHide: this.close },
                  _react2.default.createElement(
                    _Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                      _Modal.Title,
                      null,
                      'Modal Title'
                    )
                  ),
                  _react2.default.createElement(
                    _Modal.Body,
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _Modal.Footer,
                    null,
                    _react2.default.createElement(
                      _Button2.default,
                      { onClick: this.close },
                      'Close'
                    ),
                    _react2.default.createElement(
                      _Button2.default,
                      { bsStyle: 'primary' },
                      ' Save changes'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Tooltips and Popovers'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Tooltip Demo'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'left',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip1' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on left'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'top',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip2' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on top'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'bottom',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip3' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on bottom'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'right',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip4' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on right'
                    )
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Clickable Popover Demo'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'left',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover1', title: 'Popover left' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on left'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'top',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover2', title: 'Popover top' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on top'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'bottom',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover3', title: 'Popover bottom' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on bottom'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'right',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover4', title: 'Popover right' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on right'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Notification;
  }(_react.Component);
  
  exports.default = Notification;

/***/ },
/* 128 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Alert");

/***/ },
/* 129 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/OverlayTrigger");

/***/ },
/* 130 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Tooltip");

/***/ },
/* 131 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Popover");

/***/ },
/* 132 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Modal");

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PanelWells = __webpack_require__(134);
  
  var _PanelWells2 = _interopRequireDefault(_PanelWells);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/panelwells',
  
    action: function action() {
      return _react2.default.createElement(_PanelWells2.default, null);
    }
  };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PanelWells = __webpack_require__(135);
  
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
  
  function displayPanelWells(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_PanelWells2.default, null);
  }
  
  displayPanelWells.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayPanelWells;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(64);
  
  var _panel = __webpack_require__(136);
  
  var _panel2 = _interopRequireDefault(_panel);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              _reactBootstrap.PageHeader,
              null,
              'Panels and Wells'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'default',
                headerText: 'Default Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-primary',
                headerText: 'Primary Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-success',
                headerText: 'Success Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-info',
                headerText: 'Info Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-warning',
                headerText: 'Warning Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-danger',
                headerText: 'danger Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-green',
                headerText: 'Green Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-red',
                headerText: 'Red Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(_panel2.default, {
                style: 'panel-yellow',
                headerText: 'Yellow Panel',
                footerText: 'Panel Footer',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Collapsible Accordion Panel Group'
                  ) },
                _react2.default.createElement(
                  _reactBootstrap.Accordion,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Panel,
                    {
                      header: _react2.default.createElement(
                        'h4',
                        { className: 'panel-title' },
                        'Collapsible Group Item #1'
                      ), eventKey: 1
                    },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Panel,
                    {
                      header: _react2.default.createElement(
                        'h4',
                        { className: 'panel-title' },
                        'Collapsible Group Item #2'
                      ), eventKey: '2'
                    },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Panel,
                    {
                      header: _react2.default.createElement(
                        'h4',
                        { className: 'panel-title' },
                        'Collapsible Group Item #3'
                      ), eventKey: '3'
                    },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Basic Tabs'
                  ) },
                _react2.default.createElement(
                  _reactBootstrap.Tabs,
                  { id: 'tabs1', defaultActiveKey: 1 },
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 1, title: 'Home' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Home Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 2, title: 'Profile' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Profile Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 3, title: 'Messages' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Messages Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 4, title: 'Settings' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Settings Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Pill Tabs'
                  ) },
                _react2.default.createElement(
                  _reactBootstrap.Tabs,
                  { id: 'tabs2', bsStyle: 'pills', defaultActiveKey: 1 },
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 1, title: 'Home' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Home Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 2, title: 'Profile' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Profile Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 3, title: 'Messages' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Messages Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 4, title: 'Settings' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Settings Tab'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _reactBootstrap.Well,
                null,
                _react2.default.createElement(
                  'h4',
                  null,
                  'Normal Well'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _reactBootstrap.Well,
                { bsSize: 'large' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Large Well'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _reactBootstrap.Well,
                { bsSize: 'small' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Small Well'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.Jumbotron,
                null,
                _react2.default.createElement(
                  'h1',
                  null,
                  'Jumbotron'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large' },
                    'Learn more'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return PanelWells;
  }(_react.Component);
  
  exports.default = PanelWells;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(64);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var CustomPanel = function (_Component) {
    (0, _inherits3.default)(CustomPanel, _Component);
  
    function CustomPanel() {
      (0, _classCallCheck3.default)(this, CustomPanel);
      return (0, _possibleConstructorReturn3.default)(this, (CustomPanel.__proto__ || (0, _getPrototypeOf2.default)(CustomPanel)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(CustomPanel, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactBootstrap.Panel,
          {
            header: _react2.default.createElement(
              'span',
              null,
              this.props.headerText
            ),
            className: this.props.style,
            footer: _react2.default.createElement(
              'span',
              null,
              this.props.footerText
            )
          },
          this.props.paragraph
        );
      }
    }]);
    return CustomPanel;
  }(_react.Component);
  
  CustomPanel.propTypes = {
    style: _react2.default.PropTypes.string,
    headerText: _react2.default.PropTypes.string,
    footerText: _react2.default.PropTypes.string,
    paragraph: _react2.default.PropTypes.string
  };
  exports.default = CustomPanel;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Typography = __webpack_require__(138);
  
  var _Typography2 = _interopRequireDefault(_Typography);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/typography',
  
    action: function action() {
      return _react2.default.createElement(_Typography2.default, null);
    }
  };

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Typography = __webpack_require__(139);
  
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
  
  function displayTypography(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(_Typography2.default, null);
  }
  
  displayTypography.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayTypography;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Button = __webpack_require__(94);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(95);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(102);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Typography = function (_Component) {
    (0, _inherits3.default)(Typography, _Component);
  
    function Typography() {
      (0, _classCallCheck3.default)(this, Typography);
      return (0, _possibleConstructorReturn3.default)(this, (Typography.__proto__ || (0, _getPrototypeOf2.default)(Typography)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Typography, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Typography'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Headings'
                  ) },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Heading 1',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                ),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Heading 2',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Heading 3',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Heading 4',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                ),
                _react2.default.createElement(
                  'h5',
                  null,
                  'Heading 5',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Heading 6',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Paragraphs'
                  ) },
                _react2.default.createElement(
                  'p',
                  { className: 'lead' },
                  'This is an example of lead body copy.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'This is an example of standard paragraph text. This is an example of ',
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    'link anchor text'
                  ),
                  ' within body copy.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'small',
                    null,
                    'This is an example of small, fine print text.'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'This is an example of strong, bold text.'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'em',
                    null,
                    'This is an example of emphasized, italic text.'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Alignment Helpers'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-left' },
                  'Left aligned text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-center' },
                  'Center aligned text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-right' },
                  'Right aligned text.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Emphasis Classes'
                  ) },
                _react2.default.createElement(
                  'p',
                  { className: 'text-muted' },
                  'This is an example of muted text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-primary' },
                  'This is an example of primary text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-success' },
                  'This is an example of success text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-info' },
                  'This is an example of info text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-warning' },
                  'This is an example of warning text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-danger' },
                  'This is an example of danger text.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Abbreviations'
                  ) },
                _react2.default.createElement(
                  'p',
                  null,
                  'The abbreviation of the word attribute is',
                  _react2.default.createElement(
                    'abbr',
                    { title: 'attribute' },
                    'attr'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'abbr',
                    { title: 'HyperText Markup Language', className: 'initialism' },
                    'HTML'
                  ),
                  'is an abbreviation for a programming language.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Addresses'
                ),
                _react2.default.createElement(
                  'address',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Twitter, Inc.'
                  ),
                  _react2.default.createElement('br', null),
                  '795 Folsom Ave, Suite 600',
                  _react2.default.createElement('br', null),
                  'San Francisco, CA 94107',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'abbr',
                    { title: 'Phone' },
                    'P:'
                  ),
                  '(123) 456-7890'
                ),
                _react2.default.createElement(
                  'address',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Full Name'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:#' },
                    'first.last@example.com'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Blockquotes'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Default Blockquote'
                ),
                _react2.default.createElement(
                  'blockquote',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Blockquote with Citation'
                ),
                _react2.default.createElement(
                  'blockquote',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'small',
                    null,
                    'Someone famous in',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Right Aligned Blockquote'
                ),
                _react2.default.createElement(
                  'blockquote',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Lists'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Unordered List'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        'List Item'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        'List Item'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        'List Item'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Ordered List'
                ),
                _react2.default.createElement(
                  'ol',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Unstyled List'
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'list-unstyled' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Inline List'
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'list-inline' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Description Lists'
                  ) },
                _react2.default.createElement(
                  'dl',
                  null,
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Standard Description List'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'Description Text'
                  ),
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Description List Title'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'Description List Text'
                  )
                ),
                _react2.default.createElement(
                  'dl',
                  { className: 'dl-horizontal' },
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Horizontal Description List'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'Description Text'
                  ),
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Description List Title'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'Description List Text'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Code'
                  ) },
                _react2.default.createElement(
                  'p',
                  null,
                  'This is an example of an inline code element within body copy. Wrap inline code within a',
                  _react2.default.createElement(
                    'code',
                    null,
                    '<code>...</code>'
                  ),
                  'tag.'
                ),
                _react2.default.createElement(
                  'pre',
                  null,
                  'This is an example of preformatted text.'
                )
              )
            )
          )
        );
      }
    }]);
    return Typography;
  }(_react.Component);
  // import Pagination from 'react-bootstrap/lib/Pagination';
  
  
  exports.default = Typography;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _blank = __webpack_require__(141);
  
  var _blank2 = _interopRequireDefault(_blank);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/blank',
  
    action: function action() {
      return _react2.default.createElement(_blank2.default, null);
    }
  };

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(64);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Blank';
  
  function displayBlank(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Blank'
          )
        )
      )
    );
  }
  
  displayBlank.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = displayBlank;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Register = __webpack_require__(143);
  
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
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return _react2.default.createElement(_Register2.default, null);
    }
  };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Register = __webpack_require__(144);
  
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
  
  function Register(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: _Register2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Register2.default.container },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          null,
          '...'
        )
      )
    );
  }
  
  Register.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(145);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Register_root_1hu {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register_container_Ojh {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/register/Register.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Register_root_1hu",
  	"container": "Register_container_Ojh"
  };

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(26);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Content = __webpack_require__(147);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _fetch = __webpack_require__(50);
  
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Content = __webpack_require__(148);
  
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
        return _react2.default.createElement(
          'div',
          { className: _Content2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Content2.default.container },
            this.props.path === '/' ? null : _react2.default.createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
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
  Content.propTypes = {
    path: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string
  };
  exports.default = (0, _withStyles2.default)(_Content2.default)(Content);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(149);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Content.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Content.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Content_root_aWU {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Content_container_2OJ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/content/Content.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Content.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Content_root_aWU",
  	"container": "Content_container_2OJ"
  };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(13);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(54);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render;
      var context = _ref.context;
      var error = _ref.error;
  
      // console.log('error obj inside error index.js', error);
      return render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
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
/* 151 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map