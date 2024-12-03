"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules' ;
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

import  './carousel.module.css'
// import './swiper-bundle.min.css'

import "swiper/swiper-bundle.css";



// Swiper styles


const Carousel = () => {
  return (
    <div style={{ position: 'relative', width: '80%' , margin : '0 auto' }}  className="carousel-container">

      <Swiper
        autoHeight={true}
        direction="horizontal"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // pagination={{ clickable: true }}
        // loop={true}
      >
        <SwiperSlide>
        <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
        </SwiperSlide>
      </Swiper>

      <div style={{right : "-10%"}} className="swiper-button-next"></div>
      <div style={{left : "-10%"}} className="swiper-button-prev"></div>
    </div>
  );
};

export default Carousel;
