
import CarrouselImg from '../components/carrousel';
import HeroPag from '../components/hero';
import VideoHed from '../components/videoHed';
import React, {useEffect} from "react";

/* el window scroll to es para que la pagina vuelva a comenzar desde el principio y no desde donde se dejo el scroll. */

function HomePag() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
    return (
      
          <div>
       
              <VideoHed/>

              <HeroPag/>
          
          
              <CarrouselImg/>
                    
        
          </div>
     
    );
  }
  
  export default HomePag;