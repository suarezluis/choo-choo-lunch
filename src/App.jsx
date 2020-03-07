import React, { Component } from "react";

import data from "./data/index.js";
export default class App extends Component {
  state = {
    data,
    options: data.length,
    result: "",
    delay: 10
  };
  getRandom = () => {
    let isNew = false;
    while (isNew === false) {
      let index = Math.floor(Math.random() * this.state.options);
      if (this.state.result.name !== this.state.data[index].name) {
        this.setState({
          result: data[index],
          delay: this.state.delay + 10
        });
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
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          style={{ height: "15%", width: "auto" }}
          src="https://www.veterinarian-hospital.com/wp-content/uploads/2019/03/televet-logo-300x158.png"
        />
        <h1>Lunch choo choo train</h1>
        <h2>All aboard!</h2>
        <img
          src={this.state.result.image}
          style={{
            height: "15%",
            width: "auto",
            padding: "5%",
            backgroundColor: "white",
            borderRadius: 50
          }}
        />
        <br />
        {this.state.delay >= 10 ? (
          <img
            style={{ height: "15%", width: "auto" }}
            src="https://chew-chewtrain.com/wp-content/uploads/2015/11/trainred.gif"
          />
        ) : null}
      </div>
    );
  }
}
