'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduceCssCalc = require('reduce-css-calc');

var _reduceCssCalc2 = _interopRequireDefault(_reduceCssCalc);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ReactUtils = require('../util/ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (_temp2 = _class = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wordsByLines: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Text, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateWordsByLines(this.props, true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var calculateWordWidths = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
      this.updateWordsByLines(nextProps, calculateWordWidths);
    }
  }, {
    key: 'updateWordsByLines',
    value: function updateWordsByLines(props, calculateWordWidths) {
      // Only perform calculations if using features that require them (multiline, scaleToFit)
      if (props.width || props.scaleToFit) {
        if (calculateWordWidths) {
          var _calculateWordWidths = this.calculateWordWidths(props);

          var wordsWithComputedWidth = _calculateWordWidths.wordsWithComputedWidth;
          var spaceWidth = _calculateWordWidths.spaceWidth;

          this.wordsWithComputedWidth = wordsWithComputedWidth;
          this.spaceWidth = spaceWidth;
        }

        var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
        this.setState({ wordsByLines: wordsByLines });
      } else {
        var words = props.children ? props.children.toString().split(/\s+/) : [];
        this.setState({ wordsByLines: [{ words: words }] });
      }
    }
  }, {
    key: 'calculateWordWidths',
    value: function calculateWordWidths(props) {
      // Calculate length of each word to be used to determine number of words per line
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      (0, _assign3.default)(text.style, props.style);
      svg.appendChild(text);
      document.body.appendChild(svg);

      var words = props.children ? props.children.toString().split(/\s+/) : [];
      var wordsWithComputedWidth = words.map(function (word) {
        text.textContent = word;
        return { word: word, width: text.getComputedTextLength() };
      });

      text.textContent = ' '; // Unicode space
      var spaceWidth = text.getComputedTextLength();

      document.body.removeChild(svg);

      return { wordsWithComputedWidth: wordsWithComputedWidth, spaceWidth: spaceWidth };
    }
  }, {
    key: 'calculateWordsByLines',
    value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
      var scaleToFit = this.props.scaleToFit;

      return wordsWithComputedWidth.reduce(function (result, _ref2) {
        var word = _ref2.word;
        var width = _ref2.width;

        var currentLine = result[result.length - 1];

        if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
          // Word can be added to an existing line
          currentLine.words.push(word);
          currentLine.width += width + spaceWidth;
        } else {
          // Add first word to line or word is too long to scaleToFit on existing line
          var newLine = { words: [word], width: width };
          result.push(newLine);
        }

        return result;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var textAnchor = _props.textAnchor;
      var verticalAnchor = _props.verticalAnchor;
      var scaleToFit = _props.scaleToFit;
      var angle = _props.angle;
      var lineHeight = _props.lineHeight;
      var capHeight = _props.capHeight;
      var className = _props.className;

      var textProps = _objectWithoutProperties(_props, ['textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'className']);

      var wordsByLines = this.state.wordsByLines;
      var x = textProps.x;
      var y = textProps.y;


      var startDy = void 0;
      switch (verticalAnchor) {
        case 'start':
          startDy = (0, _reduceCssCalc2.default)('calc(' + capHeight + ')');
          break;
        case 'middle':
          startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
          break;
        default:
          startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
          break;
      }

      var transforms = [];
      if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        transforms.push('scale(' + this.props.width / lineWidth + ')');
      }
      if (angle) {
        transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
      }
      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return _react2.default.createElement(
        'text',
        _extends({}, (0, _ReactUtils.getPresentationAttributes)(textProps), {
          className: (0, _classnames2.default)('recharts-text', className),
          textAnchor: textAnchor
        }),
        wordsByLines.map(function (line, index) {
          return _react2.default.createElement(
            'tspan',
            { x: x, dy: index === 0 ? startDy : lineHeight, key: index },
            line.words.join(' ')
          );
        })
      );
    }
  }]);

  return Text;
}(_react.Component), _class.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  scaleToFit: _react.PropTypes.bool,
  angle: _react.PropTypes.number,
  textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  verticalAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end'])
}), _class.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em', // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end' }, _temp2);
exports.default = Text;