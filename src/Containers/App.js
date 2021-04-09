import React, { useState, useEffect} from 'react';
import Deck from '../Components/Deck.js';
import CardList from '../Components/CardList.js';
import Encounter from '../Components/Encounter.js';
import Graveyard from '../Components/Graveyard.js';
import './App.css';
import Particles from 'react-particles-js';


function App() {
  const [deck, setDeck] = useState ([]);
  const [newCardsInHand, setNewCardsInHand] = useState ([]);
  const [fighter, setFight] = useState ([]);
  /*const [graveyard, setGraveyard] = useState ([]);*/

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(people=> {setDeck(people.results.sort(() => 0.5 - Math.random()))});
  },[])

  
  const onPickUpCard = (event) => {
    setNewCardsInHand(newCardsInHand.concat(deck.filter( ( el ) => !newCardsInHand.includes( el )).slice(0,5-(newCardsInHand.length))));
    setDeck(deck.filter( ( el ) => !newCardsInHand.includes( el )));
    console.log(deck);

  }

  const onPickCard = (event) => {
    setFight(fighter.concat(event));
    setNewCardsInHand(newCardsInHand.filter( ( el ) => !fighter.includes( el )));

  }
  
  const cardsInHand = deck.slice(0,5-(newCardsInHand.length)

  return !deck.length ?
  <h1 className='tc loading'>LOADING</h1>:
  (
      <div className="wrapper">
        <Particles className='particles' /> 
          <div className='title'><h1 className='f-headline mt4 mb3 tc'>STAR WARS</h1></div>
            <Deck pickUpCards={onPickUpCard}/>
            <CardList handCards={cardsInHand} pickCard={onPickCard}/> {/*se podría reutilizar para encounter */}
            <Encounter fighter={fighter}/>
            <Graveyard/>
      </div>
    );
}

export default App;
