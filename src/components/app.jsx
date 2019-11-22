import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    let grid = new Array(10); //build 10*10 array to represent board
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(10);
    }
    this.state = {
      grid
    }
  }

  render() {
    return (
      <div>Hello Minesweepers</div>
    )
  }
}

export default App;
