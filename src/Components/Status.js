import React from 'react'

const Status = ({winner ,current}) => {
    // const messager = winner? `The winner is ${winner}`: `The next player is ${current.isXNext ? 'X':'O'}`;
    const noMoves =current.board.every((el)=> el !== null);
    return (
       <div className="status-message">
          {winner &&  <>
            The winner of the match is {' '}
           <span className={ winner === 'X' ? 'text-green' :'text-orange'} > {winner}</span>
          </>}
          {!winner && !noMoves && <>
            The next player is <span className={current.isXNext ? 'text-green' :'text-orange'}>{current.isXNext ? 'X':'O'}</span>
          </>}
          {!winner && noMoves &&
          <>
          <span className="text-blue"
          >This match is a tie</span>
          </> }
       </div>
    )
}

export default Status
