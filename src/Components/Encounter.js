import React from 'react';
import Card from './Card.js';

const Encounter = ({fighter}) => {
    return(
        <div className='encounter'>
            {
            fighter.map((user,i) =>{
                return ( 
                    <Card
                        key={i}
                        user={user}
                        name={user.name}
                        /> 
                    )
                })
            };
        </div>  
    );
}   

export default Encounter;