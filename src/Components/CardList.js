import React from 'react';
import Card from './Card.js';

const CardList = ({handCards,pickCard}) => {
    return(
        <div className='hand'>
            {
            handCards.map((user,i) =>{
                return ( 
                    <Card 
                        key={i}
                        user={user}
                        name={user.name}
                        attack={user.skin_color}
                        defense={user.eye_color}
                        pickCard={pickCard}
                        /> 
                    )
                })
            };
        </div>  
    );
}   

export default CardList;