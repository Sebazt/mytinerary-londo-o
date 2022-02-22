import React from 'react';
import CallHome from '../components/callHome';
import CardsCities from '../components/cardsCities';
import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';




function PagCities() {
  
  
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