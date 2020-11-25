import React from 'react'
import '../components/section5.sass'
import monkeys from '../assets/monkeys.jpg'

function Section5() {
  return (
    <div>
      <div className='aboveGradient'></div>
      <div className='blackBox'></div>
      <div className='footerPicture'>
        <div className='topGradient'></div>
        <div className='rightGradient'></div>
        <div className='bottomGradient'></div>
        <div className='leftGradient'></div>
        <div className='absolute'>
          <h1>Help Wildlife today!</h1>
        </div>

        <img src={monkeys} alt="monkeys" className='monkey' />
      </div>
    </div>
  )
}

export default Section5
