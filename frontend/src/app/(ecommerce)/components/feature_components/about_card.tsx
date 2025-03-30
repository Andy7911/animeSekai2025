import React from 'react';

import Image from 'next/image';

const AboutCard = () => {
    return <div className='aboutCard'>
        <h2 className='title'>A Propos</h2>
        <p className='content'> Bienvenue sur ANIMESEKAI  boutique ! Notre mission est de rassembler les fans d'anime autour de produits dérivés de qualité, soigneusement sélectionnés pour répondre à vos passions.</p>
        
        <Image width={266} height={240} src="/Luffy-Gear-5.png" alt="Image of Luffy" />
    </div>
}

export default AboutCard;