import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.position,
      clicked: false,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.state.clicked ? this.props.val : ' '}</button>
    )
  }
}

export default Cell;
