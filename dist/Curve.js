var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";

var WIDTH = 1000;

var Curve = function (_React$PureComponent) {
  _inherits(Curve, _React$PureComponent);

  function Curve() {
    _classCallCheck(this, Curve);

    return _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).apply(this, arguments));
  }

  _createClass(Curve, [{
    key: "computePath",
    value: function computePath() {
      var _props = this.props,
          ratio = _props.ratio,
          tipRatio = _props.tipRatio,
          invert = _props.invert;

      var height = WIDTH * ratio;
      // TODO : use tipRatio
      var leftRatio = tipRatio <= 0.5 ? 0 : tipRatio * 2 - 1;
      var rightRatio = tipRatio >= 0.5 ? 0 : 1 - tipRatio * 2;

      console.log(tipRatio, leftRatio, rightRatio);

      var strength = height * 1;
      var oppositeRatio = 0.5;

      if (invert) {
        return "M0," + height + " L0,0 C0," + (1 - (leftRatio - rightRatio * oppositeRatio)) * strength + " " + WIDTH + "," + (1 - (rightRatio - leftRatio * oppositeRatio)) * strength + " " + WIDTH + ",0 L" + WIDTH + "," + height;
      } else {
        return "M0," + height + " C0," + (leftRatio - rightRatio * oppositeRatio) * strength + " " + WIDTH + "," + (rightRatio - leftRatio * oppositeRatio) * strength + " " + WIDTH + "," + height;
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

      return React.createElement(
        "svg",
        Object.assign({}, props, { viewBox: "0 0 " + WIDTH + " " + ratio * WIDTH }),
        React.createElement("path", { d: this.computePath(), style: { fill: color } })
      );
    }
  }]);

  return Curve;
}(React.PureComponent);

Curve.propTypes = {
  color: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  tipRatio: PropTypes.number,
  invert: PropTypes.bool
};
Curve.defaultProps = {
  ratio: 0.2,
  tipRatio: 0.5,
  invert: false
};
export default Curve;