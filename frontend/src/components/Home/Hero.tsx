'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import img from '../../public/img/rengoku.webp'
import gif from '../../../public/img/demon-slayer-gif-converter.gif';
import music from '../../../public/audio/demon-slayer-rengoku.MP3';
import star from '../../../public/img/Star.png';


interface Picture{
    url:String
  }
  interface Media{
    url:String
  }
  interface Anime{
   id:Number,
   Name:String,
   description:String,
   notation:number,
   Highline_title:String
   categories:String
   gif:Media,
   musique:Media
 
  }
  
  interface Hero { 
 
  Headline:String,
  SubHeadline:String,
  Description:String,
  Picture: Picture,
  Anime:Anime  
  
  
  }

export default function Hero({Headline,SubHeadline,Description,Picture,Anime,}:Hero) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('Rendu côté client');
          }
    }, [hidden])
    const animationPlay = () => {

        setHidden(true);
        if(audioRef.current){
        audioRef.current.play();
        audioRef.current.loop= true;
    }

    }
    const animationStop = () => {

        setHidden(false);
        if(audioRef.current){
        audioRef.current.pause();
    }

    }
    const elements = []
    for (let i = 0; i < 5; i++) {
        elements.push(<Image key={i} alt="star" src={star} width={50} height={50} />);
    }

    return (

        <div className='hero' onClick={() => animationPlay()} onMouseOut={() => animationStop()}>
            <div className='hero__left'>
                <h4> {Headline}</h4>
                <h1>{SubHeadline}</h1>
               <div className='categories'>

                    <span className='hero__tag'>Animation </span> <span className='hero__tag'>Animation</span> <span className='hero__tag'>Animation</span>

                </div> 
                 <div className='hero__stars'>
                    {elements} <span>4.0</span>
                </div>
                <p>
                    {Description}
                </p> 
                 <div className='hero__btn_wrap'>
                    <a href="#" className='button-rounded'>watch <span><i className="fa fa-play" aria-hidden="true" > </i>
                    </span></a>
                    <a href="#" className='button-outline'>Add to watch</a>
                </div> 
            </div>
            <div className='hero__right'>
                <div className='hero__img_wrap'>
                    {!hidden && (<Image alt="thumbnail" width={542} height={395} src={`${process.env.NEXT_PUBLIC_API_URL}${Picture.url}`} unoptimized/>)}

                    {hidden && (<Image alt="thumbnail" width={542} height={395} src={`${process.env.NEXT_PUBLIC_API_URL}${Anime.gif.url}`} unoptimized/>)}

                    <audio ref={audioRef} controls>
                        <source src={`${process.env.NEXT_PUBLIC_API_URL}${Anime.musique.url}`} type="audio/mpeg" />
                    </audio>
                </div>
            </div>

        </div>
    )
}
