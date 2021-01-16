import React from 'react'
import './starter-info.sass'

const arrOfText = [
  "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum doloreorum.",
  "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
]

function StarterInfo() {
  return (
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
  )
}

export default StarterInfo
