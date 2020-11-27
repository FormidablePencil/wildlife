import React from 'react'
import '../components/section3.sass'
import SimpleSlider from './SliderSlick'
import { photos } from './SliderSlick'


export const namesList = [
  'Elephant',
  'Wolf',
  'Panda',
  'Seal',
  'Koala',
  'Gorilla',
  'Tiger',
  'Blue Whale',
  'Red Panda',
  'Snow Leopard',
  'Rhinocerus',
  'Sea Turtle'
]



  
function Section3() {

  return (
    <div>
      <div className='onMobile'>
        {photos.map((item) =>
          
            <div className='mobileImg'>
              {item} 
            </div>
        )}
      </div>

      <div className='onDesktop'>
        <SimpleSlider />
      </div>


      <div className='orangeBlock'>
        <h1>Click on any picture above to explore more.</h1>
      </div>
    </div>
  )
}

export default Section3
