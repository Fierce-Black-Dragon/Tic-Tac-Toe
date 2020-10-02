/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Board from './Components/Board';
import { calculateWinner } from './Helper';

import "./Styles/root.scss"

const App = () =>{
    const [board,setBoard]=useState(Array(9).fill(null));
    const [isXNext ,setIsXNext]=useState(false);
    const handeClick=(position)=>{
        if(board[position] || winner ){
            return;
        }
        setBoard(prev=>{
               return prev.map((Sqaure, pos)=>{
                   if(pos === position){
                       return  isXNext ? 'X' : 'O';
                   }
                   return Sqaure;
               });
               
           });
        setIsXNext( (prev) => !prev );
    };
    const winner= calculateWinner(board);
   
    const messager = winner? `The match is won by ${winner}`: `The next player is ${isXNext ? 'X':'O'}`
 return(

  <div className='app'>
  
  <p>TIC TAC TOE</p>
  <h4>{messager}</h4>
  <Board board={board} handeClick={handeClick}/>
 </div>
 );


};
export default App