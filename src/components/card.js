import React from 'react';
import "../css/card.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios"



function Card(props) {  
    const cities = props.cities
    
    /* aquí con las propiedades ya toma el valor para hacer el map, y a s vez incluyo un operador ternario */
    return (
      <>
      {cities?.map(city=>
          <div className='card'>
              <img src={city.image} alt="ejemplo" className='img-card' /> 
              <div className='description'>
                    <h3>{city.name}</h3>
                    <h4>{city.country}</h4>
                    
                    {/* así se saca el id dinamicamente a través de un linRouter */}

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