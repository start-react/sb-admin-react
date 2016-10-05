'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTicksOfScale = exports.getLegendProps = exports.getMainColorOfGraphicItem = exports.calculateActiveTickIndex = exports.getTicksOfAxis = exports.getCoordinatesOfGrid = exports.isCategorialAxis = exports.getDomainOfItemsWithSameAxis = exports.getDomainOfStackGroups = exports.getDomainOfDataByKey = exports.calculateDomainOfTicks = exports.getStackedDataOfItem = exports.getStackGroupsByAxisId = exports.getStackedData = exports.detectReferenceElementsDomain = undefined;

var _uniqueId2 = require('lodash/uniqueId');

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ReactUtils = require('./ReactUtils');

var _ReferenceDot = require('../cartesian/ReferenceDot');

var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

var _ReferenceLine = require('../cartesian/ReferenceLine');

var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

var _ReferenceArea = require('../cartesian/ReferenceArea');

var _ReferenceArea2 = _interopRequireDefault(_ReferenceArea);

var _Legend = require('../component/Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _rechartsScale = require('recharts-scale');

var _d3Shape = require('d3-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-param-reassign: 0 */
var offsetSign = function offsetSign(series, order) {
  var n = series.length;
  if (n <= 0) {
    return;
  }

  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;

    for (var i = 0; i < n; ++i) {
      var value = isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
    }
  }
};

var STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: _d3Shape.stackOffsetExpand,
  none: _d3Shape.stackOffsetNone,
  silhouette: _d3Shape.stackOffsetSilhouette,
  wiggle: _d3Shape.stackOffsetWiggle
};

var detectReferenceElementsDomain = exports.detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType) {
  var lines = (0, _ReactUtils.findAllByType)(children, _ReferenceLine2.default);
  var dots = (0, _ReactUtils.findAllByType)(children, _ReferenceDot2.default);
  var elements = lines.concat(dots);
  var areas = (0, _ReactUtils.findAllByType)(children, _ReferenceArea2.default);
  var idKey = axisType + 'Id';
  var valueKey = axisType[0];
  var finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce(function (result, el) {
      if (el.props[idKey] === axisId && el.props.alwaysShow && (0, _isNumber3.default)(el.props[valueKey])) {
        var value = el.props[valueKey];

        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }

  if (areas.length) {
    (function () {
      var key1 = valueKey + '1';
      var key2 = valueKey + '2';

      finalDomain = areas.reduce(function (result, el) {
        if (el.props[idKey] === axisId && el.props.alwaysShow && (0, _isNumber3.default)(el.props[key1]) && (0, _isNumber3.default)(el.props[key2])) {
          var value1 = el.props[key1];
          var value2 = el.props[key2];

          return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
        }
        return result;
      }, finalDomain);
    })();
  }

  return finalDomain;
};

var getStackedData = exports.getStackedData = function getStackedData(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function (item) {
    return item.props.dataKey;
  });
  var stack = (0, _d3Shape.stack)().keys(dataKeys).value(function (d, key) {
    return +d[key] || 0;
  }).order(_d3Shape.stackOrderNone).offset(STACK_OFFSET_MAP[offsetType]);

  return stack(data);
};

var getStackGroupsByAxisId = exports.getStackGroupsByAxisId = function getStackGroupsByAxisId(data, items, numericAxisId, cateAxisId, offsetType) {
  var stackGroups = items.reduce(function (result, item) {
    var _item$props = item.props;
    var stackId = _item$props.stackId;
    var dataKey = _item$props.dataKey;

    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if ((0, _isNumber3.default)(stackId) || (0, _isString3.default)(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || { items: [] };

      childGroup.items.push(item);

      if (childGroup.items.length >= 2) {
        parentGroup.hasStack = true;
      }

      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[(0, _uniqueId3.default)('_stackId_')] = {
        numericAxisId: numericAxisId, cateAxisId: cateAxisId, items: [item]
      };
    }

    return _extends({}, result, _defineProperty({}, axisId, parentGroup));
  }, {});

  return Object.keys(stackGroups).reduce(function (result, axisId) {
    var group = stackGroups[axisId];

    if (group.hasStack) {
      group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
        var g = group.stackGroups[stackId];

        return _extends({}, res, _defineProperty({}, stackId, {
          numericAxisId: numericAxisId,
          cateAxisId: cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, {});
    }

    return _extends({}, result, _defineProperty({}, axisId, group));
  }, {});
};

var getStackedDataOfItem = exports.getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
  var stackId = item.props.stackId;


  if ((0, _isNumber3.default)(stackId) || (0, _isString3.default)(stackId)) {
    var group = stackGroups[stackId];

    if (group && group.items.length) {
      var itemIndex = -1;

      for (var i = 0, len = group.items.length; i < len; i++) {
        if (group.items[i] === item) {
          itemIndex = i;
          break;
        }
      }
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }

  return null;
};
/**
 * get domain of ticks
 * @param  {Array} ticks Ticks of axis
 * @param  {String} type  The type of axis
 * @return {Array} domain
 */
var calculateDomainOfTicks = exports.calculateDomainOfTicks = function calculateDomainOfTicks(ticks, type) {
  if (type === 'number') {
    return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
  }

  return ticks;
};

/**
 * Get domain of data by key
 * @param  {Array} data   The data displayed in the chart
 * @param  {String} key  The unique key of a group of data
 * @param  {String} type The type of axis
 * @return {Array} Domain of data
 */
var getDomainOfDataByKey = exports.getDomainOfDataByKey = function getDomainOfDataByKey(data, key, type) {
  if (type === 'number') {
    var domain = data.map(function (entry) {
      return entry[key];
    }).filter(_isNumber3.default);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }

  return data.map(function (entry) {
    var value = entry[key];

    return (0, _isNumber3.default)(value) || (0, _isString3.default)(value) ? value : '';
  });
};

var getDomainOfSingle = function getDomainOfSingle(data) {
  return data.reduce(function (result, entry) {
    return [Math.min.apply(null, entry.concat([result[0]]).filter(_isNumber3.default)), Math.max.apply(null, entry.concat([result[1]]).filter(_isNumber3.default))];
  }, [Infinity, -Infinity]);
};

var getDomainOfStackGroups = exports.getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function (result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;

    var domain = stackedData.reduce(function (res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));

      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);

    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function (result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};

/**
 * Get domain of data by the configuration of item element
 * @param  {Array} data   The data displayed in the chart
 * @param  {Array} items  The instances of item
 * @param  {String} type  The type of axis, number - Number Axis, category - Category Axis
 * @return {Array}        Domain
 */
var getDomainOfItemsWithSameAxis = exports.getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type) {
  var domains = items.map(function (item) {
    return getDomainOfDataByKey(data, item.props.dataKey, type);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  var tag = {};
  // Get the union set of category axis
  return domains.reduce(function (result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;

        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};

var isCategorialAxis = exports.isCategorialAxis = function isCategorialAxis(layout, axisType) {
  return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis';
};
/**
* Calculate the Coordinates of grid
* @param  {Array} ticks The ticks in axis
* @param {Number} min   The minimun value of axis
* @param {Number} max   The maximun value of axis
* @return {Array}       Coordinates
*/
var getCoordinatesOfGrid = exports.getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, min, max) {
  var hasMin = void 0;
  var hasMax = void 0;

  var values = ticks.map(function (entry) {
    if (entry.coordinate === min) {
      hasMin = true;
    }
    if (entry.coordinate === max) {
      hasMax = true;
    }

    return entry.coordinate;
  });

  if (!hasMin) {
    values.push(min);
  }
  if (!hasMax) {
    values.push(max);
  }

  return values;
};

/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
var getTicksOfAxis = exports.getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain;
  var type = axis.type;

  var offset = (isGrid || isAll) && type === 'category' ? scale.bandwidth() / 2 : 0;

  // The ticks setted by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(function (entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        coordinate: scale(scaleContent) + offset,
        value: entry
      };
    });
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function (entry) {
      return { coordinate: scale(entry) + offset, value: entry };
    });
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(function (entry) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry
    };
  });
};

var calculateActiveTickIndex = exports.calculateActiveTickIndex = function calculateActiveTickIndex(coordinate, ticks) {
  var index = -1;
  var len = ticks.length;

  if (len > 1) {
    for (var i = 0; i < len; i++) {
      if (i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i > 0 && i < len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2) {
        index = i;
        break;
      }
    }
  } else {
    index = 0;
  }

  return index;
};

/**
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */
var getMainColorOfGraphicItem = exports.getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
  var displayName = item.type.displayName;
  var result = void 0;

  switch (displayName) {
    case 'Line':
    case 'Area':
      result = item.props.stroke;
      break;
    default:
      result = item.props.fill;
      break;
  }

  return result;
};

var getLegendProps = exports.getLegendProps = function getLegendProps(children, graphicItems, width, height) {
  var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);

  if (!legendItem) {
    return null;
  }

  var legendData = legendItem.props && legendItem.props.payload || graphicItems.map(function (child) {
    var _child$props = child.props;
    var dataKey = _child$props.dataKey;
    var name = _child$props.name;
    var legendType = _child$props.legendType;


    return {
      dataKey: dataKey,
      type: legendType || 'square',
      color: getMainColorOfGraphicItem(child),
      value: name || dataKey
    };
  }, undefined);

  return _extends({}, legendItem.props, _Legend2.default.getWithHeight(legendItem, width, height), {
    payload: legendData
  });
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
var getTicksOfScale = exports.getTicksOfScale = function getTicksOfScale(scale, opts) {
  var type = opts.type;
  var tickCount = opts.tickCount;
  var ticks = opts.ticks;
  var originalDomain = opts.originalDomain;
  var allowDecimals = opts.allowDecimals;


  if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    var domain = scale.domain();
    var tickValues = (0, _rechartsScale.getNiceTickValues)(domain, tickCount, allowDecimals);

    scale.domain(calculateDomainOfTicks(tickValues, type));

    return { niceTicks: tickValues };
  } else if (tickCount && type === 'number') {
    var _domain = scale.domain();
    var _tickValues = (0, _rechartsScale.getTickValues)(_domain, tickCount, allowDecimals);

    return { niceTicks: _tickValues };
  }

  return null;
};