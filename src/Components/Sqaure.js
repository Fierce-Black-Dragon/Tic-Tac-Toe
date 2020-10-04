import React from 'react'

const Sqaure = ({value, squareClick,isWinning}) => {
  return (
    <button
    type="button"
    onClick={squareClick}
    className={`square ${isWinning? 'winning' : ''} ${
      value === 'X' ? 'text-green' : 'text-orange'
    }`}
  >
    {value}
  </button>
  )
}

export default Sqaure
