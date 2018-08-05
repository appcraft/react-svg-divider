import React from "react";
import PropTypes from "prop-types";

const WIDTH = 1000;

export default class Zigzag extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    count: PropTypes.number
  };

  static defaultProps = {
    count: 20
  };

  computeHeight() {
    const size = WIDTH / this.props.count;
    return (size * Math.sqrt(3)) / 2;
  }

  computePoints() {
    const { count } = this.props;
    const points = [];
    const size = WIDTH / count;
    const height = this.computeHeight();
    console.log("size", size);
    for (let i = 0; i < count; i++) {
      points.push([i * size, 0]);
      points.push([(i + 0.5) * size, height - 1]);
    }
    points.push([WIDTH, 0]); // Close last one
    points.push([WIDTH, height]); // Move down
    points.push([0, height]); // Back to start
    return points;
  }

  render() {
    const { color, count, ...props } = this.props;

    const height = this.computeHeight();
    const svgPoints = this.computePoints()
      .map(xy => xy.join(","))
      .join(" ");
    return (
      <svg {...props} viewBox={`0 0 ${WIDTH} ${height}`}>
        <polygon points={svgPoints} style={{ fill: color }} />
      </svg>
    );
  }
}
