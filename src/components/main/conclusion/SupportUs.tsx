import React from 'react'
import './support.sass'
import './gradients-support.sass'

function SupportUs({Monkeys}) {
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

        <img src={Monkeys} alt="monkeys" className='monkey' />
      </div>
    </div>
  )
}

export default SupportUs
