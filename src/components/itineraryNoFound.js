import React from "react";
import "../css/itineraryNofound.css";
import Robot from '../assets/robot-nofound.png'



export default function ItinerarieNoFound() {
  return (    
     
      <div className="nofound-Itinerary">
        <div className="title-nofound">
          <p>Sorry Zeta still does not have itineraries for this city.</p>
        </div>
        <div className="img-nofound">
          <img src={Robot} alt="robot"/>
        </div>
      </div>
  );
}