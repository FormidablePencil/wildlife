import React from 'react'
import './end.sass'
import monkeys from '../../assets/monkeys.jpg'

function End() {
  return (
    <div>
      <div className='aboveGradient' />
      <div className='blackBox' />
      <div className='footerPicture'>
        <div className='topGradient' />
        <div className='rightGradient' />
        <div className='bottomGradient' />
        <div className='leftGradient' />
        <div className='absolute'>
          <h1>Help Wildlife today!</h1>
        </div>

        <img src={monkeys} alt="monkeys" className='monkey' />
      </div>
    </div>
  )
}

export default End
