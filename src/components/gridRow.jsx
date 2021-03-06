import React from 'react';
import Cell from './cell.jsx';

const GridRow = ({ rowData, rowIdx }) => {
  return (
    <div className="row">
      {
        rowData.map((cell, i) => {
          return <Cell val={cell} position={[rowIdx, i]} key={i} />
        })
      }
    </div>
  );
}

export default GridRow;
