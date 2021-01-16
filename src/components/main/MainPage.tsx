import React from 'react'
import { DynamicImage, DynamicImageT } from '../../reusables/DynamicStuff';
import BengalTiger from '../../assets/bengalTiger.jpg'
import TigerNew from '../../assets/tigerNew.jpg'
import Panda from '../../assets/panda.jpg'
import Whale from '../../assets/whale.jpg'
import Elephant from '../../assets/elephant.jpg'
import Gorilla from '../../assets/gorilla.jpg'
import SnowLeopard from '../../assets/snowLeopard.jpg'
import Orangutan from '../../assets/orangutan.jpg'
import Turtle from '../../assets/turtle.jpg'
import Rhino from '../../assets/rhino.jpg'
import Penguin from '../../assets/penguin.jpg'
import RedPanda from '../../assets/redPanda.jpg'
import PolarBear from '../../assets/polarBear.jpg'
import Monkeys from '../../assets/monkeys.jpg'
import Article from './articles/Article';
import SupportUs from './conclusion/SupportUs';
import Introduction from './intro/Introduction';
import ListSpecies from './species/ListSpecies';
import './mainPage.sass'
import '../bg-boxes.sass'

function MainPage() {
  const imageData: DynamicImageT[] = [
    { name: "Elephant", image: BengalTiger, alt: "Elephant" },
    { name: "Wolf", image: Panda, alt: "wolf" },
    { name: "Panda", image: Whale, alt: "Panda" },
    { name: "Seal", image: Elephant, alt: "Seal" },
    { name: "Gorilla", image: Gorilla, alt: "Gorilla" },
    { name: "Snow Leopard", image: SnowLeopard, alt: "Snow Leopard" },
    { name: "Koala", image: Orangutan, alt: "Koala" },
    { name: "Bengal Tiger", image: Turtle, alt: "Bengal Tiger" },
    { name: "Rhinocerus", image: Rhino, alt: "Rhinocerus" },
    { name: "Blue Whale", image: Penguin, alt: "Blue Whale" },
    { name: "Red Panda", image: RedPanda, alt: "Red Panda" },
    { name: "Sea Turtle", image: PolarBear, alt: "Sea Turtle" },
  ]

  const photos = [
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

  const namesList = ['Elephant', 'Wolf', 'Panda', 'Seal', 'Koala', 'Gorilla', 'Tiger', 'Blue Whale', 'Red Panda', 'Snow Leopard', 'Rhinocerus', 'Sea Turtle']

  return (
    <div >
      <Introduction TigerNew={TigerNew} />


      <div className='middle-section-container'>
        <ListSpecies photos={photos} />
        <Article />
      </div>

      <div className='orangeBox1' />
      <div className='orangeBox2' />
      <div className='orangeBox3' />
      <div className='orangeBox4' />
      <div className='orangeBox5' />
      <div className='grayBox1' />
      <div className='grayBox2' />
      <div className='grayBox3' />
      <div className='grayBox4' />
      <div className='grayBox5' />
      <div className='grayBox6' />
      <div className='grayBox7' />

      <SupportUs Monkeys={Monkeys} />
    </div>
  )
}

export default MainPage
