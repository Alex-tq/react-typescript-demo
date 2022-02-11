import React, { Component } from "react";

type CounterProps = {
  message: string | null;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
