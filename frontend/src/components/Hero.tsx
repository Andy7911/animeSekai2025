'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import img from '../../public/img/rengoku.webp'
import gif from '../../public/img/demon-slayer-gif-converter.gif';
import music from '../../public/audio/demon-slayer-rengoku.MP3';
import star from '../../public/img/Star.png'
export default function Hero() {
    const audioRef = useRef(null);
    const [hidden, setHidden] = useState(false);
    useEffect(() => {

    }, [hidden])
    const animationPlay = () => {

        setHidden(true);
        // audioRef.current.play();

    }
    const animationStop = () => {

        setHidden(false);
        // audioRef.current.pause();

    }
    const elements = []
    for (let i = 0; i < 5; i++) {
        elements.push(<Image key={i} alt="star" src={star} width={50} height={50} />);
    }

    return (

        <div className='hero' onMouseEnter={() => animationPlay()} onMouseOut={() => animationStop()}>
            <div className='hero__left'>
                <h4> S1 | 26 Episode</h4>
                <h1>DEMON SLAYER
                    KIMETSU NO YAIBA</h1>
                <div className='categories'>

                    <span className='hero__tag'>Animation</span> <span className='hero__tag'>Animation</span> <span className='hero__tag'>Animation</span>

                </div>
                <div className='hero__stars'>
                    {elements} <span>4.0</span>
                </div>
                <p>
                L'histoire suit le périple de Kamado Tanjirō qui cherche un moyen de rendre sa petite sœur Nezuko de nouveau humaine après sa transformation en démon.
                </p>
                <div className='hero__btn_wrap'>
                    <a href="" className='button-rounded'>watch</a>
                    <a href="" className='button-outline'>Add to watch</a>
                </div>
            </div>
            <div className='hero__right'>
                <div className='hero__img_wrap'>
                    {!hidden && (<Image alt="hero_img" src={img} width={542} height={395} />)}

                    {hidden && (<Image alt="hero_img" src={gif} width={542} height={395} />)}

                    <audio ref={audioRef} controls>
                        <source src='/audio/demon-slayer-rengoku.MP3' type="audio/mpeg" />
                    </audio>
                </div>
            </div>

        </div>
    )
}
