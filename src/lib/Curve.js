import React from "react";
import PropTypes from "prop-types";

const WIDTH = 1000;

export default class Curve extends React.PureComponent {
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

  computePath() {
    const { ratio, tipRatio, invert } = this.props;
    const height = WIDTH * ratio;
    // TODO : use tipRatio
    const leftRatio = tipRatio <= 0.5 ? 0 : tipRatio * 2 - 1;
    const rightRatio = tipRatio >= 0.5 ? 0 : 1 - tipRatio * 2;

    console.log(tipRatio, leftRatio, rightRatio);

    const strength = height * 1;
    const oppositeRatio = 0.5;

    if (invert) {
      return `M0,${height} L0,0 C0,${(1 - (leftRatio - rightRatio * oppositeRatio)) * strength} ${WIDTH},${(1 -
        (rightRatio - leftRatio * oppositeRatio)) *
        strength} ${WIDTH},0 L${WIDTH},${height}`;
    } else {
      return `M0,${height} C0,${(leftRatio - rightRatio * oppositeRatio) * strength} ${WIDTH},${(rightRatio -
        leftRatio * oppositeRatio) *
        strength} ${WIDTH},${height}`;
    }
  }

  render() {
    const { color, ratio, tipRatio, invert, ...props } = this.props;

    return (
      <svg {...props} viewBox={`0 0 ${WIDTH} ${ratio * WIDTH}`}>
        <path d={this.computePath()} style={{ fill: color }} />
      </svg>
    );
  }
}
