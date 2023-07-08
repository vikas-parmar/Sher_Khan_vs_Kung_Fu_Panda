import React from "react";

const Square = ({ value, onSquareClick }) => (
  <button type="button" className="square" onClick={onSquareClick}>
    {value || null}
  </button>
);

export default Square;
