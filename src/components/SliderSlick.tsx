import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elephant from '../assets/elephant.jpg'
import panda from '../assets/panda.jpg'
import gorilla from '../assets/gorilla.jpg'
import orangutan from '../assets/orangutan.jpg'
import bengalTiger from '../assets/bengalTiger.jpg'
import whale from '../assets/whale.jpg'
import redPanda from '../assets/redPanda.jpg'
import snowLeopard from '../assets/snowLeopard.jpg'
import rhino from '../assets/rhino.jpg'
import turtle from '../assets/turtle.jpg'
import penguin from '../assets/penguin.jpg'
import polarBear from '../assets/polarBear.jpg'
import './slider.sass'
import './section3.sass'
import { DynamicImage, DynamicImageT } from '../reusables/DynamicStuff';

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
