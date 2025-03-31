
import React from 'react'
import Image from 'next/image';

interface IBlogCard {
  title :string;
  body : string;
  right_side_circle?: boolean;
}





const BlogCard : React.FC<IBlogCard> = ( {title,body,right_side_circle = false},) => {

  
  return (
    <div className='blogCard'>
      <div className='grid'>
        <div className='grid__top'>
          <p>{title}</p>
          <Image src='/sharingan.png' alt="Sharingan Image" width={35} height={35} />
        </div>
        <div className='grid__middle'>
          <p>{body}</p>
        </div>
        <div className='grid__bottom'>
          <div className='grid__bottom__upper'>
            <a href="" className='btn-know-more'>En savoir Plus</a>
          </div>
          <div className='grid__bottom__lower'>
            <Image src="/sharingan.png" alt="Sharingan Image" width={35} height={35} />
          </div>
        </div>

        {/* Circle insice the div */}
        {right_side_circle ?  <div className='right-side-circle'></div> : <div></div>}
       
      </div>
    </div>
  )
}

export default BlogCard;