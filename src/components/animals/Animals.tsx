import React from 'react'
import elephant from '../../assets/elephant.jpg'
import panda from '../../assets/panda.jpg'
import gorilla from '../../assets/gorilla.jpg'
import orangutan from '../../assets/orangutan.jpg'
import bengalTiger from '../../assets/bengalTiger.jpg'
import whale from '../../assets/whale.jpg'
import redPanda from '../../assets/redPanda.jpg'
import snowLeopard from '../../assets/snowLeopard.jpg'
import rhino from '../../assets/rhino.jpg'
import turtle from '../../assets/turtle.jpg'
import penguin from '../../assets/penguin.jpg'
import polarBear from '../../assets/polarBear.jpg'
import './animals.sass'
import { DynamicImage, DynamicImageT } from '../../reusables/DynamicStuff'

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

const imageData: DynamicImageT[] = [
  { name: "Elephant", image: bengalTiger, alt: "Elephant" },
  { name: "Wolf", image: panda, alt: "wolf" },
  { name: "Panda", image: whale, alt: "Panda" },
  { name: "Seal", image: elephant, alt: "Seal" },
  { name: "Gorilla", image: gorilla, alt: "Gorilla" },
  { name: "Snow Leopard", image: snowLeopard, alt: "Snow Leopard" },
  { name: "Koala", image: orangutan, alt: "Koala" },
  { name: "Bengal Tiger", image: turtle, alt: "Bengal Tiger" },
  { name: "Rhinocerus", image: rhino, alt: "Rhinocerus" },
  { name: "Blue Whale", image: penguin, alt: "Blue Whale" },
  { name: "Red Panda", image: redPanda, alt: "Red Panda" },
  { name: "Sea Turtle", image: polarBear, alt: "Sea Turtle" },
]

export const photos = [
  <DynamicImage imageData={imageData[0]} />,
  <DynamicImage imageData={imageData[1]} />,
  <DynamicImage imageData={imageData[2]} />,
  <DynamicImage imageData={imageData[3]} />,
  <DynamicImage imageData={imageData[4]} />,
  <DynamicImage imageData={imageData[5]} />,
  <DynamicImage imageData={imageData[6]} />,
  <DynamicImage imageData={imageData[7]} />,
  <DynamicImage imageData={imageData[8]} />,
  <DynamicImage imageData={imageData[9]} />,
  <DynamicImage imageData={imageData[10]} />,
  <DynamicImage imageData={imageData[11]} />,
]

function Animals() {

  return (
      <div className='imagesContainer'>
        {photos.map((item) =>
          <div className='image'>
            {item}
          </div>
        )}
      </div>
  )
}

export default Animals
