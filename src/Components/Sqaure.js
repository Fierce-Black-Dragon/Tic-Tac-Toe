import React from 'react'

const Sqaure = ({value, squareClick}) => {
  return (
    <button  type="button" className="square"
    onClick={squareClick}>
      {value}
    </button>
  )
}

export default Sqaure
