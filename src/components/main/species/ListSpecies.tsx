import React from 'react'
import './species.sass'

function ListSpecies({photos}) {
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

export default ListSpecies
