import React, { useState, useEffect } from "react";
import "../css/card.css";
import { useParams } from "react-router-dom";
/* import WebConstruction from '../assets/webConstruction.png' */
import "../css/details.css";
import axios from 'axios'
import Bike from '../assets/bike.gif'
import ItineraryAccordion from "./itineraryCard";



function CardDetails() {
  const { id } = useParams(); /* metodo de react-router-dom retorna un objeto de forma dinamica */
  const [card, setCard] = useState()

  useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
  useEffect(()=>{ /* funciona para renderizar por 1ra vez y su actualización */
    axios.get('http://localhost:4000/api/allcities')
    .then(respuesta=>setCard(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
    /* En la anterior linea filtro los id para pode renderizarlos con el map de la linea 24 */
},[])
  
   return (
    <div className="container-fatherdetails">
      {card?.map((city) => (
         <div>
            {/* <h1 className="title-details">{city.name}</h1> */}
            <div className="card1">
            <img src={city.image} alt="ciudad" className="img-citydetails" />             
                {/* <h4>{city.country}</h4> */}                
            </div>            
        </div>
      ))}
      {card?.map((city) => (
      <div className="maindetails">
        <div className="img-detailsmoto">
          <img src={Bike} alt="ciudad" className="bike" />
          <h2 className="h2-details">{city.name}</h2> 
        </div>
        <div className="img-detailsmoto">
          <img src={process.env.PUBLIC_URL+ `/imgCountry/${city.flag}`} alt="bandera" className="bandera" />
          <h2 className="h2-details">{city.country}</h2> 
        </div>
        <div className="img-detailsmoto">
          <img src={process.env.PUBLIC_URL+ `/imgCountry/${city.culture}`} alt="culture" className="bike" />
          <h2 className="h2-details">{city.countryculture}</h2> 
        </div>
                 
      </div>
      ))}
      <div>
        <ItineraryAccordion/>
      </div>  
    </div>
  );
}

export default CardDetails;
