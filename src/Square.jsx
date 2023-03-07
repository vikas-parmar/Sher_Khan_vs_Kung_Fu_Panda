import React from 'react'

const Square = ({value}) => {
    
    const handleClick =()=>{
        console.log('clicked!')
    }
    return <button className="square" onClick={handleClick}>{value}</button>
}

export default Square