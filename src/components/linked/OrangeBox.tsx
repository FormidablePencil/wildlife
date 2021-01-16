import React from 'react'
import { animalsApi } from '../../ApiInfo'

function OrangeBox({ accessor, setAccessor }) {
  return (
    <div className='orangeBoxLink'>
      <h1>{animalsApi[accessor].Description}</h1>
      <a href="/">
        <button className="button is-light" style={{ color: 'white', position: 'absolute', bottom: '20px', right: '100px' }}>Go Back</button>
      </a>
      <button onClick={() => setAccessor(accessor + 1)} className="button is-light" style={{}}>add</button>
    </div>
  )
}

export default OrangeBox
