import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';



function App() {
  const [animalData, setAnimalData]: any = useState()


  async function animals() {
    const fetchedAnimalData = await fetch('http://www.bloowatch.org/developers/json/species/blue-whale')
    const data = await fetchedAnimalData.json()
    setAnimalData(data)
  }

  useEffect(() => {
    animals()
  }, [])

  useEffect(() => {
    if (animalData) {
      console.log(animalData.species[0].name, 'ghj')
    }

  }, [animalData])



  return (
    <div>
      {/* {animalData && animalData.species[0].description}
    
      {animalData
        && <img src={`url({animalData.species[0].image.url})`} alt="image" />
      } */}
      <MainPage />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />


    </div>
  );
}

export default App;
