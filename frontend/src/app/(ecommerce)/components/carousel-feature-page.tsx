// This is the carousel that is on the top of the Feature Page

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// import './swiper-bundle.min.css'

import "swiper/swiper-bundle.css";




interface  CarouselProps {
  animes : Anime [];
}

const CarouselFeaturePage: React.FC<CarouselProps> = ({animes}) => {

  const [backgroundImage, setBackgroundImage] = useState<string>(animes[0].manga_image_path);

  const handleSlideChange = (swiper :any ) => {

  
    // setCurrentSlide(swiper.activeIndex);
    
    // Change the parrallax anime background
    // parrallaxEL.current.style.backgroundImage = animes[swiper.activeIndex].manga_image_path;
    // console.log("Background Image " +  parrallaxEL.current?.style.background);
    // setCurrentSlide(swiper.activeIndex);
    setBackgroundImage(backgroundImage=> backgroundImage = animes[swiper.activeIndex].manga_image_path);

   
  };

  return (
    <div> {/* This div has no class  */}
      <div className="carousel-container-feature">
        <Swiper
          key={"carousel"}
          id={"carousel"}
          autoHeight={false}
          direction="horizontal"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          
          {animes.map(anime => (
            <SwiperSlide key={anime.id}>
            <div style={{backgroundColor : `${anime.carousel_background_color}`}} className="carousel-item">
              <div className="carousel-item__left">
                {/* Added the unoptimized prop for better image rendering */}
                <Image
                  src={anime.anime_image_path}
                  height={200}
                  width={200}
                  alt="gundam"
                  unoptimized
                />
              </div>
              <div className="carousel-item__right">
                <div className="carousel-item__right__upper-logo">
                  <Image
                    src={anime.anime_image_logo_path}
                    width={297}
                    height={192}
                    alt="Gundam Seed Image"
                  />
                </div>
                <div className="carousel-item__right__lower-button">
                  <button style={{ '--hover-color' : `${anime.carousel_background_color}`}} className="button">View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
          )}
        </Swiper>
      </div>
      {/** The css is located in the Feature.scss  */}
      <section style={ {backgroundImage: `url(${backgroundImage})` }} id="parrallax-scrolling-section" className="parallax-scrolling-section">
          {/* background: url('....') in SCSS */}  
        </section>
    </div>
  );
};


export default CarouselFeaturePage;
