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
    .then(people=> {setDeck(people.results.sort(() => 0.5 - Math.random()))}); // brings the SWAPI structure and shuffles the deck
    let sound = new Howl({                                                     //music player
      src: [Music],
      autoplay: true,
      loop: true,
      volume: 0.2,
    });
  },[])

  
  const onPickUpCard = (event) => {
    if (deck.length>0)  {                   
      let pickup=5-newCardsInHand.length;     //calculets how many cards to pick up
      if (pickup> deck.length){               //avoids the situation to pick up more cards than there is in the deck
        pickup= deck.length
      }
      console.log("Cards to pick: ",pickup)
          setNewCardsInHand(newCardsInHand.concat(deck.slice(0,pickup)));  //set the cards in the hand
          deck.splice(0,pickup)                                            //Removes picked up cards from the deck
          setDeck(deck);
    }
  }
  console.log(deck)
  const onPickFighter = (event) => { 
    if (fighter.length<2 ) {                        //to prevent selecting more than 2 fighters
    setFight(fighter.concat(event));
    }
  }
  
  useEffect(() => {
    setNewCardsInHand(newCardsInHand.filter((el) => !fighter.includes(el)));  //removes fighters from hand
    if (fighter.length===2) {
      setTimeout(() => {
        setMatch(true)                                                        //starts the match fase
      }, 1000); 
    }
  },[fighter])

  useEffect(() => {
    if (fighter.length===2) {
    const health1= fighter[0].eye_color.length- fighter[1].skin_color.length;  //attack is the number of letes of skin color and deffense the eye color
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
      console.log("end fight")
      setNewCardsInHand(newCardsInHand.concat(survivors))  //sets the surviving cards back in the hand
      if (deaths.length != 0){
      setGraveyard(deaths)}                                //put dead cards in the graveyard
      console.log("set fighters to cero")
      setFight([]);                                        //clear fighters from the encounter
      setMatch(false)
    }
  },[match])


 


  console.log("Cards in deck ",deck.length)
  console.log("Cards in hand ",newCardsInHand.length)
  console.log(fighter)
  console.log(match)

  return (deck.length===0 && newCardsInHand.length===1 && fighter.length===0) ?   //sets the winning status
  <h3 className='tc win'>YOU WIN!</h3>:   
  (deck.length===0 && newCardsInHand===0)?                                        //sets the loading status
  <h1 className='tc loading'>LOADING</h1>:
  (
      <div className="wrapper">
        <Particles className='particles' /> 
          <div className='title'><h1 className='f-headline mt4 mb0 tc'>STAR WARS</h1>
          <h2 className='f-4  tc'>by Juanpa Nores</h2>
          </div>
            <Deck pickUpCards={onPickUpCard}/>
            <CardList handCards={newCardsInHand} pickCard={onPickFighter}/>   
            <Encounter fighter={fighter}/>
            <Graveyard grave={graveyard}/>
      </div>
    );
}

export default App;
