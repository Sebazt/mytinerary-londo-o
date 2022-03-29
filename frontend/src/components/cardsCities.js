import Cat from '../assets/cat.png'
import React from 'react';
import "../css/nofound.css"



function NoFound () {
    
    return (
      
          <div className='found'>
              <h1 className='tituloCard1'>Opps, We are sorry<br/>
              We can't find your city
              </h1>   
              <img src={Cat} alt="Git-hub" className='imageCat'/>                         
          </div>
            
    );
  }
  
  export default NoFound;