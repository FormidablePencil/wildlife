import React from 'react'
import '../components/mainPage.sass'
import tigerNew from '../assets/tigerNew.jpg'
import roaringTiger from '../assets/roaringBengalNew.jpg'



function MainPage() {



  return (
    <div >
      {/* <picture>
        <source media="(min-width: 800px)" srcSet={tigerNew} />
        <source media="(max-width: 800px)" srcSet={roaringTiger} />
        <img className='headerImage' src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
      </picture> */}
      <img className='headerImage' src={tigerNew} alt="tiger"/>
    </div>
  )
}

export default MainPage
