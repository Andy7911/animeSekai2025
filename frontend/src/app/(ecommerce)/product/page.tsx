import React from "react";

import Image from "next/image";

import "./page.scss";
import Carousel from "../components/carousel";
import CarouselRelatedItems from "../components/carousel-related-items";
/* Import Swiper styles */

const DetailPage = () => {
  return (
    <div className="page bg-red-400">
      <div className="info bg-blue-400">
        {/* Left Side with Image */}
        <div className="info__left">
          {" "}
          <Image
            src="/gundam.png"
            alt="Gundfam Toy"
            width={624}
            height={730}
          />{" "}
        </div>
        {/* Right Side  */}
        <div className="info__right">
          {/* 16% heigth*/}
          <h2>Strike Freedom</h2>
          {/* 11% heigth */}
          <span>30.66 $</span>
          {/* 8% heigth */}
          <h3>Product description</h3>
          {/* 47% */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            quam ipsam. Fugiat, accusamus.
          </p>

          {/* 18%  */}
          <h3>Box Content</h3>
          <ul>
            <li>Guide</li>
            <li>Saber</li>
          </ul>
        </div>
      </div>

      <section className="info-image-cart">
        {/* Carousel with different images  */}
        <div className="info-image-cart__left">
          {/* <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={105}
              height={105}
            />
          </div>
          <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={105}
              height={105}
            />
          </div>
          <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={105}
              height={105}
            />
          </div> */}

<       CarouselRelatedItems parameterName="asdsds"/>
        </div>
        {/* Button to add item to cart */}
        <div className="info-image-cart__right">
          {" "}
          <button className="btn">Add to Cart</button>
        </div>
      </section>

      <section className="related-items-title">
        <p>Related items</p>
      </section>

      <section className="related-items-carousel">
        <div>
          {" "}
          <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={286}
              height={226}
            />
          </div>
          <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={286}
              height={226}
            />
          </div>
          <div>
            <Image
              src="/gundam.png"
              alt="Gundfam Toy"
              width={286}
              height={226}
            />
          </div>{" "}
        </div>
      </section>

      <section className="bg-green-400 c">
        {/* <Carousel parameterName="carousel-2" /> */}
        < CarouselRelatedItems parameterName="sdsdsdwerwer32rt3"/>

      </section>
    </div>
  );
};

export default DetailPage;
