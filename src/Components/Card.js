import React from 'react'

const Card = ({user,name,pickCard,attack,defense,onboard}) => {
    let onboardd = onboard ? 'scaled dib br2 tl': 'card dib ma2 br2 tl'
    return(
        <div className={onboardd} onClick={() => pickCard(user)} >

            <h2 className='cardname '>{name}</h2>
            <p className='cardtext '>   
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <h2 className='attack'>{attack.length}</h2>
            <h2 className='defense'>{defense.length}</h2>
            <img alt='' className='charphoto' src={`https://robohash.org/${name}?200x200`}/>
        </div>        
    )
}


export default Card;