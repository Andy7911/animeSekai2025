'use client'
import React, {forwardRef, useState,useImperativeHandle,useRef, useEffect } from 'react'
import Image from 'next/image'

interface PopUpProps {
  animeId:Number
  hidden: Boolean

}
 const PopUp= forwardRef((props:PopUpProps,ref)=> {

  const localRef = useRef<HTMLDivElement>(null);
  const { hidden = true } = props;
const [visible,isVisible ] = useState(props.hidden)
const [anime,setAnime] = useState(null)
const[uuid,setUuid]  = useState<string>('')
useEffect(()=>{


})
useImperativeHandle(ref, () => ({
handlerOpen:(id:string)=>{
  
isVisible(true)
console.log('uuid,',id)
setUuid(id)
}
}));
const handlerClose=()=>{
isVisible(false)
}
  return (
    <div /// <reference path="" />
    >
  
    <div className={`popup ${visible? 'visible':''}`}>
     {/* <audio  controls>
      <source src={``} type="audio/mpeg" />
    </audio>  */}
      <div className='popup__content'>
        <div className='popup__close' onClick={()=>handlerClose()}> <i className="fa-solid fa-x" style={{color:'#000'}} aria-hidden='true' ></i></div>
        <div className='popup__title'>
          <Image alt='image_pop_up' src='http://localhost:1337/uploads/kaiji_title_ded98bf36f.png' width={500} height={500} />
        </div>
        <Image className='popup__bg' alt='' src='http://localhost:1337/uploads/kaiju_b28c73c9a0.gif' width={500} height={500} />
        <div className='popup__text'>
        <p>À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie qu'il ait eue...am voluptas est quo, cupiditate minus sed dolore? Enim, maiores odio aperiam, tempora ab eos illum fugit eius est molestiae sunt esse!</p>
        <a href={`/watch/${uuid}`}> Watch </a>
        </div>
      </div>
    </div>
   
    </div>
  )
})
export default PopUp;