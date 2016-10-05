'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactContainerDimensions = require('react-container-dimensions');

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _DataUtils = require('../util/DataUtils');

var _LogUtils = require('../util/LogUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(_ref) {
  var aspect = _ref.aspect;
  var width = _ref.width;
  var height = _ref.height;
  var minWidth = _ref.minWidth;
  var minHeight = _ref.minHeight;
  var container = _ref.container;
  var children = _ref.children;

  (0, _LogUtils.warn)((0, _DataUtils.isPercent)(width) || (0, _DataUtils.isPercent)(height), 'The width(%s) and height(%s) are both fixed numbers,\n     maybe you don\'t need to use a ResponsiveContainer.', width, height);

  (0, _LogUtils.warn)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

  var calculatedWidth = (0, _DataUtils.isPercent)(width) ? container.width : width;
  var calculatedHeight = (0, _DataUtils.isPercent)(height) ? container.height : height;

  if (aspect && aspect > 0) {
  // Preserve the desired aspect ratio
  calculatedHeight = calculatedWidth / aspect;
}

  (0, _LogUtils.warn)(calculatedWidth > 0 && calculatedHeight > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n     please check the style of container, or the props width(%s) and height(%s),\n     or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n     height and width.', calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);

  return _react2.default.cloneElement(children, {
    width: calculatedWidth,
    height: calculatedHeight
  });
};

var ResponsiveContainer = function ResponsiveContainer(props) {
  var minWidth = props.minWidth;
  var minHeight = props.minHeight;
  var width = props.width;
  var height = props.height;

  var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight };
  return _react2.default.createElement(
    'div',
    { className: 'recharts-responsive-container', style: style },
    _react2.default.createElement(
      _reactContainerDimensions2.default,
      null,
      function (container) {
        return render(_extends({
          container: container
        }, props));
      }
    )
  );
};

ResponsiveContainer.displayName = 'ResponsiveContainer';
ResponsiveContainer.propTypes = {
  aspect: _react.PropTypes.number,
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  minHeight: _react.PropTypes.number,
  minWidth: _react.PropTypes.number,
  children: _react.PropTypes.node.isRequired
};

ResponsiveContainer.defaultProps = {
  width: '100%',
  height: '100%'
};

exports.default = ResponsiveContainer;
