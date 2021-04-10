import React from 'react'
import Card from './Card.js';

const Graveyard = ({grave}) => {
    return(
        <div className=' graveyard tc'>
            <div>
            <h1 >GRAVEYARD</h1>
            </div>
                
                <div className= 'gravepile'>
                    {
                    grave.map((user,i) =>{
                        return ( 
                            <Card 
                                user={user}
                                name={user.name}
                                attack={user.skin_color}
                                defense={user.eye_color}
                                /> 
                            )
                        })
                    };
                <div className='grave br3 ba bw1 b--dark-pink bg-dark-pink o-60 '>
                </div>
                </div>
        </div>
    );
}

export default Graveyard;