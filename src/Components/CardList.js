import React from 'react';
import Card from './Card.js';

const CardList = ({characters}) => {
    return(
        <div className='hand'>
            {
            characters.map((user,i) =>{
                return ( 
                    <Card 
                        key={i} 
                        name={user.name} 
                        birth_year={user.birth_year}
                        /> 
                    )
                })
            };
        </div>  
    );
}   

export default CardList;