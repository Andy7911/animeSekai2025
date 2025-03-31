"use client"

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Image from 'next/image';

interface ICarousel {
  parameterName : string
}

const CarouselFeatureSoloProduct : React.FC<ICarousel> = ({parameterName}) => {

  

  return (
    <div
      className="carouselFeatureSoloProduct"
    >
      <Swiper
        className="carouselFeatureSoloProductSwiperInit"
        key={"solo-product"}
        id={"solo-product"}
        autoHeight={true}
        direction="horizontal"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
       
        navigation={true}
        // navigation={{
        //   nextEl: `.swiper-button-next${parameterName}`,
        //   prevEl: `.swiper-button-prev${parameterName}`,
        // }}
        // pagination={{ clickable: true }}
        // pagination= {{
        //     el : "swiper-pagination",
        // }}s
        // loop={true}
        
      >
        <SwiperSlide>
          <div className="carousel-item">
            <Image className="carousel-item__image" unoptimized width={292} height={482 * 0.8} src="/kakashi.png" alt="Kakashi Image"/>
            <div className="carousel-item__info">
              <p className="carousel-item__info__name">Kakashi</p>
              <p className="carousel-item__info__price">$ 10</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <Image className="carousel-item__image" unoptimized width={292} height={482 * 0.8} src="/gundam_toy.png" alt="Kakashi Image"/>

            <div className="carousel-item__info">
              <p className="carousel-item__info__name">Gundam</p>
              <p className="carousel-item__info__price">$ 15</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselFeatureSoloProduct;
