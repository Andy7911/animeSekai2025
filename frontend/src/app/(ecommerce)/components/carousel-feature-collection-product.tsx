"use client"
import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Image from 'next/image';


const CarouselFeatureCollectionProduct = () => {
    return <div className='carouselFeatureCollectionProduct'>
          <Swiper
        className="carouselFeatureSoloProductSwiperInit"
        key={"solo-product1"}
        id={"solo-product1"}
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
            <Image className="carousel-item__image" unoptimized width={292} height={482 * 0.8} src="/gundamCollectionBox.png" alt="Kakashi Image"/>
            <div className="carousel-item__info">
              <p className="carousel-item__info__name">Gundam Collection</p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
}

export default CarouselFeatureCollectionProduct;