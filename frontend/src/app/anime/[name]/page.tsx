import { Anime } from '@/types/anime'
import React from 'react'

interface AnimeProps{
    params:{
        id:String
    }
 
}
interface AnimeData{
  data:{
    Animes:Anime
  }
}

export default async function AnimePage({params}:AnimeProps) {
    const {id} = params

    async function getData(): Promise<AnimeData> {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/animes/es5c6vd9fnjr71zgmvpbas7o?populate[episodes][populate]=videos`, {
        headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
      })
      await new Promise((resolve => setTimeout(resolve, 4000)))
      return res.json();
    }
    let res = await getData();
    const animes = res.data
     const video = animes
    console.log(animes)
  return (
    <div>
        My anime page {id}
    </div>
  )
}
