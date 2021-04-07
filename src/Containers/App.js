import React, { useState, useEffect} from 'react';
import Deck from '../Components/Deck.js';
import CardList from '../Components/Card.js';
import './App.css';
import Particles from 'react-particles-js';
import {fetchData} from '../Components/fetchData.js';


function App() {
  const [characters, setCharacters] = useState ([]);
  const [hasError, setError] = useState ([]);
  /*const [graveyard, setGraveyard] = useState ([]);*/

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(people=> {setCharacters(people.results)})
    .catch(() => setError({ hasErrors: true }));
},[])

const deckCharacters = characters;
console.log(deckCharacters)

return !characters.length ?
<h1 className='tc'>LOADING</h1>:
(
    <div className="background">
      <Particles className='particles' /> 
        <h1 className='f-headline mt4 mb3 tc'>STAR WARS</h1>
          <div className='col cards tc'>
            <Deck/>
            <CardList characters={deckCharacters}/>

            <div className='dib ma3 graveyard' style={{alignItems: 'flex-end'}}>
              <div>
                <h1>GRAVEYARD</h1>
              </div>
              <div className='ma3 br2 ba bw1 b--dark-pink' style={{height: 128,width: 100}}>
              </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
