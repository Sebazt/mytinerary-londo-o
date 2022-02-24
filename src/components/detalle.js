import React, { useState } from "react";
import "../css/card.css";
import Cities from "./datos";
import { Link as LinkRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import WebConstruction from '../assets/webConstruction.png'
import "../css/details.css";



function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = React.useState(
    Cities.filter((city) => city.id == id)
  );
  /* No hay necesidad de usar el seteo. */
  
  return (
    <>
      {card.map((city) => (
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
