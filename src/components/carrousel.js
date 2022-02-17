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
import cities from "./cities";

// import required modules

export default function App() {
  return (
      <div className="swip" > 
    <>
      <Swiper
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
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        

        {cities.map(city =>
        <SwiperSlide>
          <img className="imagenes" src={city.image}  alt="Ciudad"/>
          <h3>{city.name}</h3>
        </SwiperSlide> 
        )}
      </Swiper>
    </>
    </div>
  );
}

