import React from 'react';
import Image from 'next/image';
import CarouselFeaturePage from '../components/carousel-feature-page';


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
    </div>
}

export default FeaturePage;