import React from "react";
import PropTypes from "prop-types";

const WIDTH = 1000;

export default class Diagonal extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    ratio: PropTypes.number,
    flip: PropTypes.bool
  };

  static defaultProps = {
    ratio: 0.2,
    flip: false
  };

  computePoints() {
    const { ratio, flip } = this.props;
    const height = WIDTH * ratio;
    if (flip) {
      return [[0, height], [WIDTH, height], [WIDTH, 0]];
    } else {
      return [[0, 0], [0, height], [WIDTH, height]];
    }
  }

  render() {
    const { color, ratio, flip, ...props } = this.props;

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
