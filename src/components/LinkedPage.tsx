import React, { useEffect, useState } from 'react'
import koala from '../assets/koala.jpg'
// import koala2nd from '../assets/koala2nd.jpg'
import '../components/linkedPage.sass'

function LinkedPage() {

  const [animalData, setAnimalData]: any = useState()


  async function animals() {
    const fetchedAnimalData = await fetch('http://www.bloowatch.org/developers/json/species/asian-elephant')
    const data = await fetchedAnimalData.json()
    setAnimalData(data)
  }

  useEffect(() => {
    animals()
  }, [animalData])

  // useEffect(() => {
  //   // if (animalData) {
  //   //   console.log(animalData.species[0])
  //   // }

  // }, [animalData])



  return (

    <div className='container'>
      <div className='orangeBoxLink'>
        <h1>
          {animalData && animalData.species[0].description}
        </h1>
      </div>
      <img src={koala} alt="koala" className='half-vw' />

      <div className='card'>
        <img src={koala} alt="another koala" className='sideImage' />
        <div className='grayBoxLink'>
          <h2>
            {animalData && animalData.species[0].status}
          </h2>
          <h2>
            {animalData && animalData.species[0].location}
          </h2>
          <h2>
            {animalData && animalData.species[0].population}
          </h2>
          <h2>
            {animalData && animalData.species[0].name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default LinkedPage
