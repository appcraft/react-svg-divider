var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";

var WIDTH = 1000;

var Triangle = function (_React$PureComponent) {
  _inherits(Triangle, _React$PureComponent);

  function Triangle() {
    _classCallCheck(this, Triangle);

    return _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).apply(this, arguments));
  }

  _createClass(Triangle, [{
    key: "computePoints",
    value: function computePoints() {
      var _props = this.props,
          ratio = _props.ratio,
          tipRatio = _props.tipRatio,
          invert = _props.invert;

      var height = WIDTH * ratio;
      if (invert) {
        return [[0, height], [WIDTH * tipRatio, 0], [WIDTH, height]];
      } else {
        return [[0, 0], [WIDTH * tipRatio, height - 1], [WIDTH, 0], [WIDTH, height], [0, height]];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          color = _props2.color,
          ratio = _props2.ratio,
          tipRatio = _props2.tipRatio,
          invert = _props2.invert,
          props = _objectWithoutProperties(_props2, ["color", "ratio", "tipRatio", "invert"]);

      var svgPoints = this.computePoints().map(function (xy) {
        return xy.join(",");
      }).join(" ");
      return React.createElement(
        "svg",
        Object.assign({}, props, { viewBox: "0 0 " + WIDTH + " " + ratio * WIDTH }),
        React.createElement("polygon", { points: svgPoints, style: { fill: color } })
      );
    }
  }]);

  return Triangle;
}(React.PureComponent);

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  tipRatio: PropTypes.number,
  invert: PropTypes.bool
};
Triangle.defaultProps = {
  ratio: 0.2,
  tipRatio: 0.5,
  invert: false
};
export default Triangle;