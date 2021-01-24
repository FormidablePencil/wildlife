import React, { useState } from 'react'
import TigerNew from '../../assets/images/tigerNew.jpg'
import Article from './articles/Article';
import SupportUs from './conclusion/SupportUs';
import Introduction from './intro/Introduction';
import ListSpecies from './species/ListSpecies';
import './mainPage.sass'
import '../bg-boxes.sass'

function MainPage() {

  return (
    <div >
      <Introduction TigerNew={TigerNew} />


      <div className='middle-section-container'>
        <ListSpecies />
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
