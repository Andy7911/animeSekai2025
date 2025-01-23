
import React from 'react'
import { Anime,Episode } from '@/types/anime'
import WatchFrame from '@/components/Watch/WatchFrame'
interface WatchProps{
  params:{
    id:String
  }
}


interface DataAnime{

    data:{
     episodes:Episode
    }

}

export default  async function WatchPage({params}:WatchProps) {
const {id} = params;
async function getData(): Promise<DataAnime> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/animes/${id}?populate[episodes][populate]=videos`, {
    headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
  })
  await new Promise((resolve => setTimeout(resolve, 4000)))
  return res.json();
}
let res = await getData();
const episodes = res.data.episodes;
// const episode = anime.map((item,index)=>{
// console.log('video',item)
// }
// )
console.log('anime:',episodes)
  return (
    <div className='watch_page'>


      <div className='watch_page__top'>

      </div>
      watch page {id}
   <WatchFrame episodes={episodes}/>
      <iframe width={640} height={360} src={`${episodes[0].videos[0].URL}`}></iframe>


      
    </div>
  )
}
