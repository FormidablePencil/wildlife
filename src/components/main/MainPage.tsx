import React, { useState } from 'react'
import BengalTiger from '../../assets/images/bengalTiger.jpg'
import TigerNew from '../../assets/images/tigerNew.jpg'
import Panda from '../../assets/images/panda.jpg'
import Whale from '../../assets/images/whale.jpg'
import Elephant from '../../assets/images/elephant.jpg'
import Gorilla from '../../assets/images/gorilla.jpg'
import SnowLeopard from '../../assets/images/snowLeopard.jpg'
import Orangutan from '../../assets/images/orangutan.jpg'
import Turtle from '../../assets/images/turtle.jpg'
import Rhino from '../../assets/images/rhino.jpg'
import Penguin from '../../assets/images/penguin.jpg'
import RedPanda from '../../assets/images/redPanda.jpg'
import PolarBear from '../../assets/images/polarBear.jpg'
import Article from './articles/Article';
import SupportUs from './conclusion/SupportUs';
import Introduction from './intro/Introduction';
import ListSpecies from './species/ListSpecies';
import './mainPage.sass'
import '../bg-boxes.sass'

function MainPage() {

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

  return (
    <div >
      <Introduction TigerNew={TigerNew} />


      <div className='middle-section-container'>
        <ListSpecies myImages={myImages} />
        <hr style={{width: '80%', position: 'absolute', marginTop: '60vh'}} color='#484848'/>
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

      <SupportUs />
    </div>
  )
}

export default MainPage
