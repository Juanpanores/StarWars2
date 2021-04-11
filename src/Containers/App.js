import React, { useState, useEffect} from 'react';
import Deck from '../Components/Deck.js';
import CardList from '../Components/CardList.js';
import Encounter from '../Components/Encounter.js';
import Graveyard from '../Components/Graveyard.js';
import './App.css';
import Particles from 'react-particles-js';
import Music from '../Components/Music.mp3';
import {Howl} from 'howler';


function App() {
  const [deck, setDeck] = useState ([]);
  const [newCardsInHand, setNewCardsInHand] = useState ([]);
  const [fighter, setFight] = useState ([]);
  const [match, setMatch] = useState (false);
  const [graveyard, setGraveyard] = useState ([]);



  useEffect(() => {
    fetch('http://swapi.py4e.com/api/people/')
    .then(response => response.json())
    .then(people=> {setDeck(people.results.sort(() => 0.5 - Math.random()))});
    let sound = new Howl({
      src: [Music],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
  },[])

  
  const onPickUpCard = (event) => {
    if (deck.length>0)  {
      let pickup=5-newCardsInHand.length;
      if (pickup> deck.length){
        pickup= deck.length
      }
      console.log("Cards to pick: ",pickup)
      if (!match){
          setNewCardsInHand(newCardsInHand.concat(deck.slice(0,pickup)));
          deck.splice(0,pickup)
          setDeck(deck);
      }
    }
  }
  console.log(deck)
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
      }, 1000); 
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


  console.log("Cards in deck ",deck.length)
  console.log("Cards in hand ",newCardsInHand.length)

  return (deck.length===0 && newCardsInHand.length===1 && fighter.length===0) ?
  <h3 className='tc win'>YOU WIN!</h3>:
  (deck.length===0 && newCardsInHand===0)?
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
