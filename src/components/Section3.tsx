import React from 'react'
import '../components/section3.sass'
import elephant from '../assets/elephant.jpg'
import wolf from '../assets/wolf.jpg'
import panda from '../assets/panda.jpg'
import seal from '../assets/seal.jpg'
import koala from '../assets/koala.jpg'
import gorilla from '../assets/gorilla.jpg'

function Section3() {
  return (
    <div>
      <div className='containers'>
        <img src={elephant} alt="elephant"/>
        <img src={wolf} alt="wolf" />
        <img src={panda} alt="panda" />
        <img src={seal} alt="seal" />
        <img src={koala} alt="koala" />
        <img src={gorilla} alt="gorilla" />
        <img src={gorilla} alt="bengal-tiger" />
        <img src={gorilla} alt="snow-leopard" />
        <img src={gorilla} alt="orangutan" />
        <img src={gorilla} alt="sea-turtle" />
        <img src={gorilla} alt="red-panda" />
        <img src={gorilla} alt="black-rhino" />
      </div>
      <div className='orangeBlock'>
        <h1>Click on any picture above to explore more.</h1>
      </div>
    </div>
  )
}

export default Section3
