import React from 'react'
import './intro.sass'

function Introduction({ TigerNew }) {

  const arrOfText = [
    "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum doloreorum.",
    "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ]

  return (
    <div>
      <img className='headerImage' src={TigerNew} alt="tiger" />

      <div className='container'>
        <div className='orangeBox'>
          {arrOfText.map(text =>
            <h1>{text}</h1>
          )}
        </div>
        <div className='grayBox'>
          <h2>{arrOfText[0]}</h2>
        </div>
      </div>
    </div>
  )
}

export default Introduction
