import React, { Component } from "react";

class Coin extends Component {
  static defaultProps = {
    head: true
  };

  render() {
    return (
      <div>
        {this.props.head ? (
          <img
            style={{ width: "120px" }}
            src="http://tinyurl.com/react-coin-heads-jpg"
          />
        ) : (
          <img
            style={{ width: "120px" }}
            src="http://tinyurl.com/react-coin-tails-jpg"
          />
        )}
      </div>
    );
  }
}

export default Coin;
