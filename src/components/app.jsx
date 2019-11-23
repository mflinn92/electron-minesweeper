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
    this.touchedBombs = this.touchedBombs.bind(this);
    this.addtouchedBombs = this.addtouchedBombs.bind(this);
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
    this.addtouchedBombs(newGrid);
    this.setState({
      grid: newGrid,
    })
  }

  touchedBombs(row, col, board) {
    let bombCount = 0;
    for (let i = row-1; i < row + 2; i++) {
      if (i >= 0 && i < board.length) {
        for (let j = col - 1; j < col + 2; j++) {
          if (j >= 0 && j < board.length) {
            if (!(i === row && j === col) && board[i][j] === -1) {
              bombCount++;
            }
          }
        }
      }
    }
    return bombCount;
  }

  addtouchedBombs(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid.length; col++) {
        if (grid[row][col] !== -1) {
          grid[row][col] = this.touchedBombs(row, col, grid)
        }
      }
    }
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
