import React from 'react'

const Card = ({user,name,birthYear,pickCard}) => {
    return(
        <div className='dib ma2 card br2 tl' onClick={() => pickCard(user)} >

            <h2 className='cardname '>{name}</h2>
            <p className='cardtext '>   
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className='atack '>{name.length}</h2>
            <h2 className='defense '>{Math.round(name.length)}</h2>
        </div>        
    )
}


export default Card;