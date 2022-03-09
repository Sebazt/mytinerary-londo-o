import React, { useState, useEffect } from "react";
import "../css/card.css";
import { useParams } from "react-router-dom";
/* import WebConstruction from '../assets/webConstruction.png' */
import "../css/details.css";
import axios from 'axios'
import Bike from '../assets/bike.gif'
import ItineraryAccordion from "./itineraryCard";
import BotontoCalls from "./backhome";
import Backtocities from "./backcities";
import ItinerarieNoFound from "./itineraryNoFound";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesAction";
import ZetaRobot from "./zeta";

import itinerariesActions from "../redux/actions/itinerariesAction"



function CardDetails(props) {



  const { id } = useParams(); /* metodo de react-router-dom retorna un objeto de forma dinamica */
  const [card, setCard] = useState({ element: props.cities.find((i) => i._id.toString() === id.toString()) })

  /*  const [mensaje, setMensaje] = useState(false); */


  useEffect(() => {
    if (props.cities.length < 1) {
      props.fetchearUnaCiudad(id)
        .then((traerId) => setCard({ element: traerId }))
    }
    window.scrollTo(0, 0)
    props.filterItinerarieForCity(id)
  }, [])

  if (!card.element) {
    return (<ZetaRobot /> )
  }



  return (

    <div className="container-fatherdetails">
      {console.log(props.itineraries)}
      <div>
        <div className="card1">
          <img src={card.element.image} alt="ciudad" className="img-citydetails" />
        </div>
      </div>



      <div className="maindetails">
        <div className="img-detailscity">
          <img src={Bike} alt="ciudad" className="bike" />
          <h2 className="h2-details">{card.element.name}</h2>
        </div>
        <div className="img-detailsmoto">
          <img src={process.env.PUBLIC_URL + `/imgCountry/${card.element.flag}`} alt="bandera" className="bandera" />
          <h2 className="h2-details">{card.element.country}</h2>
        </div>
        <div className="img-detailsculture">
          <img src={process.env.PUBLIC_URL + `/imgCountry/${card.element.culture}`} alt="culture" className="bike" />
          <h2 className="h2-details">{card.element.countryculture}</h2>
        </div>

      </div>


      <div>
        <ItineraryAccordion itinerary={props.itineraries} />
      </div>
  
      <ItinerarieNoFound estado={props.itineraries.length ? false : true} />
      
      {/* {props.itineraries.length } */}
      <div className="butonsToBack">
        <BotontoCalls />
        <Backtocities />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  filtrarCities: citiesActions.filtrarCities,
  filterItinerarieForCity: itinerariesActions.filterItinerarieForCity,
  fetchearUnaCiudad: citiesActions.fetchearUnaCiudad
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
    filterCities: state.citiesReducer.filterCities,
    itineraries: state.itinerariesReducer.itineraries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)

