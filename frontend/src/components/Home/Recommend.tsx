'use client'
import React, { useRef, useEffect,useState, ComponentElement, RefObject } from 'react'
import Image from 'next/image'
import PopUp from './PopUp';
import { Anime } from '@/types/anime';
interface Recommendations {
  anime: Anime[]

}


export default function Recommend({anime}:Recommendations) {

const imageTrack = useRef<HTMLDivElement | null>(null);
const imageRef  = useRef<HTMLImageElement | null>(null);
const popRef = useRef<{handlerOpen:()=>void}>(null)
const [open, setOpen] = useState(false);
const list = anime.map((item,index)=>(
    <a key={item.documentId} onClick={()=>Open()}>
    <Image className='title_img' alt='' src={`${process.env.NEXT_PUBLIC_API_URL}${item.imgTitle.url}`} width={100} height={50}/>
    <Image className='image' ref={imageRef} alt='' src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail.url}`}  width={240} height={150} draggable="false" />
<span>{item.name} </span>
</a>
))
    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
       
            if (imageTrack.current) {     
          
                imageTrack.current.dataset.mouseDownAt = e.clientX.toString()
            }

            const handleMouseMove = (e: MouseEvent) => {
                
                if (imageTrack.current) 
                    {if(imageTrack.current.dataset.mouseDownAt === '0'){
                    return
                }
                    const mouseDownAt = imageTrack.current.dataset.mouseDownAt
                        ? parseFloat(imageTrack.current.dataset.mouseDownAt)
                        : 0;
                    const mouseDelta = e.clientX - mouseDownAt;
                    const maxDeltal = window.innerWidth/ 2
                    const pourcentage = (mouseDelta / maxDeltal) * -100
                    const  nextPercentageUnconstrained = imageTrack.current.dataset.prevPourcentage
                    ? parseFloat(imageTrack.current.dataset.prevPourcentage) + pourcentage
                    : 0;
                    const nextPourcentage =Math.max(Math.min(nextPercentageUnconstrained, 0), -90);
                    imageTrack.current.dataset.prevPourcentage = nextPourcentage.toString();
                    console.log(nextPourcentage)
                    imageTrack.current.animate({
                        transform :`translate(${nextPourcentage}%, 0%)`},{duration:1400,fill:"forwards"})
                        const images = imageTrack.current.getElementsByClassName("image");
                        Array.from(images).forEach((image=>{
                            const img = image as HTMLElement;
                            
                              img.animate({
                                
                               objectPosition: `${100 + nextPourcentage}% center`},{ duration: 1400, fill: "forwards" });
                        }))
                      
                }
               
            }  
            const handleMouseUp = (e:MouseEvent)=>{

            if(imageTrack.current){
                imageTrack.current.dataset.mouseDownAt = '0'
                imageTrack.current.dataset.prevPourcentage =  imageTrack.current.dataset.prevPourcentage
                const images = imageTrack.current.getElementsByClassName("image");
            Array.from(images).forEach((image) => {
                const img = image as HTMLElement;
                img.animate(
                    { objectPosition: `0% center` },
                    { duration: 1200, fill: "forwards" }
                );
            });
   
            }

            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
            window.addEventListener("mousemove", handleMouseMove);
             window.addEventListener('mouseup', handleMouseUp); 
        }
      

        window.addEventListener("mousedown", handleMouseDown); 
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
          }; 

    },[open])


const Open=()=>{

    if(popRef.current)
    popRef.current.handlerOpen()
}


    return (
        <section className='recommends'>
            <PopUp animeId={1} ref={popRef} hidden={false}/>
            <div className='recommends__content'>

         
            <h4>Découvre Ton Prochain Chef-d'œuvre Anime</h4>
            <h5>Laisse-nous te guider vers des aventures épiques, des émotions intenses et des histoires inoubliables, adaptées à tes goûts.</h5>
            <div> </div>
            <div id='track' ref={imageTrack} data-mouse-down-at="0" data-prev-pourcentage='0'>
{list}
 

            </div>
          
            </div>
  {/* <PopUp/> */}
        </section>
    )
}
