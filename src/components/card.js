import React from 'react';
import "../css/card.css"
import "../css/cardsCities.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import NoFound from './cardsCities';



function Card(props) {  /* acoje las props del padre citie.pag */
    const [data, setData] = useState();
    useEffect(() => {
    if (props.search === undefined) {
      axios
        .get("http://localhost:4000/api/allcities") /* ´Con .get obtengo el dato de la bd */
        .then((respuesta) => setData(respuesta.data.response.ciudades));
    } else {
      setData(props.search);
    }
    }, [props.search]); /* para atualizar el valor de una variable aqui se declara la variable de cambio, esto es para evitar un loop */
    
    return (
      <div className='cards-city'>
      {data?.length !== 0 ? ( /* "?" crea mayor exactitud */
          data?.map((city) => (
          <div className='card'>
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