'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Area
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Area = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Area, _Component);

  function Area(props, ctx) {
    _classCallCheck(this, Area);

    var _this = _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, props, ctx));

    _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    };

    _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    };

    var points = props.points;

    _this.state = { isAnimationFinished: true };
    if (!_this.id) {
      _this.id = 'clipPath' + Date.now();
    }
    return _this;
  }

  _createClass(Area, [{
    key: 'renderCurve',
    value: function renderCurve() {
      var _props = this.props;
      var layout = _props.layout;
      var type = _props.type;
      var curve = _props.curve;
      var points = _props.points;
      var connectNulls = _props.connectNulls;


      return _react2.default.createElement(
        'g',
        null,
        curve && _react2.default.createElement(_Curve2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: points
        })),
        _react2.default.createElement(_Curve2.default, _extends({}, this.props, {
          stroke: 'none',
          className: 'recharts-area-area'
        }))
      );
    }
  }, {
    key: 'renderHorizontalRect',
    value: function renderHorizontalRect(alpha) {
      var _props2 = this.props;
      var baseLine = _props2.baseLine;
      var layout = _props2.layout;
      var points = _props2.points;
      var strokeWidth = _props2.strokeWidth;

      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = Math.max.apply(null, points.map(function (entry) {
        return entry.y || 0;
      }));

      if ((0, _isNumber3.default)(baseLine)) {
        maxY = Math.max(baseLine, maxY);
      } else {
        maxY = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.y || 0;
        })), maxY);
      }

      return _react2.default.createElement('rect', {
        x: startX < endX ? startX : startX - width,
        y: 0,
        width: width,
        height: maxY + (strokeWidth || 1)
      });
    }
  }, {
    key: 'renderVerticalRect',
    value: function renderVerticalRect(alpha) {
      var _props3 = this.props;
      var baseLine = _props3.baseLine;
      var layout = _props3.layout;
      var points = _props3.points;
      var strokeWidth = _props3.strokeWidth;

      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = Math.max.apply(null, points.map(function (entry) {
        return entry.x || 0;
      }));

      if ((0, _isNumber3.default)(baseLine)) {
        maxX = Math.max(baseLine, maxX);
      } else {
        maxX = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
          return entry.x || 0;
        })), maxX);
      }

      return _react2.default.createElement('rect', {
        x: 0,
        y: startY < endY ? startY : startY - height,
        width: maxX + (strokeWidth || 1),
        height: height
      });
    }
  }, {
    key: 'renderClipRect',
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;


      if (layout === 'vertical') {
        return this.renderVerticalRect(alpha);
      }

      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: 'renderClipPath',
    value: function renderClipPath() {
      var _this2 = this;

      var _props4 = this.props;
      var isAnimationActive = _props4.isAnimationActive;
      var animationDuration = _props4.animationDuration;
      var animationEasing = _props4.animationEasing;
      var animationBegin = _props4.animationBegin;
      var animationId = _props4.animationId;


      return _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement(
          'clipPath',
          { id: this.id },
          _react2.default.createElement(
            _reactSmooth2.default,
            {
              easing: animationEasing,
              isActive: isAnimationActive,
              duration: animationDuration,
              key: animationId,
              animationBegin: animationBegin,
              onAnimationStart: this.handleAnimationStart,
              onAnimationEnd: this.handleAnimationEnd,
              from: { alpha: 0 },
              to: { alpha: 1 }
            },
            function (_ref) {
              var alpha = _ref.alpha;
              return _this2.renderClipRect(alpha);
            }
          )
        )
      );
    }
  }, {
    key: 'renderDotItem',
    value: function renderDotItem(option, props) {
      var dotItem = void 0;

      if (_react2.default.isValidElement(option)) {
        dotItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dotItem = option(props);
      } else {
        dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-area-dot' }));
      }

      return dotItem;
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this3 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props5 = this.props;
      var dot = _props5.dot;
      var points = _props5.points;

      var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, areaProps, customDotProps, {
          cx: entry.x,
          cy: entry.y,
          index: i,
          playload: entry
        });

        return _this3.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-area-dots' },
        dots
      );
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = void 0;

      if (_react2.default.isValidElement(option)) {
        labelItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        labelItem = option(props);
      } else {
        labelItem = _react2.default.createElement(
          _Text2.default,
          _extends({
            key: props.key
          }, props, {
            className: 'recharts-area-label'
          }),
          (0, _isArray3.default)(value) ? value[1] : value
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels() {
      var _this4 = this;

      var isAnimationActive = this.props.isAnimationActive;


      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _props6 = this.props;
      var points = _props6.points;
      var label = _props6.label;

      var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, entry, areaProps, customLabelProps, {
          index: i,
          key: 'label-' + i,
          payload: entry
        });

        return _this4.renderLabelItem(label, labelProps, entry.value);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-area-labels' },
        labels
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props;
      var dot = _props7.dot;
      var label = _props7.label;
      var points = _props7.points;
      var className = _props7.className;


      if (!points || !points.length) {
        return null;
      }

      var hasSinglePoint = points.length === 1;
      var layerClass = (0, _classnames2.default)('recharts-area', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        !hasSinglePoint ? this.renderClipPath() : null,
        !hasSinglePoint ? _react2.default.createElement(
          'g',
          { clipPath: 'url(#' + this.id + ')' },
          this.renderCurve()
        ) : null,
        (dot || hasSinglePoint) && this.renderDots(),
        label && this.renderLabels()
      );
    }
  }]);

  return Area;
}(_react.Component), _class2.displayName = 'Area', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  className: _react.PropTypes.string,
  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
  type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  stackId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  connectNulls: _react.PropTypes.bool,

  activeDot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
  // dot configuration
  dot: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
  // have curve configuration
  curve: _react.PropTypes.bool,
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array])
  })),
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func,

  animationId: _react.PropTypes.number,
  isAnimationActive: _react.PropTypes.bool,
  animationBegin: _react.PropTypes.number,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  strokeWidth: 1,
  stroke: '#3182bd',
  fill: '#3182bd',
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'line',
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  label: false,
  curve: true,
  activeDot: true,

  isAnimationActive: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp)) || _class;

exports.default = Area;