import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import LinkedPage from './components/LinkedPage';




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
    <div style={{overflow: 'hidden'}}>
      {/* {animalData && animalData.species[0].description}
    
      {animalData
        && <img src={`url({animalData.species[0].image.url})`} alt="image" />
      } */}
      <Router>

      <Switch>
        <Route path='/' exact component={MainPage} />
   
        <Route path='/linkedPage' component={LinkedPage} />
      </Switch>

      </Router>


    </div>
  );
}

export default App;
