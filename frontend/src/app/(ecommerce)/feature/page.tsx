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
    </div>
}

export default FeaturePage;