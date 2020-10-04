import React from 'react'

const History = ({history ,moveTo ,currentmove}) => {

    return (
      <div className="history-wrapper">
            <ul className="history" >
            {history.map((_, move)=>{
                return    <li key={move}>
                    <button  className={`btn-move ${move === currentmove ? 'active' : ''}`}
                    type="button" onClick={()=>  moveTo(move)}
                    >{move === 0 ? 'Start the game':`Go to move #${move}`}</button></li> ;
            })}

        </ul>
      </div>
    )
}

export default History
