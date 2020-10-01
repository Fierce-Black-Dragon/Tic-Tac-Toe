import React, {useState} from 'react'
import Sqaure from './Sqaure'

const Board = () => {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [xNext ,setXNext]=useState(false);
    const handleSqClick = (position) =>{
        if(board[position]){
            return;
        }
     setBoard((prev) => {
        return prev.map((Sqaure, pos)=>{
            if(pos === position){
                return  xNext? 'X': 'O';
         }
         return Sqaure;
        });
     
     });
     setXNext((prev)=> !prev)
    };
    const renderSq =(position) =>{
        return  <Sqaure value={board[position]} squareClick={()=>{handleSqClick(position)}}/>
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
