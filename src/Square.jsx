import React from 'react'

const Square = ({ value, onSquareClick }) => {

    return (
        <button className="square" onClick={onSquareClick}>
            {value ? value : '_'}
        </button>
    )
}

export default Square