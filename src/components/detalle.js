import React, { useState, useEffect } from "react";
import "../css/card.css";
import Cities from "./datos";
import { Link as LinkRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import WebConstruction from '../assets/webConstruction.png'
import "../css/details.css";
import axios from 'axios'



function CardDetails() {
  const { id } = useParams(); /* retorna un objeto de forma dinamica */
  const [card, setCard] = useState()
    
  useEffect(()=>{
    axios.get('http://localhost:4000/api/allcities')
    .then(respuesta=>setCard(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
    /* En la anterior linea filtro los id para pode renderizarlos con el map de la linea 24 */
},[])
  
   return (
    <>
      {card?.map((city) => (
        <div className="containerDetails">
            <div className="card">
            <img src={city.image} alt="ejemplo" className="img-card" />
            <div className="description">
                <h3>{city.name}</h3>
                <h4>{city.country}</h4>
                <button className="boton-city">See more</button>
            </div>          
            </div>
            <div className="contrution">
                <img src={WebConstruction} alt="ejemplo" className="img-web" />
            </div>
        </div>
      ))}
    </>
  );
}

export default CardDetails;
