
import React from 'react';
import "../css/card.css"
/* import Ejemplo from '../assets/eren.jpeg' */
import Cities from "./datos";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";



function Card() {
  
  
    return (
      <>
      {Cities.map(city=>
          <div className='card'>
              <img src={city.image} alt="ejemplo" className='img-card' /> 
              <div className='description'>
                    <h3>{city.name}</h3>
                    <h4>{city.country}</h4>
                    
                    {/* así se sapa el id dinamicamente a través de un linRouter */}

                    <LinkRouter to={`details/${city.id}`}>
                    <button className='boton-city'>See more</button>
                    </LinkRouter>
              </div>        
          </div>
      )}
       </>
     
    );
  }
  
  export default Card;