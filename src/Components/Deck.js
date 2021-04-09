import React from 'react'
import Tilt from 'react-tilt'

const Deck = ({pickUpCards}) => {
    return(
        <div className='deck tc'>
                <h1>DECK</h1>
                    <Tilt className="Tilt dcenter" options={{ max : 25 }} style={{ height: '250px', width: '200px',}} >
                        <div className="Tilt-inner">
                            <img
                            alt='' 
                            src="https://i.pinimg.com/originals/78/81/c4/7881c41a769f124d061ad659b8545164.jpg" 
                            className='br2 br bb bw3 b--dark-pink deckgrow'
                            onClick={pickUpCards}
                            >
                            </img>
                        </div>
                    </Tilt>
        </div>
    )
}

export default Deck;