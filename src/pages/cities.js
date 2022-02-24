/* import React from 'react'; */
import CallHome from '../components/callHome';
import CardsCities from '../components/cardsCities';
import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';
import React, {useEffect} from "react";




function PagCities() {
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