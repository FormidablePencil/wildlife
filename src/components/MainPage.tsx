import React from 'react'
import '../components/mainPage.sass'
import tigerNew from '../assets/tigerNew.jpg'
import Section2 from './Section2';
import Section5 from './Section5';
import Section4 from './Section4';
import Section3 from './Section3';




function MainPage() {



  return (
    <div >
      {/* <picture>
        <source media="(min-width: 800px)" srcSet={tigerNew} />
        <source media="(max-width: 800px)" srcSet={roaringTiger} />
        <img className='headerImage' src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
      </picture> */}
      {/* <Link to='/section2'> */}
      <img className='headerImage' src={tigerNew} alt="tiger"/>
      {/* </Link> */}
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default MainPage
