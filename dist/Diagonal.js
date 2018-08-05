var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";

var WIDTH = 1000;

var Diagonal = function (_React$PureComponent) {
  _inherits(Diagonal, _React$PureComponent);

  function Diagonal() {
    _classCallCheck(this, Diagonal);

    return _possibleConstructorReturn(this, (Diagonal.__proto__ || Object.getPrototypeOf(Diagonal)).apply(this, arguments));
  }

  _createClass(Diagonal, [{
    key: "computePoints",
    value: function computePoints() {
      var _props = this.props,
          ratio = _props.ratio,
          flip = _props.flip;

      var height = WIDTH * ratio;
      if (flip) {
        return [[0, height], [WIDTH, height], [WIDTH, 0]];
      } else {
        return [[0, 0], [0, height], [WIDTH, height]];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          color = _props2.color,
          ratio = _props2.ratio,
          flip = _props2.flip,
          props = _objectWithoutProperties(_props2, ["color", "ratio", "flip"]);

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

  return Diagonal;
}(React.PureComponent);

Diagonal.propTypes = {
  color: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  flip: PropTypes.bool
};
Diagonal.defaultProps = {
  ratio: 0.2,
  flip: false
};
export default Diagonal;