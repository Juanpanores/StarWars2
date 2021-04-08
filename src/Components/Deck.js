import React from 'react'
import Tilt from 'react-tilt'

const Deck = ({pickCard}) => {
    return(
        <div className='dib ml4 deck mr1' style={{alignItems: 'flex-end'}}>

        <div className='dib col '>
        <div>
        <h1 className='tc'>DECK</h1>
        </div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 300, width: 200,}} >
                <div className="Tilt-inner">
                    <img
                    alt='' 
                    src="https://i.pinimg.com/originals/78/81/c4/7881c41a769f124d061ad659b8545164.jpg" 
                    className='br2 br bb bw3 b--dark-pink '
                    onClick={pickCard}
                    >
                    </img>
                </div>
            </Tilt>
        </div>
        </div>
        
    )
}

export default Deck;