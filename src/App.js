/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Board from './Components/Board';
import History from './Components/History';
import { calculateWinner } from './Helper';

import "./Styles/root.scss"

const App = () =>{
    const [history,setHistoy]=useState([{board:Array(9).fill(null),isXNext:true}]);
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
    const winner= calculateWinner(current.board);
   
    const messager = winner? `The winner is ${winner}`: `The next player is ${current.isXNext ? 'X':'O'}`;
    const moveTo =(move) =>{
        setCurrentMOve(move);
    }
 return(

  <div className='app'>
  
  <p>TIC TAC TOE</p>
  <h4>{messager}</h4>
  <Board board={current.board} handeClick={handeClick}/>
  <History history={history}  moveTo={moveTo} currentmove={currentMove}/>
 </div>
 );


};
export default App