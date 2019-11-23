import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.position,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this.state.position[0], this.state.position[1]);
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.val}</button>
    )
  }
}

export default Cell;
