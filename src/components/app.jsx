import React from 'react';
import GridRow from './gridRow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    let grid = new Array(8); //build 8x8 array to represent board
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(8).fill(0);
    }
    this.state = {
      grid
    }
  }

  render() {
    const { grid } = this.state;
    return (
      <div className="grid">
        {
          grid.map((row, i) => {
            return <GridRow rowData={row} rowIdx={i} key={i} />
          })
        }
      </div>
    )
  }
}

export default App;
