import React from "react";
import PropTypes from "prop-types";

const WIDTH = 1000;

export default class Triangle extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    ratio: PropTypes.number,
    tipRatio: PropTypes.number,
    invert: PropTypes.bool
  };

  static defaultProps = {
    ratio: 0.2,
    tipRatio: 0.5,
    invert: false
  };

  computePoints() {
    const { ratio, tipRatio, invert } = this.props;
    const height = WIDTH * ratio;
    if (invert) {
      return [[0, height], [WIDTH * tipRatio, 0], [WIDTH, height]];
    } else {
      return [[0, 0], [WIDTH * tipRatio, height - 1], [WIDTH, 0], [WIDTH, height], [0, height]];
    }
  }

  render() {
    const { color, ratio, tipRatio, invert, ...props } = this.props;

    const svgPoints = this.computePoints()
      .map(xy => xy.join(","))
      .join(" ");
    return (
      <svg {...props} viewBox={`0 0 ${WIDTH} ${ratio * WIDTH}`}>
        <polygon points={svgPoints} style={{ fill: color }} />
      </svg>
    );
  }
}
