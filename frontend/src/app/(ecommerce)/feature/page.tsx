import React from 'react';
import Image from 'next/image';
import CarouselFeaturePage from '../components/carousel-feature-page';
import BlogCard from '../components/feature_components/blog_card';
import AboutCard from '../components/feature_components/about_card';
import CarouselFeatureSoloProduct from '../components/carousel-feature-solo-product';
import CarouselFeatureCollectionProduct from '../components/carousel-feature-collection-product';

// TODO Feature page
// The background color, the manga image, and the problaby the pokeball style image will need to change
// when the image changes
// You will need to detect the swiper on Carousel changes
// The change the background color of the Carousel-section and the parallax-scrolling-section


const FeaturePage = () => {
    return <div className='feature'>
        <section className='carousel-section'>
    
            {/* Added the unoptimized prop for better image rendering */}
            {/* <div className="carousel-item">
                <div className='carousel-item__left'>
                    
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
            </div> */}
            
            <CarouselFeaturePage parameterName={'carousel'}  />
        </section>
        <section className="parallax-scrolling-section">
          {/* background: url('....') in SCSS */}  
        </section>
        {/* Section exploration */}
        <section className='exploration-section'>

            

            <p>Explorer des Figurines et acessior des vos animes preferer</p>
            <div className='flex'>
                
                <div className="exploration-section__content">
                    <Image src="/cosplay.png" width={154} height={154} alt='Cosplay image' />
                    <p>cosplay</p>
                </div>
                <div className="exploration-section__content">
                    <Image src="/robot.png" width={154} height={154} alt="Figurine image" />
                    <p>Figurine</p>
                </div>
                <div className="exploration-section__content">
                    <Image src="/comic.png" width={154} height={154}  alt="Manga or novel" />
                    <p>Manga or novel</p>
                </div>
            </div>
        </section>

        <section className="insight-idea-section">
            <div className="insight-idea-section__blogCard">
                <BlogCard title="Blog" body="Comment choisir la meilleure figurine pour votre collection" right_side_circle={true}/>
                <BlogCard title="Astuces" body="Décrouvez nos rubriques Actuces" />
            </div>
            
            <AboutCard />
            
        </section>

        <section className='feature-product-section'>
            <div className='feature-product-section__grid'>
                <CarouselFeatureSoloProduct parameterName='solo-product' />
      
                {/* <CarouselFeatureCollectionProduct /> */}
            </div>
            
            <div className="feature-product-section__see-offers">
                <a href="/filter">See All</a>
            </div>
        </section>
    </div>
}

export default FeaturePage;