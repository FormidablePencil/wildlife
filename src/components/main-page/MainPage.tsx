import React from 'react'
import './mainPage.sass'
import tigerNew from '../../assets/tigerNew.jpg'
import Articles from '../articles/Articles';
import StarterInfo from '../golden-info/StarterInfo';
import Animals from '../animals/Animals';
import End from '../ending/End';




function MainPage() {



  return (
    <div >
      <img className='headerImage' src={tigerNew} alt="tiger" />
      <StarterInfo />
      <Animals />
      <Articles />
      <End />
    </div>
  )
}

export default MainPage
