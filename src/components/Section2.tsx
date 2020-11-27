import React from 'react'
import '../components/section2.sass'

const arrOfText = [
  "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum doloreorum.",
  "Lorem ipsum dolor sit amet, cot cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
]

function Section2() {
  return (
    <div className='container'>
      <div className='orangeBox'>
        <div>
          {arrOfText.map(text =>
            <h1>{text}</h1>
          )}
        </div>
      </div>
      <div className='grayBox'>
        <div>
          <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
        </div>
      </div>
    </div>
  )
}

export default Section2
