
import React from 'react';
import "../css/videoHed.css";

import VideoHed from '../assets/video.mp4'



function VideoHeader() {
  
  
    return (
          <div className='contenedor-VideoHome'>
            {/* <img className='logotipo' src={Logo} alt="logo" width={100} />  */}
            <h1 className='titulo-ppal'>Mytinerary</h1> 
            <video 
            autoPlay
            loop
            muted
            className='video'
            >              
              <source src={VideoHed} type="video/mp4"/>
            </video>     
          </div>
     
    );
  }
  
  export default VideoHeader;
