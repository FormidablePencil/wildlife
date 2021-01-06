import React, { useState } from 'react'
import './linkedPage.sass'
import redPanda from '../../assets/redPanda.jpg'
import bengalTiger from '../../assets/bengalTiger.jpg'
import elephant from '../../assets/elephant.jpg'
import gorilla from '../../assets/gorilla.jpg'
import orangutan from '../../assets/orangutan.jpg'
import penguin from '../../assets/penguin.jpg'
import polarBear from '../../assets/polarBear.jpg'
import panda from '../../assets/panda.jpg'
import whale from '../../assets/whale.jpg'
import rhino from '../../assets/rhino.jpg'
import snowLeopard from '../../assets/snowLeopard.jpg'
import turtle from '../../assets/turtle.jpg'
import { animalsApi } from '../../ApiInfo'

//************** Use REDUX for saving local storage after refresh*/

function LinkedPage() {
  const [accessor, setAccessor]: any = useState(0)

  const backgroundAnimals = [
    { Image: bengalTiger }, { Image: panda }, { Image: whale },
    { Image: elephant }, { Image: gorilla }, { Image: snowLeopard },
    { Image: orangutan }, { Image: turtle }, { Image: rhino },
    { Image: penguin }, { Image: redPanda }, { Image: polarBear }
  ]

  const cardAnimals = [
    { Image: bengalTiger }, { Image: panda }, { Image: whale },
    { Image: elephant }, { Image: gorilla }, { Image: snowLeopard },
    { Image: orangutan }, { Image: turtle }, { Image: rhino },
    { Image: penguin }, { Image: redPanda }, { Image: polarBear }
  ]

  return (
    <div>
      <div className="card" style={{ right: '25%' }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={cardAnimals[accessor].Image} alt="Placeholder image" className="cardImage" />
          </figure>
        </div>
        <div className="card-content">
          {/* <figure className="image is-48x48"> */}
          <div className='grayBoxLink'>
            <h2>{animalsApi[accessor].Name}</h2>
            <h2>{animalsApi[accessor].Location}</h2>
            <h2>{animalsApi[accessor].Population}</h2>
            <h2>{animalsApi[accessor].Status}</h2>
          </div>
          {/* </figure> */}

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <button className="button is-danger">Go Back</button> */}
        </div>
      </div>


      <div className='orangeBoxLink'>
        <h1>{animalsApi[accessor].Description}</h1>
        <a href="/">
          <button className="button is-light" style={{ color: 'white', position: 'absolute', bottom: '20px', right: '100px' }}>Go Back</button>
        </a>
        <button onClick={() => setAccessor(accessor + 1)} className="button is-light" style={{}}>add</button>
      </div>
      <div>
        <img src={backgroundAnimals[accessor].Image} alt="" className="background" />
      </div>
    </div >
  )
}

export default LinkedPage
