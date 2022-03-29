import React from "react";
import Zeta from '../assets/zeta.png'
import "../css/zeta.css";


export default function ZetaRobot() {
  return (
      <div className="container-zeta">
        <h1 className="title-zeta">Zeta is working for you, wait please...</h1>
        <img src={Zeta} alt="Map of world" className='zeta'/>   
      </div>  
  );
}