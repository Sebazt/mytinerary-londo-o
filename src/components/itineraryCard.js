import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "../css/itineraryCard.css";





function ItineraryAccordion(){
    const { id } = useParams();
    const [card, setCard] = useState();

    /* const del accordion */
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef()

    /* useEffect(() =>{
      setHeightEl(`${refHeight.current.scrollHeight}px`) 
    }, [])  */         /* aqui tengo el problema */

    const toggleState = () => {
      setToggle(!toggle)
    }

    useEffect(()=>{ 
      
    axios.get('http://localhost:4000/api/allcities')
    .then(respuesta=>setCard(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
},[])

    


  return (
    <div >
      {card?.map((city) => (
        <div className="accordion-container">
          <div className="accordio-sub">
            <h2 className="subtitulo-accordion">Atrapalos ya</h2>
          </div>

          <div className="containeruser">
            <h2 className="nameuser-accordion">Charmander</h2>
            <div className="photouser-accordion">
              <img src={process.env.PUBLIC_URL+ `/imgCountry/${city.culture}`} alt="culture" className="userimg" />
            </div>
          </div>


          <div className="accordion-items">
            <p className="item1">precio</p>
          </div>

          <div className="accordion-items">
            <p className="item1">tiempo</p>
          </div>
          <div className="accordion-items">
            <p className="item2">Corazon</p>
          </div>

          
          <div className="accordion-items item4">
              <p className="hastash">uno</p>
              <p className="hastash">dos</p>
              <p className="hastash">tres</p>
          </div>
          
          <div className="accordion-imgcity">
            <img src={city.image} alt="ciudad" className="imgcity-accordion" /> 
          </div>

          <div className="buton-accordion">
             
            <button 
            onClick={toggleState}
            className={toggle ? "view more" : "view less"}
            >View more</button>            
          </div>

          <div className={toggle ? "accordion-toggle animated" : "accordion-toggle"} ref={refHeight}
          style={{height: toggle ? `${heightEl}` : "0px"}}>
            <h2>asasss</h2>
            
          </div>

        </div>
      ))}
    </div>
  )



}
export default ItineraryAccordion;