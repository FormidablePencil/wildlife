import React, { useState } from 'react'
import './linkedPage.sass'
import redPanda from '../../assets/redPanda.jpg'
import bengalTiger from '../../assets/bengalTiger.jpg'
import elephant from '../../assets/elephant.jpg'
import gorilla from '../../assets/gorilla.jpg'
import orangutan from '../../assets/orangutan.jpg'
import penguin from '../../assets/penguin.jpg'
import polarBear from '../../assets/polarBear.jpg'
import panda from '../../assets/panda.jpg'
import whale from '../../assets/whale.jpg'
import rhino from '../../assets/rhino.jpg'
import snowLeopard from '../../assets/snowLeopard.jpg'
import turtle from '../../assets/turtle.jpg'
import { animalsApi } from '../../ApiInfo'
import OrangeBox from './OrangeBox'
import CardComponent from './CardComponent'

//************** Use REDUX for saving local storage after refresh*/

function LinkedPage() {
  const [accessor, setAccessor]: any = useState(0)

  const backgroundAnimals = [
    { Image: bengalTiger }, { Image: panda }, { Image: whale },
    { Image: elephant }, { Image: gorilla }, { Image: snowLeopard },
    { Image: orangutan }, { Image: turtle }, { Image: rhino },
    { Image: penguin }, { Image: redPanda }, { Image: polarBear }
  ]

  const cardAnimals = [
    { Image: bengalTiger }, { Image: panda }, { Image: whale },
    { Image: elephant }, { Image: gorilla }, { Image: snowLeopard },
    { Image: orangutan }, { Image: turtle }, { Image: rhino },
    { Image: penguin }, { Image: redPanda }, { Image: polarBear }
  ]

  return (
    <div>
      <CardComponent
        cardAnimals={cardAnimals}
        accessor={accessor}
      />
      <OrangeBox
        accessor={accessor}
        setAccessor={setAccessor}
      />
      <img src={backgroundAnimals[accessor].Image} className="background" />
    </div >
  )
}

export default LinkedPage
