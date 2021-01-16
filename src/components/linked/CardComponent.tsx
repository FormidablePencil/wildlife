import React from 'react'
import { animalsApi } from '../../ApiInfo'

function CardComponent({cardAnimals, accessor}) {
  return (
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
  )
}

export default CardComponent
