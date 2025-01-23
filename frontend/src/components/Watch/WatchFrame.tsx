'use client'


import { Anime, Episode, Video } from "@/types/anime"
import React, { useState } from "react"
interface Props {
    episodes: Episode[]

}



export default function WatchFrame({ episodes }: Props) {

    const [episodesList, setEpisodesList] = useState(episodes)
    const [videos, setVideo] = useState<Array<Video>>(episodesList[0].videos)

    console.log('episode')

    const OnChageSelect = () => {



    }

    return (
        <div className='watch_frame'>

            <div className="frame">
                <div className="frame__top">
                    <select>
                        {

                            episodesList.map((item, index) => (

                                <option key={index}> {item.title}</option>
                            )


                            )
                        }

                    </select>
                    <select>
                        {

                        videos.map((item,index)=>(
                            <option key={index} value={item.id}>Lecteur {index+1}</option>
                        ))


                        }

                    </select>


                </div>



            </div>

        </div>
    )
}