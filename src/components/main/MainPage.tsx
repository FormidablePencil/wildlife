import React, { useLayoutEffect, useState } from 'react'
import TigerNew from '../../assets/images/tigerNew.jpg'
import Article from './articles/Article';
import SupportUs from './conclusion/SupportUs';
import Introduction from './intro/Introduction';
import ListSpecies from './species/ListSpecies';
import './mainPage.sass'
import '../bg-boxes.sass'


function useWindowSize() {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  return size;
}


function MainPage(props) {
  const [width, height] = useWindowSize();


  return (
    <div >
      <Introduction TigerNew={TigerNew} />

      <div className='middle-section-container'>
        <ListSpecies />
        <Article />
      </div>

      <span style={{ display: width > 620 ? 'flex' : 'none' }}>
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
      </span>

      <SupportUs />
    </div>
  )
}

export default MainPage
