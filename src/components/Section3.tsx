import React from 'react'
import '../components/section3.sass'
import SimpleSlider from './SliderSlick'
// import elephant from '../assets/elephant.jpg'
// import wolf from '../assets/wolf.jpg'
// import panda from '../assets/panda.jpg'
// import seal from '../assets/seal.jpg'
// import koala from '../assets/koala.jpg'
// import gorilla from '../assets/gorilla.jpg'
// import SliderSlick from './SliderSlick'

function Section3() {
  return (
    <div>
      <div>
        <SimpleSlider/>
      </div>
      <div className='orangeBlock'>
        <h1>Click on any picture above to explore more.</h1>
      </div>
      <div>
        {/* <SimpleSlider/> */}
      </div>
    </div>
  )
}

export default Section3
