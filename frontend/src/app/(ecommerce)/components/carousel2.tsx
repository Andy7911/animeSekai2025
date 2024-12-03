"use client"

import React from 'react'
import Image from 'next/image';
import Script from 'next/script';
import { Swiper } from 'swiper';

import "swiper/css"

const carousel2 = () => {


    // Initialize Swiper
  new Swiper('.swiper-container', {
    // Swiper options
    loop: true,  // Enable infinite loop
    slidesPerView: 1,  // Number of slides to show at a time
    spaceBetween: 10,  // Space between slides
    autoplay: {
      delay: 2500,  // Delay between slide transitions (in ms)
      disableOnInteraction: false,  // Keeps autoplay running after interactions
    },
    pagination: {
      el: '.swiper-pagination',  // Element for pagination
      clickable: true,  // Make pagination clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',  // Next slide button
      prevEl: '.swiper-button-prev',  // Previous slide button
    },
  });
  


  return (
    <>
        <div className="swiper-container">
  <div className="swiper-wrapper">
    <div className="swiper-slide">
    <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
    </div>
    <div className="swiper-slide">
    <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
    </div>
    <div className="swiper-slide">
    <Image src="https://placehold.co/600x400/png" width={200} height={200} alt="gundam" />
    </div>
   
  </div>

 
  <div className="swiper-pagination"></div>

 
  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</div>

<Script
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
        strategy="afterInteractive" // This ensures the script loads after the page becomes interactive
        async // Async ensures the script is loaded asynchronously
      />
    </>
  )
}

export default carousel2