import React, { useState, useEffect} from 'react';
import Deck from '../Components/Deck.js';
import CardList from '../Components/CardList.js';
import Graveyard from '../Components/Graveyard.js';
import './App.css';
import Particles from 'react-particles-js';


function App() {
  const [characters, setCharacters] = useState ([]);
  const [pickedCards, setPickCards] = useState ([]);
  /*const [graveyard, setGraveyard] = useState ([]);*/

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(people=> {setCharacters(people.results)});
},[])

const pickUpCards = (event) => {
  setPickCards(shuffled.slice(0, 5))
}
const shuffled = characters.sort(() => 0.5 - Math.random());
const deckCharacters = shuffled.slice(0, 5);

return !characters.length ?
<h1 className='tc'>LOADING</h1>:
(
    <div className="background">
      <Particles className='particles' /> 
        <h1 className='f-headline mt4 mb3 tc'>STAR WARS</h1>
          <div className=' row player_board '>
            <Deck pickCard={pickUpCards}/>
            <CardList characters={pickedCards}/>
            <Graveyard/>
          </div>
      
    </div>
  );
}

export default App;
