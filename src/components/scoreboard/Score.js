import React from 'react'

const Score = () => {
  return (
    <div className='scoreboard'>
      <button className='button-pause'>PAUSE</button>
      <h2>Next Shape</h2>

      <h2>Score</h2>
      <h2 className='green-text'>900</h2>
      <h2>Lines</h2>
      <h2 className='green-text'>7</h2>
    </div>
  )
}

export default Score
