import React from 'react'

const Card = ({name}) => {
    return(
        <div className='dib ma2 card tl'>
            <img 
            alt='' 
            src="https://e1.pngegg.com/pngimages/558/734/png-clipart-jp-ygo-series-2-devamped-blanks-black-yu-gi-oh-dueling-card-thumbnail.png" 
            className='ma3 br2 ba bw1 b--dark-pink'>
            </img>
            <h2 className='cardname '>{name}</h2>
            <p className='cardtext '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>        
    )
}


export default Card;