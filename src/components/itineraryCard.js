import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "../css/itineraryCard.css";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
/* import WebConstructor from '../assets/webConstruction.png' */
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



function ItineraryAccordion(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




  /* console.log(props.itineraries) */
  if (!props.itinerary) {
    return (<h1>esta cargando</h1>)
  }
  return (
    <div >

      <div className="accordion-container" key={props.itinerary._id}>
        <div className="accordio-sub">
          <h2 className="subtitulo-accordion">{props.itinerary.event}</h2>
        </div>

        <div className="containeruser">
          <h2 className="nameuser-accordion">{props.itinerary.nameUser}</h2>
          <div className="photouser-accordion">
            <img src={props.itinerary.imageUser} alt="ejemplo" className="userimg" />
          </div>
        </div>


        <div className="accordion-items">
          <h2 className="duration">Price: {"💵".repeat(parseInt(props.itinerary.price))}</h2>
        </div>

        <div className="accordion-items">
          <p className="duration">{props.itinerary.duration}</p>
        </div>

        <div className="accordion-items">
          {/* <img src={process.env.PUBLIC_URL+ `/imgCountry/${props.itinerary.likes}`} className="item2"/> */}
          <h2 className="item2">🤍0</h2>
        </div>


        <div className="accordion-items item4">
          <p className="hastash">{props.itinerary.hashtag}</p>
        </div>

        <div className="accordion-imgcity">
          <img src={process.env.PUBLIC_URL + `/imgCountry/${props.itinerary.imgItinerarie}`} alt="city" className="imgcity-accordion" />
        </div>

        {/* Esta es la parte que despliega automaticamente */}

        <div className="container-togle">
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}>
              <button className="boton-acordion"> {expanded ? "" : "Show more"} <SportsMotorsportsIcon /></button>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>


            <CardContent>
              <div className="accordion-hid">
                {/* <img src={WebConstructor} alt="Page in Construction" className='img-contructo' /> */}
                
                <div className="card-accordion">
                  <div id="items-card-accordion">
                    <img src={process.env.PUBLIC_URL + `/imgCountry/${props.itinerary.imgItinerarie}`} alt="city" className="image-activities" />
                    <h2 id="titulo-accordion">Card title</h2>
                  </div>
                </div>

                <div className="card-accordion">
                  <div id="items-card-accordion">
                    <img src={process.env.PUBLIC_URL + `/imgCountry/${props.itinerary.imgItinerarie}`} alt="city" className="image-activities" />
                    <h2 id="titulo-accordion">Card title</h2>
                  </div>
                </div>

                <div className="card-accordion">
                  <div id="items-card-accordion">
                    <img src={process.env.PUBLIC_URL + `/imgCountry/${props.itinerary.imgItinerarie}`} alt="city" className="image-activities" />
                    <h2 id="titulo-accordion">Card title</h2>
                  </div>
                </div>

              </div>


              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}>
                <button className="boton-acordion">Show less <SportsMotorsportsIcon /></button>
              </ExpandMore>
            </CardContent>

          </Collapse>
        </div>
      </div>

    </div>
  )



}


export default ItineraryAccordion