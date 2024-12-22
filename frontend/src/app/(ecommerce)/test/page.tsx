import React from "react";

import './page.scss'

import Footer from "../components/footer";
import Pokeball from "../components/feature_components/pokeball";
import BlogCard from "../components/feature_components/blog_card";
import CarouselFeatureSoloProduct from "../components/carousel-feature-solo-product";


const page = () => {
  return (
    <div className="test bg-pink-900">
       <CarouselFeatureSoloProduct />
    </div>
  );
};

export default page;
