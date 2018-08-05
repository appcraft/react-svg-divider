import React from "react";
import { render } from "react-dom";
import { Curve, Diagonal, Triangle, Zigzag } from "./lib";

import "./demo.css";

const diagonalFields = [
  { field: "color", type: "string" },
  { field: "flip", type: "bool" },
  { field: "ratio", type: "range", min: 0.05, max: 1, step: 0.05 }
];

const triangleFields = [
  { field: "color", type: "string" },
  { field: "ratio", type: "range", min: 0.05, max: 1, step: 0.05 },
  { field: "tipRatio", type: "range", min: 0, max: 1, step: 0.05 },
  { field: "invert", type: "bool" },
];
const curveFields = [
  { field: "color", type: "string" },
  { field: "ratio", type: "range", min: 0.05, max: 1, step: 0.05 },
  { field: "tipRatio", type: "range", min: 0, max: 1, step: 0.05 },
  { field: "invert", type: "bool" },
];
const zigzagFields = [
  { field: "color", type: "string" },
  { field: "count", type: "range", min: 10, max: 40, step: 1 }
];

class Editor extends React.Component {
  render() {
    const { fields } = this.props;
    return <form className="pure-form">{fields.map(this.renderField)}</form>;
  }

  renderField = fieldInfo => {
    const { field, type } = fieldInfo;
    const { values, onChange } = this.props;
    switch (type) {
      case "bool":
        return (
          <label key={field}>
            <input type="checkbox" value={values[field]} onChange={evt => onChange(field, evt.target.checked)} />{" "}
            {field}
          </label>
        );
      case "range":
        return (
          <label key={field}>
            {field}{" "}
            <input
              type="range"
              value={values[field]}
              onChange={evt => onChange(field, Number(evt.target.value))}
              min={fieldInfo.min}
              max={fieldInfo.max}
              step={fieldInfo.step}
            />
            <input
              type="number"
              value={values[field]}
              onChange={evt => onChange(field, evt.target.value)}
              min={fieldInfo.min}
              max={fieldInfo.max}
              step={fieldInfo.step}
            />
          </label>
        );
      case "number":
        return (
          <label key={field}>
            {field} <input type="number" value={values[field]} onChange={evt => onChange(field, evt.target.value)} />
          </label>
        );
      case "string":
      default:
        return (
          <label key={field}>
            {field} <input type="text" value={values[field]} onChange={evt => onChange(field, evt.target.value)} />
          </label>
        );
    }
  };
}

class ComponentDemo extends React.Component {
  state = { ...this.props.defaultProps };

  handleChange = (key, value) => this.setState({ [key]: value });

  render() {
    const { title, Component, fields } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div className="demo">
          <div className="demo__editor">
            <Editor fields={fields} values={this.state} onChange={this.handleChange} />
          </div>
          <div className="demo__preview">
            <div
              style={{
                background: "linear-gradient(#e66465, #9198e5)",
                minHeight: 200,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <h3 style={{ color: "white", textAlign: "center", padding: 16 }}>{title} demo</h3>
              <Component {...this.state} style={{ position: "absolute", left: 0, bottom: 0, right: 0 }} />
            </div>
            <div style={{ backgroundColor: this.state.color, padding: 16 }}>
              <h3 style={{ textAlign: "center" }}>Next section</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div style={{ width: 1024, margin: "15px auto" }}>
    <h1>React SVG Divider</h1>
    <ComponentDemo
      title="Diagonal"
      Component={Diagonal}
      defaultProps={{ color: "#F7F7F7", ratio: 0.2 }}
      fields={diagonalFields}
    />
    <ComponentDemo
      title="Triangle"
      Component={Triangle}
      defaultProps={{ color: "#F7F7F7", ratio: 0.2, tipRatio: 0.5 }}
      fields={triangleFields}
    />
    <ComponentDemo
      title="Curve"
      Component={Curve}
      defaultProps={{ color: "#F7F7F7", ratio: 0.2, tipRatio: 0.5 }}
      fields={curveFields}
    />
    <ComponentDemo
      title="Zigzag"
      Component={Zigzag}
      defaultProps={{ color: "#F7F7F7", count: 20 }}
      fields={zigzagFields}
    />
  </div>
);

render(<App />, document.getElementById("root"));
