/* import React from 'react'; */
import CallHome from '../components/callHome';
import CardsCities from '../components/cardsCities';
import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"




function PagCities() {

  const [apiCiudades, setApiCiudades ]= useState([])

  useEffect(()=>{


    /* allcities es el entpoint */
    axios.get("http://localhost:4000/api/allcities")
    .then(response=>console.log(response.data.response.ciudades))


  },[])


  useEffect(() => { /* hook  */
      window.scrollTo(0, 0)  /* scrolear en eje x y eje y  */
    }, [])
  
    return (
      
          <div>
              <HeaderCities/>

              <MainCities/> 

              <CardsCities/>

              <CallHome/>
                  
          </div>
     
    );
  }
  
  export default PagCities;