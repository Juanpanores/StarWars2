import React from 'react'
import Tilt from 'react-tilt'

const Deck = () => {
    return(
        <div className='dib tc ml5 mt2 mb5 mr5 deck'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100,}} >
                <div className="Tilt-inner">
                    <img
                    alt='' 
                    src="https://i.pinimg.com/originals/78/81/c4/7881c41a769f124d061ad659b8545164.jpg" 
                    className='br2 br bb bw3 b--dark-pink '>
                    </img>
                </div>
            </Tilt>
        </div>
        
    )
}

export default Deck;