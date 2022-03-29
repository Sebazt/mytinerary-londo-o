// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/carrousel.css";

// import required modules
import { Grid, Autoplay, Pagination, Navigation } from "swiper";
import Cities from "./datos";
import {Link as LinkRouter} from "react-router-dom";

// import required modules

export default function CarrouselImg() {
  return (
      <div className="swip" > 
    <>
      <Swiper
breakpoints={{
  0: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid:{
      rows: 2,
    },
    spaceBetween:15,
  },

  768: {
    slidesPerView: 2,
        slidesPerGroup: 2,
        grid:{
          rows: 2,
        },
        spaceBetween:15,
  }
}}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2
        }}
        spaceBetween={15}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Grid, Pagination, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        
      >
        

        {Cities.map(city =>
        <SwiperSlide className="swiper-slide" key={city._id}>
          <img className="imagenes" src={city.image}  alt="Ciudad"/>
          
          <h3 className="subtitulo-cartas">{city.name}</h3>
        </SwiperSlide> 
        )}
      </Swiper>
    </>
    </div>
  );
}

