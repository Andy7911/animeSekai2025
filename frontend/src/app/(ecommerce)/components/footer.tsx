import React from 'react';

import Image from "next/image";

import "../../../styles/components/footer.scss"

const Footer = () => {
    return <div className='footer'>
        <div className="grid">
            <div className='grid__left'>
                <h3 className='text-social-media'>Reseaux Sociaux</h3>
                <div className='social-media-icons'>
                    <Image src="/Instagram.svg" width={40} height={40} alt="Instagram icon" />
                    <Image src="/TwitterX.svg" width={40} height={40} alt="Twitter X icon" />
                </div>
            </div>
            <div className='grid__middle'>
                <h3 className="text-video-hosting-policy">Politque d'herbergement de contenu</h3>
                <p>Anime Sekai n'héberge aucune vidéo sur son serveur. Contactez directement la plateforme d'hébergement vidéo pour toutes réclamations de droits relatifs aux contenus en question.</p>
            </div>
            <div className="grid__right">
                <h3 className=''>Newsletters</h3>
                <p>Abonnez-vous à notre newsletter pour recevoir votre dose hebdomadaire d'actualités, de mises à jour, de conseils et d'offres spéciales</p>
                <input className="button-email"  type="text" name="email" id="" placeholder='Enter your email' />
            </div>
        </div>
    </div>
}

export default Footer;