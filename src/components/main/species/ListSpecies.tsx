import React, { useState } from 'react'
import { DynCard, DynCardT } from '../../../reusables/DynCard'
import BengalTiger from '../../../assets/images/bengalTiger.jpg'
import Panda from '../../../assets/images/panda.jpg'
import Whale from '../../../assets/images/whale.jpg'
import Elephant from '../../../assets/images/elephant.jpg'
import Gorilla from '../../../assets/images/gorilla.jpg'
import SnowLeopard from '../../../assets/images/snowLeopard.jpg'
import Orangutan from '../../../assets/images/orangutan.jpg'
import Turtle from '../../../assets/images/turtle.jpg'
import Rhino from '../../../assets/images/rhino.jpg'
import Penguin from '../../../assets/images/penguin.jpg'
import RedPanda from '../../../assets/images/redPanda.jpg'
import PolarBear from '../../../assets/images/polarBear.jpg'
import Modal from './modal/Modal'
import './card-flip.sass'
import './species.sass'

const myImages = [
  { name: "Bengal Tiger", image: BengalTiger, alt: "Bengal Tiger" },
  { name: "Panda", image: Panda, alt: "Panda" },
  { name: "Blue Whale", image: Whale, alt: "Blue Whale" },
  { name: "Elephant", image: Elephant, alt: "Elephant" },
  { name: "Gorilla", image: Gorilla, alt: "Gorilla" },
  { name: "Snow Leopard", image: SnowLeopard, alt: "Snow Leopard" },
  { name: "Orangutan", image: Orangutan, alt: "Orangutan" },
  { name: "Turtle", image: Turtle, alt: "Turtle" },
  { name: "Rhinocerus", image: Rhino, alt: "Rhinocerus" },
  { name: "Penguin", image: Penguin, alt: "Penguin" },
  { name: "Red Panda", image: RedPanda, alt: "Red Panda" },
  { name: "Polar Bear", image: PolarBear, alt: "Polar Bear" },
]

const cardData: DynCardT[] = [
  {
    image1: myImages[0].image,
    alt1: myImages[0].alt,
    acc1: 0,
    name1: myImages[0].name,
    image2: myImages[1].image,
    alt2: myImages[1].alt,
    acc2: 1,
    name2: myImages[1].name,
  },
  {
    image1: myImages[2].image,
    alt1: myImages[2].alt,
    acc1: 2,
    name1: myImages[2].name,
    image2: myImages[3].image,
    alt2: myImages[3].alt,
    acc2: 3,
    name2: myImages[3].name,
  },
  {
    image1: myImages[4].image,
    alt1: myImages[4].alt,
    acc1: 4,
    name1: myImages[4].name,
    image2: myImages[5].image,
    alt2: myImages[5].alt,
    acc2: 5,
    name2: myImages[5].name,
  },
  {
    image1: myImages[6].image,
    alt1: myImages[6].alt,
    acc1: 6,
    name1: myImages[6].name,
    image2: myImages[7].image,
    alt2: myImages[7].alt,
    acc2: 7,
    name2: myImages[7].name,
  },
  {
    image1: myImages[8].image,
    alt1: myImages[8].alt,
    acc1: 8,
    name1: myImages[8].name,
    image2: myImages[9].image,
    alt2: myImages[9].alt,
    acc2: 9,
    name2: myImages[9].name,
  },
  {
    image1: myImages[10].image,
    alt1: myImages[10].alt,
    acc1: 10,
    name1: myImages[10].name,
    image2: myImages[11].image,
    alt2: myImages[11].alt,
    acc2: 11,
    name2: myImages[11].name,
  },
]

function ListSpecies() {
  const [accessor, setAccessor] = useState(0)
  const [modal, setModal] = useState(false)

  return (
    <div className='imagesContainer'>
      <div className="outer-card-flipper-container">
        {cardData.map((item) =>
          <DynCard
            cardData={item}
            setAccessor={setAccessor}
            setModal={setModal}
          />
        )}
      </div>

      {modal ?
        <Modal
          modal={modal}
          setModal={setModal}
          accessor={accessor}
        /> : null}
    </div>
  )
}
export default ListSpecies
