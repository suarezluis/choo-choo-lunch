import React, { Component } from "react";
import data from "./data/index.js";
export default class App extends Component {
  state = { data, options: data.length, result: "", delay: 10 };
  getRandom = () => {
    let isNew = false;
    while (isNew === false) {
      let index = Math.floor(Math.random() * this.state.options);
      if (this.state.result.name !== this.state.data[index].name) {
        this.setState({ result: data[index], delay: this.state.delay + 10 });
        isNew = true;
      }
    }
  };
  componentDidMount() {
    this.getRandom();
  }
  componentDidUpdate() {
    if (this.state.delay < 500) {
      setTimeout(() => {
        this.getRandom();
      }, this.state.delay);
    }
  }
  render() {
    return (
      <div
        style={{
          // width: "100%",
          // height: "100%",
          // flexDirection: "column",
          display: "flex",
          flex: 1,
          // width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green"
        }}
      >
        <img
          src={this.state.result.image}
          style={{ width: "25%", backgroundColor: "white", borderRadius: 50 }}
        />
      </div>
    );
  }
}
