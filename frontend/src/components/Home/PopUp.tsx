import React from 'react'
import Image from 'next/image'

export default function PopUp() {
  return (
    <div className='popup'>
    <div className='popup__content'>
        <div className='popup__title'>
    <Image alt='image_pop_up' src='http://localhost:1337/uploads/kaiji_title_ded98bf36f.png' width={500} height={500}/>
        </div>
     <Image className='popup__bg'  alt='' src='http://localhost:1337/uploads/kaiju_b28c73c9a0.gif' width={500}  height={500}/>
     <p>Lorem ipsum dolor sit amet coniae excepturi minima!</p>
</div>
    </div>
  )
}
