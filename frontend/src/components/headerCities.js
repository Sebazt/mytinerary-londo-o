
import React from 'react';
import "../css/headerCities.css"
import VideoCities from './videoCities';



function HeaderCities() {
  
  
    return (
      
          <div className='header-city'>
            <h1 className='titles-cities'>Bright lights</h1>
            <VideoCities/>               
          </div>
     
    );
  }
  
  export default HeaderCities;