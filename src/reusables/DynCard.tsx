import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc'
import Modal from '../components/main/species/modal/Modal'
import '../components/main/species/card-flip.sass'

export interface DynCardT {
  image1, image2, name1, name2, acc1, acc2, alt1, alt2
}

export const DynCard = ({ cardData, setAccessor, setModal }: any) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [flipMe, setFlipMe] = useState(0)

  const zeroCircle = () => flipMe === 0 ? <VscCircleFilled color='white' /> : <VscCircleOutline color='white' onClick={zero} />
  const oneCircle = () => flipMe === 1 ? <VscCircleFilled color='white' /> : <VscCircleOutline color='white' onClick={one} />

  const zero = () => {
    setFlipMe(0)
    setIsFlipped(false)
  }
  const one = () => {
    setFlipMe(1)
    setIsFlipped(true)
  }

  return (
    <div className='card-container'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='image'>
          <img className='myImage' src={cardData.image1} alt={cardData.alt1} />
          <div
            onMouseEnter={() => setIsAnimating(true)}
            onMouseLeave={() => setIsAnimating(false)}
            className={`hover-animal ${isAnimating ? 'hover-animal-hover' : 'hover-animal'}`}
            onClick={() => {
              setModal(true)
              setAccessor(cardData.acc1)
            }}>
            <p className={`animal-name ${isAnimating ? 'animal-name-hover' : 'animal-name'}`}>{cardData.name1}</p>
            <p className={`click-more ${isAnimating ? 'click-more-hover' : 'click-more'}`}>click for more info</p>
          </div>
        </div>

        <div className='image'>
          <img className='myImage' src={cardData.image2} alt={cardData.alt2} />
          <div
            onMouseEnter={() => setIsAnimating(true)}
            onMouseLeave={() => setIsAnimating(false)}
            className={`hover-animal ${isAnimating ? 'hover-animal-hover' : 'hover-animal'}`}
            onClick={() => {
              setModal(true)
              setAccessor(cardData.acc2)
            }}>
            <p className={`animal-name ${isAnimating ? 'animal-name-hover' : 'animal-name'}`}>{cardData.name2}</p>
            <p className={`click-more ${isAnimating ? 'click-more-hover' : 'click-more'}`}>click for more info</p>
          </div>
        </div>
      </ReactCardFlip>
      {zeroCircle()}
      {oneCircle()}
    </div>
  )
}
