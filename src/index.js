import React from "react";
import ReactDOM from "react-dom";
const index = 0;

class Clock extends React.Component {
  // We need to use this for accessing props
  render() {
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">Hello -{this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
        <img src="" />
      </h1>
    );
  }
}

ReactDOM.render(<Clock locale='bn-BD'>test</Clock>, document.getElementById("root"));
