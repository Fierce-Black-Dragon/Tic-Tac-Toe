import React from 'react'
import Sqaure from './Sqaure'

const Board = () => {
    return (
        <div>
            <div>
              <Sqaure value={0} />
              <Sqaure value={1}/>
              <Sqaure value={2}/>
            </div>
            <div>
            <Sqaure value={3} />
            <Sqaure value={4}/>
            <Sqaure value={5}/>
            </div>
            <div>
            <Sqaure value={6}/>
            <Sqaure value={7}/>
            <Sqaure value={8} />
            </div>
        </div>
    )
}

export default Board
