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
const list = anime.map((item,index)=>{
    <a onClick={()=>Open()}>
    <Image className='title_img' alt='' src='http://localhost:1337/uploads/title_friren_8979483797.png' width={100} height={50}/>
<Image className='image' ref={imageRef} alt='' src='http://localhost:1337/uploads/frieren_8c09e65ee6.png' width={240} height={150} draggable="false" />
<span> </span>
</a>
})
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
                <a onClick={()=>Open()}>
                    <Image className='title_img' alt='' src='http://localhost:1337/uploads/title_friren_8979483797.png' width={100} height={50}/>
                <Image className='image' ref={imageRef} alt='' src='http://localhost:1337/uploads/frieren_8c09e65ee6.png' width={240} height={150} draggable="false" />
                <span> Frieren beyond journey's end</span>
                </a>
                <a>
                <Image className='title_img' alt='' src='http://localhost:1337/uploads/title_claymore_01debd4778.png' width={100} height={50}/>
                <Image className='image' ref={imageRef} alt='' src='http://localhost:1337/uploads/claymore_d4a92f2446.png' width={240} height={150} draggable="false" />
                <span> Claymore</span>
                </a>
                <a>
                <Image className='title_img' alt='' src='http://localhost:1337/uploads/logo_tokyo_revenger_w_f282a529a0.webp' width={100} height={50}/>
                <Image className='image' ref={imageRef} alt='' src='http://localhost:1337/uploads/tokyo_reverger_c9ae4afe81.png' width={240} height={150} draggable="false" />
                <span> Tokyo revenger</span>
                </a>
                <a>
                <Image className='title_img' alt='' src='http://localhost:1337/uploads/stein_gate_title_dbfa0624b5.png' width={100} height={50}/>
                <Image className='image' ref={imageRef} alt='' src='http://localhost:1337/uploads/stein_gate_b2570b9b96.png' width={240} height={150} draggable="false" />
                <span> Stein gate</span>
                </a>
 

            </div>
          
            </div>
  {/* <PopUp/> */}
        </section>
    )
}
