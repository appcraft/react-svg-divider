var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";

var WIDTH = 1000;

var Zigzag = function (_React$PureComponent) {
  _inherits(Zigzag, _React$PureComponent);

  function Zigzag() {
    _classCallCheck(this, Zigzag);

    return _possibleConstructorReturn(this, (Zigzag.__proto__ || Object.getPrototypeOf(Zigzag)).apply(this, arguments));
  }

  _createClass(Zigzag, [{
    key: "computeHeight",
    value: function computeHeight() {
      var size = WIDTH / this.props.count;
      return size * Math.sqrt(3) / 2;
    }
  }, {
    key: "computePoints",
    value: function computePoints() {
      var count = this.props.count;

      var points = [];
      var size = WIDTH / count;
      var height = this.computeHeight();
      console.log("size", size);
      for (var i = 0; i < count; i++) {
        points.push([i * size, 0]);
        points.push([(i + 0.5) * size, height - 1]);
      }
      points.push([WIDTH, 0]); // Close last one
      points.push([WIDTH, height]); // Move down
      points.push([0, height]); // Back to start
      return points;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          color = _props.color,
          count = _props.count,
          props = _objectWithoutProperties(_props, ["color", "count"]);

      var height = this.computeHeight();
      var svgPoints = this.computePoints().map(function (xy) {
        return xy.join(",");
      }).join(" ");
      return React.createElement(
        "svg",
        Object.assign({}, props, { viewBox: "0 0 " + WIDTH + " " + height }),
        React.createElement("polygon", { points: svgPoints, style: { fill: color } })
      );
    }
  }]);

  return Zigzag;
}(React.PureComponent);

Zigzag.propTypes = {
  color: PropTypes.string.isRequired,
  count: PropTypes.number
};
Zigzag.defaultProps = {
  count: 20
};
export default Zigzag;