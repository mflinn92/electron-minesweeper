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
      grid,
      bombLocations: [],
    }
    this.placeBombs = this.placeBombs.bind(this);
  }
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  placeBombs() {
    let bombs = [];
    for (let i = 0; i < 10; i++) {
      do {
        var row = this.getRandomInt(0, 7);
        var col = this.getRandomInt(0, 7);
      } while (bombs.includes([row,col]))
      bombs.push([row, col]);
    }
    let newGrid = this.state.grid.map((row) => {
      return row.slice();
    })
    bombs.forEach((position) => {
      newGrid[position[0]][position[1]] = -1;
    });
    this.setState({
      grid: newGrid,
    })
  }
  
  componentDidMount() {
    this.placeBombs();
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
