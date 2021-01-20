import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Modal from './modal/Modal'
import { DynCard, DynCardT } from '../../../reusables/DynCard'
import './card-flip.sass'
import './species.sass'

function ListSpecies({ myImages }) {
  const [accessor, setAccessor] = useState(0)
  const [modal, setModal] = useState(false)

  const cardData: DynCardT[] =
    [
      {
        name: myImages[0].name,
        name2: myImages[1].name,
        img: myImages[0].image,
        img2: myImages[1].image,
        number: 0,
        number2: 1,
      },
      {
        name: myImages[2].name,
        name2: myImages[3].name,
        img: myImages[2].image,
        img2: myImages[3].image,
        number: 2,
        number2: 3,
      },
      {
        name: myImages[4].name,
        name2: myImages[5].name,
        img: myImages[4].image,
        img2: myImages[5].image,
        number: 4,
        number2: 5,
      },
      {
        name: myImages[6].name,
        name2: myImages[7].name,
        img: myImages[6].image,
        img2: myImages[7].image,
        number: 6,
        number2: 7,
      },
      {
        name: myImages[8].name,
        name2: myImages[9].name,
        img: myImages[8].image,
        img2: myImages[9].image,
        number: 8,
        number2: 9,
      },
      {
        name: myImages[10].name,
        name2: myImages[11].name,
        img: myImages[10].image,
        img2: myImages[11].image,
        number: 10,
        number2: 11,
      },
    ]

  return (
    <div className='imagesContainer' >

      {cardData.map((item, index) =>
        <DynCard
          cardData={cardData[index]}
          setAccessor={setAccessor}
          setModal={setModal}
        />
      )}

      {modal ?
        <Modal
          modal={modal}
          setModal={setModal}
          myImages={myImages}
          accessor={accessor}
        />
        : null}
    </div>
  )
}

export const HoverName = ({ name, number, setAccessor, setModal }) => {
  return (
    <div className='hover-animal' onClick={() => {
      setAccessor(number)
      setModal(true)
    }}>
      <p className='animal-name'>{name}</p>
    </div>
  )
}

export default ListSpecies
