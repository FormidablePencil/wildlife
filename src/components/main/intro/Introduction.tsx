import React from 'react'
import './intro.sass'

function Introduction({ TigerNew }) {

  const arrOfText = [
    "About 36% of species are humans, 60% being farm animals and a tiny 4% of all the mammals on earth being a part of wildlife",
    "We are not only effecting a particular species, but rather, the whole ecosystem.",
    "If we do nothing you can consider your children from seeing rhinos, cheetahs, polar bears, and gorillas by 2050 a pipe dream.",
  ]

  const bottomText = [
    "click on any of the images to view more information about that specific species."
  ]

  return (
    <div>
      <img className='headerImage' src={TigerNew} alt="tiger" />

      <div className='container'>
        <div className='orangeBox'>
          {arrOfText.map(text =>
            <h1>{text}</h1>
          )}
        </div>
        <div className='grayBox'>
          <h2>{bottomText[0]}</h2>
        </div>
      </div>
    </div>
  )
}

export default Introduction
