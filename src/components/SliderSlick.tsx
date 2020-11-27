import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elephant from '../assets/elephant.jpg'
import wolf from '../assets/wolf.jpg'
import panda from '../assets/panda.jpg'
import seal from '../assets/seal.jpg'
import koala from '../assets/koala.jpg'
import gorilla from '../assets/gorilla.jpg'
import bengalTiger from '../assets/bengalTiger.jpg'
import whale from '../assets/whale.jpg'
import redPanda from '../assets/redPanda.jpg'
import snowLeopard from '../assets/snowLeopard.jpg'
import rhino from '../assets/rhino.jpg'
import turtle from '../assets/turtle.jpg'
import '../components/slider.sass'


export default function SimpleSlider() {

  const photos = [
    <img src={elephant} alt="elephant" />,
    <img src={wolf} alt="wolf" />,
    <img src={panda} alt="panda" />,
    <img src={seal} alt="seal" />,
    <img src={koala} alt="koala" />,
    <img src={gorilla} alt="gorilla" />,
    <img src={bengalTiger} alt="bengal-tiger" />,
    <img src={whale} alt="blue-whale" />,
    <img src={redPanda} alt="red-panda" />,
    <img src={snowLeopard} alt="snow-leopard" />,
    <img src={rhino} alt="black-rhino" />,
    <img src={turtle} alt="sea-turtle" />,
    // <div style={{background: 'red'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'blue'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'gray'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'black'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'pink'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'lightBlue'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'yellow'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'white'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'orange'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'purple'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'green'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
    // <div style={{background: 'lightPink'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>,
  ]


  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  // className='container-full'
  // className='slider-adjustments'
  // className='containers-here'
  // className='imgs'
  return (
    <div className='container-full'>
      <Slider  {...settings} className='slider-adjustments'>
        {photos.map((item) =>

          <div >
            <div className='containers-here'>
              <div className='imgs'>
                {item}
              </div>
            </div>

          </div>
        )}
      </Slider>
    </div>
  );
}
