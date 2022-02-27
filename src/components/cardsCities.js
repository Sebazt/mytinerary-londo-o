
import React from 'react';
import "../css/cardsCities.css"
import Card from './card';


function CardsCities(props) {
    const cities = props.cities
    /* con la constante definidad y los valores de ciudades guardadas en cities la utilizo como pros, y a su vez se la doy como propiedad al otro componente hijo, llamado card */
    return (
      
          <div className='cards-city'>
              <Card cities={cities}/>
                                      
          </div>
            
    );
  }
  
  export default CardsCities;