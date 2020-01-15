// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenClicked: false,
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      }
    };
  }

  handleClick = () => {
    this.setState(
      {
        hasBeenClicked: true,
        addressInfo: {
          ...this.state.addressInfo,
          street: 123,
          city: 'NYC'
        }
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
