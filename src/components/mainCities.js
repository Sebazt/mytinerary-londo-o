
import React from 'react';
import "../css/mainCities.css"
import SearchCities from '../components/searchCities';
import MapWorld from '../assets/mapworld.png'



function MainCities() {
  
  
    return (
      
          <section className='main-city'>
              <div className='subtitle-city'>
                  <h2>¡ Time to live, time to love !</h2>
              </div>

              <div className='img-city'>
                <img src={MapWorld} alt="Map of world" className='imageWorld'/>   
              </div>               
          </section>
     
    );
  }
  
  export default MainCities;