import React from 'react';
import Image from 'next/image';

import '../../../styles/page/feature.scss';

const FeaturePage = () => {
    return <div className='feature'>
        <section className='carousel-section'>
    
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
        </section>
        <section className="parallax-scrolling-section">
          {/* background: url('....') in SCSS */}  
        </section>
        {/* Section exploration */}
        <section className='exploration-section'>
            <p>Explorer des Figurines et acessior des vos animes preferer</p>
            <div className='container'>
                <div className=''>
                    
                </div>
            </div>
        </section>
    </div>
}

export default FeaturePage;