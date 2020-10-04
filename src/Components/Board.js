import React from 'react'
import Sqaure from './Sqaure'

const Board = ({board,handeClick ,winningSquares}) => {
  
   
    const renderSq= (position) =>{
        const isWinningSquare = winningSquares.includes(position);
       return (
       <Sqaure
       value={board[position]} 
       squareClick={()=>handeClick(position)} isWinning={isWinningSquare} />
       );
       
    };
  
    return (
        <div className="board">
            <div className="board-row ">
             {renderSq(0)}
             {renderSq(1)}
             {renderSq(2)}
            
            </div >
            <div className="board-row ">
            {renderSq(3)}
            {renderSq(4)}
            {renderSq(5)}
            </div>
            <div className="board-row ">
            {renderSq(6)}
            {renderSq(7)}
            {renderSq(8)}
            </div>
        </div>
    )
}

export default Board
