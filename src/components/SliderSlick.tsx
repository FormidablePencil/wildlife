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
import './slider.sass'
import './section3.sass'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LinkedPage from './LinkedPage';

export const photos = [

  <a href="/linkedPage">
    <div>
      <img src={elephant} alt="elephant" />
      <p className='nameText'>Elephant</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={wolf} alt="wolf" />
      <p className='nameText'>Wolf</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={panda} alt="panda" />
      <p className='nameText'>Panda</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={seal} alt="seal" />
      <p className='nameText'>Seal</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={koala} alt="koala" />
      <p className='nameText'>Koala</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={gorilla} alt="gorilla" />
      <p className='nameText'>Gorilla</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={bengalTiger} alt="bengal-tiger" />
      <p className='nameText'>Tiger</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={whale} alt="blue-whale" />
      <p className='nameText'>Blue Whale</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={redPanda} alt="red-panda" />
      <p className='nameText'>Red Panda</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={snowLeopard} alt="snow-leopard" />
      <p className='nameText'>Snow Leopard</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={rhino} alt="black-rhino" />
      <p className='nameText'>Rhinocerus</p>
    </div>
  </a>,
  <a href="/linkedPage">
    <div>
      <img src={turtle} alt="sea-turtle" />
      <p className='nameText'>Sea Turtle</p>
    </div>
  </a>
]

export default function SimpleSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='container-full'>
      <Slider  {...settings} className='slider-adjustments'>
        {photos.map((item) =>

          <div className='containers-here'>
            <div className='imgs'>
              {item}
            </div>

          </div>
        )}
      </Slider>
    </div>
  );
}
