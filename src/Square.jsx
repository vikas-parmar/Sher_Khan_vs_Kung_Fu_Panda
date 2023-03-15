import React from 'react';

const Square = ({ value, onSquareClick }) => (
  <button type="button" className="square" onClick={onSquareClick}>
    {value || '_'}
  </button>
);

export default Square;
