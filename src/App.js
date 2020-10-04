/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Board from './Components/Board';
import History from './Components/History';
import Status from './Components/Status';
import { calculateWinner } from './Helper';

import "./Styles/root.scss"

const  newGame =[{board:Array(9).fill(null),isXNext:true}];

const App = () =>{
    const [history,setHistoy]=useState(newGame);
    const [currentMove ,setCurrentMOve]=useState(0);
    const current = history[currentMove];
 
    const handeClick=(position)=>{
        if(current.board[position] || winner ){
            return;
        }
       setHistoy(prev=>{
           const last = prev[prev.length -1];

            const newboard =last.board.map((Sqaure, pos)=>{
                   if(pos === position){
                       return  last.isXNext ? 'X' : 'O';
                   }
                   return Sqaure;
               });
               return prev.concat({board :newboard ,isXNext :!last.isXNext});
           });
        setCurrentMOve(prev  => prev +1)
    };
    const {winner, winningSquares}= calculateWinner(current.board);
   
   
    const moveTo =(move) =>{
        setCurrentMOve(move);
    };
    const onNewGame = ()=>{
        setHistoy(newGame)
        setCurrentMOve(0)
    };
 return(

  <div className='app'>
  
  <h1>TIC <span className="text-green">TAC </span>TOE</h1>
   <Status winner={winner} current={current}/>
  <Board board={current.board} handeClick={handeClick} winningSquares={winningSquares} />
  <button type="button" className={`btn-reset ${winner ? 'active' : ''}`} onClick={onNewGame}>Start New Game</button>
  <h4 style={{ fontWeight: 'normal' }}>Current game history</h4>
  <History history={history}  moveTo={moveTo} currentmove={currentMove}/>
  <div className="bg-balls"/>
 </div>

 );


};
export default App