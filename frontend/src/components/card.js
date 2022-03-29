import React from 'react';
import "../css/card.css"
import "../css/cardsCities.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import NoFound from './cardsCities';



function Card(props) {  /* acoje las props del padre citie.pag */
    

    return (
      <div className='cards-city'>
      {props.cities?.length !== 0 ? ( /* "?" crea mayor exactitud */
          props.cities?.map((city) => (
          <div className='card' key={city._id}>
              <img src={city.image} alt="ejemplo" className='img-card' /> 
              <div className='description'>
                    <h3>{city.name}</h3>
                    <h4>{city.country}</h4>
                    
                    {/* así se saca el id dinamicamente a través de un linRouter */}

                    <LinkRouter to={`details/${city._id}`}>
                    <button className='boton-city'>See more</button>
                    </LinkRouter>
              </div>        
          </div>
      ))
      ) : (
        <NoFound/>       
      )}
      </div>
    );
}
  
  export default Card;