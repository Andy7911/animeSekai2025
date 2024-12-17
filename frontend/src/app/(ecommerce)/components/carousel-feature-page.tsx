"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules' ;
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";


// import './swiper-bundle.min.css'

import "swiper/swiper-bundle.css";



// Swiper styles

interface SwiperParameter {
  parameterName : string,
  width?: string // ex : 75%,
  navigationButtonOffset? : string // ex 10%
  navgiationButtonfontSize? : string
  spaceBetweenSlide? : number,
  slidesPerView? : number

}


const CarouselFeaturePage : React.FC<SwiperParameter> = ( { parameterName, width = "100%", navigationButtonOffset = "-10%" , spaceBetweenSlide = 50, slidesPerView = 1  }) => {
  return (
    <div style={{ position: 'relative', width: width , margin : '0 auto' }}  className="carousel-container-feature">

      <Swiper
        key={parameterName}
        id={parameterName}
        autoHeight={false}
        direction="horizontal"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetweenSlide}
        slidesPerView={slidesPerView}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // navigation={{ 
        //   nextEl: `.swiper-button-next${parameterName}`,
        //   prevEl: `.swiper-button-prev${parameterName}`,
        // }}
        pagination={{ clickable: true }}
        // loop={true}
      >
        <SwiperSlide>
        <div className="carousel-item">
                <div className='carousel-item__left'>
                    {/* Added the unoptimized prop for better image rendering */}
                    <Image src="/gundam.png" height={200} width={200} alt="gundam" unoptimized />
                </div>
                <div className='carousel-item__right'>
                    <div className="carousel-item__right__upper-logo">
                        <Image src="/Mobile_Suit_Gundam_SEED_logo.png" width={297} height={192} alt='Gundam Seed Image'/>
                    </div>
                    <div className="carousel-item__right__lower-button">
                        <button className="button">View More</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel-item">
                <div className='carousel-item__left'>
                   
                    <Image src="/goku_flying.jpg" height={200} width={200} alt="gundam" unoptimized />
                </div>
                <div className='carousel-item__right'>
                    <div className="carousel-item__right__upper-logo">
                        <Image src="/dragon-ball-z-logo.png" width={297} height={192} alt='Gundam Seed Image'/>
                    </div>
                    <div className="carousel-item__right__lower-button">
                        <button className="button">View More</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
      
        </SwiperSlide>
        <SwiperSlide>
        
        </SwiperSlide>
      </Swiper>

      {/* <div style={{right : navigationButtonOffset}} className={'swiper-button-next ' + `swiper-button-next${parameterName}` } ></div>
      <div style={{left : navigationButtonOffset}} className={`swiper-button-prev ` + `swiper-button-prev${parameterName}`}></div> */}
    </div>
  );
};

export default CarouselFeaturePage;
