import React, { Component } from "react";
import Coin from "./Coin";
import "./Flipcoin.css";

class Flipcoin extends Component {
  constructor(props) {
    super(props);
    this.state = { head: 0, totalNum: 0, ishead: true };
  }

  flipIt = () => {
    //generate random number 0 or 1
    const ran = Math.floor(Math.random() * 2);
    //console.log(ran);

    if (ran === 1) {
      this.setState(preValue => ({
        head: preValue.head + 1,
        totalNum: preValue.totalNum + 1,
        ishead: true
      }));
    } else {
      this.setState(preValue => ({
        head: preValue.head,
        totalNum: preValue.totalNum + 1,
        ishead: false
      }));
    }
  };

  render() {
    return (
      <div className="flipcoin">
        <h2>Let's flip a coin</h2>
        <Coin head={this.state.ishead} />
        <button onClick={this.flipIt} className="flipBtn">
          flip me
        </button>
        <h5>
          Out of {this.state.totalNum} flips, there has been {this.state.head}{" "}
          heads and {this.state.totalNum - this.state.head} tails.
        </h5>
      </div>
    );
  }
}

export default Flipcoin;
