
import React from 'react';
import "../css/videoCities.css"
import VideoCity from '../assets/video-city.mp4'



function VideoCities() {
  
  
    return (
          <div className='video-city'>
            
            <video 
            autoPlay
            loop
            muted
            className='videoC'
            >              
              <source src={VideoCity} type="video/mp4"/>
            </video>     
          </div>
     
    );
  }
  
  export default VideoCities;
