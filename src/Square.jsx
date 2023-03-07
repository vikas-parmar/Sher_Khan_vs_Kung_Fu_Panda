import React, { useState } from 'react'

const Square = ({value, onSquareClick}) => {
    
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default Square