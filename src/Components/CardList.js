import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
    console.log("hola");
    return(
        <div>
            {
                characters.map((user,i) =>{
                    return ( 
                        <Card 
                        key={i} 
                        name={characters[i].name} 
                        birth_year={characters[i].birth_year}
                        /> 
                    )
                })
            };
        </div>  
    );
}   

export default CardList;