import React from 'react'
import '../components/mainPage.sass'
import tigerNew from '../assets/tigerNew.jpg'



function MainPage() {
  return (
    <div className='backgroundMain'>
      <div>

        <img src={tigerNew} alt="tiger" className='headerImage' />
      </div>

    </div>
  )
}

export default MainPage
