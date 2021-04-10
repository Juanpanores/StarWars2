import React, { useState, useEffect} from 'react';
import Deck from '../Components/Deck.js';
import CardList from '../Components/CardList.js';
import Encounter from '../Components/Encounter.js';
import Graveyard from '../Components/Graveyard.js';
import './App.css';
import Particles from 'react-particles-js';
import Music from '../Components/Music.mp3';
import {Howl, Howler} from 'howler';


function App() {
  const [deck, setDeck] = useState ([]);
  const [newCardsInHand, setNewCardsInHand] = useState ([]);
  const [fighter, setFight] = useState ([]);
  const [match, setMatch] = useState (false);
  const [graveyard, setGraveyard] = useState ([]);



  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(people=> {setDeck(people.results.sort(() => 0.5 - Math.random()))});
    var sound = new Howl({
      src: [Music],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }

    });
  },[])

  
  const onPickUpCard = (event) => {
    if (deck.length>0)  {
      let pickup=5-newCardsInHand.length;
      console.log(pickup)
      if (pickup> deck.length){
        pickup= deck.length
        console.log(pickup)
      }
      
      console.log(deck.length)
          setNewCardsInHand(newCardsInHand.concat(deck.slice(0,pickup).filter((el) => !fighter.includes(el))));
    }
  }

  useEffect(() => {
    setDeck(deck.filter((el) => !newCardsInHand.includes(el)))
  },[newCardsInHand])

  const onPickFighter = (event) => { 
    if (fighter.length<2 ) {
    setFight(fighter.concat(event));
    }
    
  }
  
  useEffect(() => {
    setNewCardsInHand(newCardsInHand.filter((el) => !fighter.includes(el)));
    if (fighter.length===2) {
      setTimeout(() => {
        setMatch(true)
      }, 1500); 
    }
  },[fighter])

  useEffect(() => {
    if (fighter.length===2) {
    const health1= fighter[0].eye_color.length- fighter[1].skin_color.length;
    const health2= fighter[1].eye_color.length - fighter[0].skin_color.length;
    const deaths=[];
    const survivors=[];
      if(health1 <=0 ) {
        console.log(health1)
        deaths.push(fighter[0]);
        console.log("winner " ,fighter[1].name)
      }else{
        survivors.push(fighter[0])
        console.log("1 lives")
      }

      if(health2 <=0 ) {
        console.log(health1)
        deaths.push(fighter[1]);
        console.log("winner " ,fighter[0].name)
      }else{
        survivors.push(fighter[1])
        console.log("2 lives")
      }

      setNewCardsInHand(newCardsInHand.concat(survivors))
      setGraveyard(deaths)
      setFight([]);
      
    }
  },[match])


  useEffect(() => {
      setMatch(false)
  },[graveyard])


  console.log(fighter)

  return !deck.length ?
  <h1 className='tc loading'>LOADING</h1>:
  (
      <div className="wrapper">
        <Particles className='particles' /> 
          <div className='title'><h1 className='f-headline mt4 mb0 tc'>STAR WARS</h1>
          <h2 className='f-4  tc'>by Juanpa Nores</h2>
          </div>
            <Deck pickUpCards={onPickUpCard}/>
            <CardList handCards={newCardsInHand} pickCard={onPickFighter}/> {/*se podría reutilizar para encounter */}
            <Encounter fighter={fighter}/>
            <Graveyard grave={graveyard}/>
      </div>
    );
}

export default App;
