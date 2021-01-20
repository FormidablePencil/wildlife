import { TIMEOUT } from 'dns'
import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './species.sass'

function ListSpecies({ myImages }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isFlipped2, setIsFlipped2] = useState(false)
  const [isFlipped3, setIsFlipped3] = useState(false)
  const [isFlipped4, setIsFlipped4] = useState(false)
  const [isFlipped5, setIsFlipped5] = useState(false)
  const [isFlipped6, setIsFlipped6] = useState(false)


  // useEffect(() => {
  //   setTimeout(() => setIsFlipped(prev => !prev), 8000)
  //   setTimeout(() => setIsFlipped2(prev => !prev), 15000)
  //   setTimeout(() => setIsFlipped3(prev => !prev), 10000)
  //   setTimeout(() => setIsFlipped4(prev => !prev), 12000) 
  //   setTimeout(() => setIsFlipped5(prev => !prev), 18000)
  //   setTimeout(() => setIsFlipped6(prev => !prev), 20000)
  // }, [isFlipped, isFlipped2, isFlipped3, isFlipped4, isFlipped5, isFlipped6])

  return (
    <div className='imagesContainer' >


      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[0]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[1]}
          </div>
        </a> 
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[2]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[3]}
          </div>
        </a>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[4]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[5]}
          </div>
        </a>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[6]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[7]}
          </div>
        </a>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[8]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[9]}
          </div>
        </a>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
        <a href="/linkedPage">
          <div className='image'>
            {myImages[10]}
          </div>
        </a>

        <a href="/linkedPage">
          <div className='image'>
            {myImages[11]}
          </div>
        </a>
      </ReactCardFlip>


    </div>
  )
}

export default ListSpecies
