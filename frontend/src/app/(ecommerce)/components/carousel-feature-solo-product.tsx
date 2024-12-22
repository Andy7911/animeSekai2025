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
      style={{ width: "100%", margin: "0 auto" }}
      className="carouselFeatureSoloProduct"
    >
      <Swiper
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
       
        navigation={{
          nextEl: `.swiper-button-next${parameterName}`,
          prevEl: `.swiper-button-prev${parameterName}`,
        }}
        pagination={{ clickable: true }}
        // pagination= {{
        //     el : "swiper-pagination",
        // }}s
        // loop={true}
      >
        <SwiperSlide>
          <div className="carousel-item">
            <Image unoptimized width={292} height={490} src="/kakashi.png" alt="Kakashi Image"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselFeatureSoloProduct;
